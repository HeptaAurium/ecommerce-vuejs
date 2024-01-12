<template>
  <div class="w-full lg:w-[90vw] xl:w-[70vw] mx-auto">
    <div class="showcase rounded-lg">
      <div class="grid grid-cols-12 h-full gap-2">
        <div class="col-span-12 lg:col-span-6 h-full rounded-lg">
          <img
            :src="product.image"
            class="object-fit w-full rounded-lg"
            alt=""
          />
        </div>
        <div class="col-span-12 lg:col-span-6 h-full rounded-lg pt-4 lg:pt-0">
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
            <button
              class="bg-blue-600 text-white my-4 px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full flex flex-row items-center justify-center"
            >
              <i class="fa fa-cart-plus mr-2" aria-hidden="true"></i>
              <span>Add to cart</span>
            </button>
            <div class="description my-4">
              <div class="text-lg mb-3">Description</div>
              {{ description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import { products } from "@/assets/js/products";
import Sizing from "@/components/sizing/Main.vue";

const router = useRoute();
const productId = router.params.productId;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rating = ref(getRandomInt(1, 5));

const description = ref(
  "This is a brief description of the product that highlights its features and benefits. "
);

const product = ref({});
product.value = products.find((product) => product.id === parseInt(productId));

const sizes = ref([36, 37, 38, 39, 40, 41, 42, 43, 44, 45]);
</script>

<style>
.showcase {
  /* max-height: 70vh !important; */
}
</style>
