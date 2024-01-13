<template>
  <nav class="bg-transparent border-b border-slate-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0">
            <img class="h-8 w-8" src="/logo.png" alt="Logo" />
          </router-link>
          <div class="hidden md:block">
            <div class="mx-10 flex items-baseline justify-center space-x-4">
              <router-link
                to="/"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Home</router-link
              >
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Men</a
              >
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Women</a
              >
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Children</a
              >
              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Stores</a
              >
            </div>
          </div>
        </div>
        <div class="inline-block">
          <div class="ml-4 flex items-center md:ml-6">
            <div class="ml-3 relative">
              <div>
                <button
                  class="p-1 h-8 w-8 flex items-center justify-center border-2 border-slate-500 rounded-full text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-label="Notifications"
                >
                  <i class="fa fa-bell" aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <div class="ml-3 relative">
              <div>
                <button
                  class="p-1 h-8 w-8 flex items-center justify-center border-2 border-slate-500 rounded-full text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-label="Notifications"
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="ml-3 relative">
              <div>
                <button
                  class="p-1 h-8 w-8 flex items-center justify-center border-2 border-slate-500 rounded-full text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-label="Notifications"
                >
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="ml-3 relative">
              <div>
                <button
                  class="p-1 h-8 w-8 flex items-center justify-center border-2 border-slate-500 rounded-full text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-label="Notifications"
                >
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <button
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 ml-3"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Home</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >About</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Services</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
/* Add your custom styles here */
</style>
