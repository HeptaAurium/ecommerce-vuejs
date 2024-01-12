<template>
  <div class="showcase rounded-lg"></div>
  <div class="products my-1">
    <div class="grid grid-cols-12 gap-1">
      <ProductCard v-for="(product, key) in products" :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/product/cards/Main.vue";
import { products } from "@/assets/js/products.js";
</script>

<style lang="scss" scoped></style>
