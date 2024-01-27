<template>
  <div class="!h-[60vh] showcase">
    <div class="overlay">
      <div class="text-left text">
        <div class="block mb-6">WEB APPS IN SEVEN DAYS OR UNDER</div>
        <div class="text-4xl lg:text-6xl mb-16">
          We've Got Your Sole Mate in Stock
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button
            class="btn bg-theme-orange btn-flat py-3 hover:bg-transparent hover:border hover:border-[var(--theme-orange)]"
          >
            Shop Now
          </button>
          <button
            class="btn btn-flat py-3 bg-transparent border border-[var(--theme-orange)] hover:bg-[var(--theme-orange)] hover:border-transparent hover:text-white"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { products } from "@/assets/js/products.js";
</script>

<style lang="scss" scoped>
.showcase {
  position: relative;
  background: #1e1e1e
    url("https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    no-repeat center center;
  background-size: cover;
  // width: 100%;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(27, 38, 59, 0.6);

    .text {
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
      max-width: 40%;

      .block {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.2em;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .showcase {
    .overlay {
      .text {
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
        max-width: 60%;

        .block {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }
      }
    }
  }
}
</style>
