<template>
  <div
    class="col-span-6 md:col-span-4 lg:col-span-3 cursor-pointer"
    @click="viewProduct(product)"
  >
    <div
      class="flex flex-col bg-theme-dark-2 shadow-lg rounded-lg max-w-md mx-auto p-2 h-full pb-3"
    >
      <div class="flex-shrink-0 rounded-lg">
        <img
          :src="product.images.image1"
          alt="Product image"
          class="h-28 lg:h-48 w-full object-cover rounded-lg"
        />
      </div>
      <div class="flex-1 mt-4">
        <h2 class="text-gray-300 font-bold text-sm md:text-xl lg:text-2xl">
          {{ product.product_name }}
        </h2>
        <p class="text-gray-400 text-sm mt-2 hidden lg:block">
          This is a brief description of the product that highlights its
          features and benefits.
        </p>
        <div
          class="flex items-center flex-col lg:flex-row justify-start lg:justify-center text-left mt-1.5 lg:mt-4 w-full"
        >
          <span class="text-gray-100 font-semibold text-sm lg:text-lg text-left"
            >${{ product.discounted_price }}</span
          >
          <div class="flex flex-row justify-start lg:justify-center">
            <span class="text-gray-400 line-through ml-2 text-xs lg:text-sm"
              >${{ product.product_price }}</span
            >
            <span class="text-green-600 ml-2 text-xs">Save {{ saving }}%</span>
          </div>
        </div>
        <div class="flex items-center justify-center mt-2 hidden md:block">
          <span class="text-gray-400 text-xs lg:text-sm">Free shipping</span>
          <span class="text-gray-400 text-xs lg:text-sm ml-2">|</span>
          <span class="text-gray-400 text-xs lg:text-sm ml-2"
            >30-day return policy</span
          >
        </div>
        <div class="flex items-center mt-4 space-x-4 grid grid-cols-3 hidden">
          <!-- Someone suggested to hide this section -->
          <button
            class="bg-blue-600 text-white px-4 py-1 lg:py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 col-span-2 flex flex-row items-center justify-center"
          >
            <i
              class="fa fa-cart-plus text-sm lg:text-lg"
              aria-hidden="true"
            ></i>
            <span class="hidden lg:block">Add to cart</span>
          </button>
          <button
            class="bg-gray-200 text-gray-900 px-4 py-1 lg:py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 col-span-1 flex flex-row items-center justify-center"
          >
            <i class="far fa-heart text-sm lg:text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { viewProduct } from "@/assets/js/products";
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

<style lang="scss" scoped></style>
