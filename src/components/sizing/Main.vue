<template>
  <div class="flex flex-row flex-wrap">
    <div
      class="box border border-slate-200 rounded cursor-pointer m-0.5 p-3 flex items-center justify-center size"
      v-for="(size, key) in sizes"
      @click="selectSize($event)"
    >
      <span class="text-slate-100" @click="selectSize($event)">
        {{ size }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sizes: Array,
});

const selectSize = (e) => {
  let s = document.querySelectorAll(".size");
  console.log(s);
  s.forEach((el) => {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
};
</script>

<style lang="scss" scoped>
.size {
  transition: 0.6s;
}
.size.active {
  background: #1d4ed8;
  border-color: #1d4ed8 !important;
}
</style>
