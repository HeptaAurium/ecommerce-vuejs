<template>
  <div class="p-1 shadow-sm">
    <div class="showcase rounded-lg relative">
      <TopNav />
      <Showcase />
    </div>
    <div class="products my-3">
      <div class="grid grid-cols-12 gap-1">
        <ProductCard v-for="(product, key) in products" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "@/components/product/cards/Main.vue";
import TopNav from "@/components/layouts/top-nav/Main.vue";
import Showcase from "@/components/showcase/Main.vue";

import { products } from "@/assets/js/products.js";
</script>

<style lang="scss" scoped></style>
