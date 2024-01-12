<template>
  <div class="grid gap-4">
    <div>
      <img class="h-auto max-w-full rounded-lg" :src="product.image" alt="" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  product: Object,
});

const saving = ref(
  Math.round(
    ((props.product.product_price - props.product.discounted_price) /
      props.product.product_price) *
      100
  )
);
</script>
