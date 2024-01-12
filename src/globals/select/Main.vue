<!-- DOCUMENTATION AT THE BOTTOM OF THIS FILE -->
<template>
  <div class="relative">
    <div class="relative flex items-center justify-between">
      <input :value="modelValue" type="hidden" />
      <input
        type="text"
        id="main-input"
        v-model.trim="selected.label"
        class="w-full form-control custom-select-input bg-slate-800 text-gray-100 border border-gray-100"
        :class="{
          'rounded-t-lg': slotShown === true,
          'rounded-lg': slotShown === false,
          'border-danger': props.class.includes('border-danger'),
        }"
        :placeholder="placeholder"
        @focusout="focusOut"
        @focus="searchOperation"
        :disabled="disabled"
      />
      <div
        class="absolute inset-y-auto right-2 flex items-center pointer-events-none flex flex-col"
      >
        <i class="fa fa-caret-up" aria-hidden="true"></i>
        <i class="fa fa-caret-down -mt-2" aria-hidden="true"></i>
      </div>
    </div>
    <div
      class="z-10 absolute bg-slate-800 border border-slate-600 text-gray-400 rounded-b-lg shadow sm:w-auto md:w-full dark:bg-gray-700 overflow-x-auto"
      v-if="slotShown"
    >
      <div class="py-2 text-sm text-gray-400 dark:text-gray-400">
        <div
          v-if="options.length > 0"
          v-for="(option, key) in options"
          :key="key"
        >
          <button
            @click="selectOption(option)"
            class="inline-flex w-full px-4 py-2 hover:bg-primary hover:text-white dark:hover:bg-primary text-left"
          >
            <span
              v-if="typeof label === 'object'"
              v-for="(l, k) in label"
              class="mr-1"
              >{{ option[l] }}</span
            >
            <span :class="{ capitalize: label == 'name' }" v-else>{{
              option[label]
            }}</span>
          </button>
        </div>
        <div v-else>
          <button
            type="button"
            class="inline-flex w-full px-4 py-2 hover:bg-primary hover:text-white dark:hover:bg-primary"
          >
            No matches found!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted } from "vue";

