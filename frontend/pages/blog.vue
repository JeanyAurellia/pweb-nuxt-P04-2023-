<template>
  <div>
    <div
      v-for="data in datas.docs"
      :key="data.id"
      class="container mx-auto mt-8 p-6 bg-white dark:bg-gray-900 dark:text-gray-50 rounded-md shadow-lg"
    >
      <div class="flex flex-col lg:flex-row">
        <div
          class="bg-no-repeat bg-cover w-full h-40 lg:h-auto lg:w-40 dark:bg-gray-700 rounded-md"
          :style="{
            backgroundImage: `url('${data.image || '~/assets/default-image.jpg'}')`,
          }"
        ></div>
        <div class="flex flex-col justify-between flex-1 ml-0 lg:ml-6 mt-4 lg:mt-0">
          <div class="flex items-center">
            <span class="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-900 dark:bg-gray-800 dark:text-gray-300">
              {{ data.label }}
            </span>
          </div>
          <h1 class="text-3xl font-semibold mt-2">{{ data.name }}</h1>
          <p class="flex-1 pt-2">{{ data.description }}</p>
          <a
            rel="noopener noreferrer"
            href="#"
            class="inline-flex items-center pt-2 pb-4 space-x-2 text-sm text-violet-400 dark:text-violet-400"
          >
            <span>Read more</span>
          </a>
          <div class="flex items-center justify-between">
            <div class="flex space-x-2">
              <!-- Remove the SVG element -->
            </div>
            <span class="text-xs">3 min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const datas = await $fetch('http://localhost:8000/api/Blog');
</script>
