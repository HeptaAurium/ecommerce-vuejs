<template>
  <footer class="bg-theme-dark text-white py-4 footer">
    <div class="container mx-auto text-center">
      <p class="text-gray-600 mb-3">
        Photos courtesy of
        <a
          href="http://unsplash.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:text-blue-600"
          >Unsplash</a
        >
      </p>
      <div class="flex flex-col lg:flex-row justify-center">
        <p class="text-gray-600 mb-3 mr-4">
          © {{ new Date().getFullYear() }}
          <a
            href="http://ichaelinc.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-600"
            >iChael inc</a
          >
          . All rights reserved.
        </p>
        <p class="text-gray-600">
          Designed and Developed by
          <a
            href="http://ichaelinc.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-600"
            >Ngugi K</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