const props = defineProps({
  label: {
    type: [String, Object],
    default: "name",
  },
  value: {
    type: String,
    default: "id",
  },
  placeholder: {
    type: String,
    default: "",
  },
  options: {
    type: Object,
    default: [],
  },
  modelValue: {
    type: [String, Number],
  },
  class: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

//
onMounted(() => {
  const elem = document.getElementById("main-input");
  if (props.class !== undefined && props.class !== "") {
    let classes = props.class.split(" ");
    for (let i = 0; i < classes.length; i++) {
      elem.classList.add(classes[i]);
    }
  }
});

const emit = defineEmits(["update:modelValue", "optionSelected"]);

const optionWasSelected = ref(false);
const slotShown = ref(false);
const selected = reactive({
  value: "",
  label: "",
});

const prevSelected = reactive({
  value: "",
  label: "",
});

const searchOperation = (e) => {
  Object.assign(prevSelected, selected);
  slotShown.value = true;
  selected.label = "";
};

const selectOption = (option, optionSelected = true) => {
  let _label = "";

  if (typeof props.label === "object") {
    let _labels = props.label;
    _labels.forEach((el) => {
      _label += option[el] + " ";
    });
  }

  selected.value = option[props.value];
  selected.label = _label !== "" ? _label : option[props.label];
  optionWasSelected.value = true;

  emit("update:modelValue", selected.value);
  if (optionSelected) {
    emit("optionSelected", optionSelected);
  }
};

const focusOut = () => {
  setTimeout(() => {
    if (selected.value == "" && prevSelected.value !== "") {
      emit("update:modelValue", selected.value);
    }
    if (selected.label == "") {
      selected.label = prevSelected.label;
    }
    slotShown.value = false;
  }, 1000);
  handleNotSelected();
};

// const modelValue = computed(() => props.modelValue);
const options = computed(() => props.options);

watch(
  () => props,
  (newVal, oldVal) => {
    let modelValue = props.modelValue;
    if (modelValue !== "") {
      let _options = options.value,
        value = props.value,
        _option = _options.find((i) => i[value] == modelValue);
      if (_option !== undefined) {
        selectOption(_option, false);
      }
    } else {
      clearSelected();
    }
  },
  { deep: true }
);

watch(
  () => options,
  (newVal, oldVal) => {
    if (newVal.length == 0) {
      setTimeout(() => {
        clearSelected();
      }, 2000); //allow some time to load
    }
  }
);

const handleNotSelected = () => {
  if (optionWasSelected.value == false) {
    clearSelected(true);
  }
  optionWasSelected.value = false;
};

function clearSelected(clearLabel = false) {
  selected.value = "";
  if (clearLabel) {
    selected.label = "";
  }
}
</script>

<!--

  *** Props ***
  ** PROP **        ** TYPE **      ** DEFAULT **    ** DESCRIPTION **
  label             String, Object  name            label to be displayed in the dropdown eg first_name, last_name, name, can be a string or object `label='name' || label=['first_name', 'last_name']`
  value             String          id              value to be returned eg id, can be a string `value='id' 
  placeholder       String          ''              placeholder to be displayed in the input field
  options           Object          []              options to be displayed in the dropdown
  modelValue        String, Number  ''              v-model of the component, it is the value that is returned when an option is selected
  class             String          ''              custom class to be added to the component
  disabled          Boolean         false           disable the component


  *** Events ***
  ** EVENT **               ** DESCRIPTION **
  update:modelValue         emitted when an option is selected, returns the value of the selected option
  optionSelected            emitted when an option is selected, returns true

*** Examples ***
** Example 1: Array fetched from backend (with live search) [GraphQL, Laravel] **
<template>
    <CustomSelect 
      label="name" 
      placeholder="Search for office" 
      :options="officeOptions" 
      class="form-control w-4/5 box pr-2 bg-white"
      v-model.number="validate.office_id.$model" @keyup="officeSearchInput($event)"/>
</template>
<script setup>
  const officeSearchInput = (e)=> {
    setTimeout(() => {
      searchOffices(e.target.value);
    }, 500);
  }
  searchOffices(''); // incclude this if you want to load the options on page load (number depends on graphql query)
  const searchOffices = (search) => {
    const { onResult } = useQuery(
      SEARCH_OFFICES_QUERY,
      () => ({
        search,
        status_id: 1,
      }),
      {
        fetchPolicy: "network-only",
      }
    );

    onResult((queryResult) => {
      officeOptions.value = queryResult.data.offices.data;
    });
};
</script>
 

** Example 2: Array fetched from backend (without live search) [GraphQL, Laravel] **
<template>
    <CustomSelect 
      label="name" 
      placeholder="Search for office" 
      :options="officeOptions" 
      class="form-control w-4/5 box pr-2 bg-white"
      v-model.number="validate.office_id.$model"/>
</template>
<script setup>
  const officeOptions = ref([]);
  const { onResult } = useQuery(
    SEARCH_OFFICES_QUERY,
    () => ({
      search,
      status_id: 1,
    }),
    {
      fetchPolicy: "network-only",
    }
  );

  onResult((queryResult) => {
    officeOptions.value = queryResult.data.offices.data;
  });
</script>


** Example 3: Local array (No backend) **
<template>
  <CustomSelect 
    label="name" 
    :value="'value'" 
    placeholder="Filter  column" 
    :options="sortByCols"
    class="form-control w-4/5 box pr-2 bg-white" 
    v-model="searchData.sort_column" />
</template>
<script setup>
  const sortByCols = ref([
    { name: "Name", value: "name" },
    { name: "ID No", value: "identification_number" },
    { name: "Last Update Date", value: "updated_at" },
    { name: "Date Created", value: "created_at" },
  ]);
</script>

** Example 4: Array with preset values **
<template>
  <CustomSelect 
    label="name" 
    :value="'value'" 
    placeholder="Filter  column" 
    :options="sortByCols"
    class="form-control w-4/5 box pr-2 bg-white" 
    v-model="searchData.sort_column" />
</template>
<script setup>
  const searchData = reactive({
      sort_column: "name",
      sort_direction: "asc",
  });
  const sortByCols = ref([
    { name: "Name", value: "name" },
    { name: "ID No", value: "identification_number" },
    { name: "Last Update Date", value: "updated_at" },
    { name: "Date Created", value: "created_at" },
  ]);
</script> 

-->
