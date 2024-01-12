<template>
  <div class="showcase rounded-lg"></div>
  <div class="products my-3 py-3">
    <div class="grid grid-cols-12 gap-4">
      <ProductCard v-for="(product, key) in products" :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/product/Main.vue";
import { products } from "@/assets/js/products.js";
</script>

<style lang="scss" scoped></style>
