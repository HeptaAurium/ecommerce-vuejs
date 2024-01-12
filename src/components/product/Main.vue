<template>
  <div class="sm:col-span-12 md:col-span-4 lg:col-span-3">
    <div
      class="flex flex-col bg-theme-dark-2 shadow-lg rounded-lg max-w-md mx-auto p-4"
    >
      <div class="flex-shrink-0">
        <img
          :src="product.image"
          alt="Product image"
          class="h-48 w-full object-cover"
        />
      </div>
      <div class="flex-1 mt-4">
        <h2 class="text-gray-300 font-bold text-2xl">
          {{ product.product_name }}
        </h2>
        <p class="text-gray-400 text-sm mt-2">
          This is a brief description of the product that highlights its
          features and benefits.
        </p>
        <div class="flex items-center mt-4">
          <span class="text-gray-100 font-semibold text-lg"
            >${{ product.discounted_price }}</span
          >
          <span class="text-gray-400 line-through ml-2"
            >${{ product.product_price }}</span
          >
          <span class="text-green-600 ml-2 text-xs">Save {{ saving }}%</span>
        </div>
        <div class="flex items-center mt-2">
          <span class="text-gray-400 text-sm">Free shipping</span>
          <span class="text-gray-400 text-sm ml-2">|</span>
          <span class="text-gray-400 text-sm ml-2">30-day return policy</span>
        </div>
        <div class="flex items-center mt-4 space-x-4">
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Add to cart
          </button>
          <button
            class="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
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

<style lang="scss" scoped></style>
