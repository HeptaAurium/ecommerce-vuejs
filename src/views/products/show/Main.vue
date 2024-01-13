<template>
  <div class="showcase rounded">
    <TopNav />
    <div class="w-full lg:w-[90vw] xl:w-[70vw] mx-auto lg:pt-4">
      <div class="grid grid-cols-12 h-full gap-2">
        <div class="col-span-12 lg:col-span-6 lg:h-full rounded-lg p-2">
          <img :src="imageInView" class="object-fit w-full rounded-lg" alt="" />
          <div class="flex flex-row my-2">
            <div
              class="col h-18"
              v-for="(i, k) in product.images"
              @click="switchImage(i)"
            >
              <div
                class="col h-18 border-2 rounded-lg p-1 mr-1 cursor-pointer hover:border-blue-600 hover:bg-blue-600"
                :class="{
                  'border-blue-600 bg-blue-600': i == imageInView,
                  'bg-slate-500 border-slate-500': i != imageInView,
                }"
              >
                <img :src="i" class="h-16 rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6 h-full rounded-lg pt-4 px-4">
          <div class="flex justify-start text-left pl-3 flex-col">
            <div class="text-3xl text-slate-100 font-bold">
              {{ product.product_name }}
            </div>
            <div
              class="flex items-center flex-row justify-start text-left my-4 w-full"
            >
              <span
                class="text-gray-100 font-semibold text-lg lg:text-2xl text-left"
                >${{ product.discounted_price }}</span
              >
              <span class="text-gray-400 line-through ml-2 text-xs lg:text-sm"
                >${{ product.product_price }}</span
              >
              <span class="text-green-600 ml-2 text-xs"
                >Save {{ saving }}%</span
              >
            </div>
            <div class="rating flex flex-row items-center my-2">
              <span class="text-lg text-slate-400 mr-3">
                {{ rating }} <small class="text-xs">/5</small>
              </span>
              <i
                class="fa fa-star text-yellow-500"
                aria-hidden="true"
                v-for="(i, k) in rating"
              ></i>
              <i
                class="fa fa-star text-slate-700"
                aria-hidden="true"
                v-for="(i, k) in 5 - rating"
              ></i>

              <a href="#" class="text-blue-400 ml-auto">See all reviews</a>
            </div>
            <Sizing :sizes="sizes" class="my-4" />
            <div class="grid grid-cols-2 gap-2">
              <button
                class="bg-blue-600 text-white my-4 px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full flex flex-row items-center justify-center"
              >
                <i class="fa fa-cart-plus mr-2" aria-hidden="true"></i>
                <span>Add to cart</span>
              </button>
              <router-link
                to="/checkout"
                class="bg-orange-600 text-white my-4 px-4 py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 w-full flex flex-row items-center justify-center"
              >
                <i class="fa fa-credit-card mr-2" aria-hidden="true"></i>
                <span>Checkout</span>
              </router-link>
            </div>
            <div class="description my-4 text-xs font-light">
              <div class="text-lg font-bold mb-3">Description</div>
              {{ description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="products my-1 px-1">
    <div class="leading text-left text-2xl text-white my-5">
      Similar Products
    </div>
    <div class="grid grid-cols-12 gap-1">
      <ProductCard
        v-for="(product, key) in filteredProducts"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { products } from "@/assets/js/products";

import ProductCard from "@/components/product/cards/Main.vue";
import Sizing from "@/components/sizing/Main.vue";
import TopNav from "@/components/layouts/top-nav/Main.vue";

const router = useRoute();
const productId = router.params.productId;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rating = ref(getRandomInt(1, 5));

const description = ref(
  "Lorem ipsum dolor sit amet. Sed euismod, sapien quis lacinia bibendum. Sed euismod, sapien quis lacinia bibendum, nunc elit bibendum odio, vel tincidunt sapien enim vel velit. Sed euismod, sapien quis lacinia bibendum"
);

const product = ref({});
product.value = products.find((product) => product.id === parseInt(productId));
const imageInView = ref(product.value.images.image1);

const sizes = ref([36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);

const switchImage = (image) => {
  imageInView.value = image;
};

const filteredProducts = products.filter(
  (product) => product.id !== parseInt(productId)
);
const saving = ref(
  Math.round(
    ((product.value.product_price - product.value.discounted_price) /
      product.value.product_price) *
      100
  )
);
</script>

<style>
#app {
  padding: 0 !important;
}
.showcase {
  /* max-height: 70vh !important; */
  transition: all 0.8s ease-in-out;
}
</style>
