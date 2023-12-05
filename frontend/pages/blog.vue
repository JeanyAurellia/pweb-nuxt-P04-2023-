<template>
  <div>
<<<<<<< HEAD
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
=======
  <div class="hero overlay inner-page bg-primary py-5">
    <div class="container">
      <div class="row align-items-center justify-content-center text-center pt-5">
        <div class="col-lg-6">
          <h1 class="heading text-white mb-3" data-aos="fade-up">Blog</h1>
>>>>>>> 7dbf6733358f75192c5cad2d04d819ec9f5d0338
        </div>
      </div>
    </div>
  </div>
<<<<<<< HEAD
</template>

<script setup>
const datas = await $fetch('http://localhost:8000/api/Blog');
</script>
=======

  <div class="section search-result-wrap">
    <div class="container">
      
      <div class="row posts-entry">
        <div class="col-lg-8">
          <div class="blog-entry d-flex blog-entry-search-item">
            <RouterLink to="/single" class="img-link me-4">
              <img src="~/assets/images/img_1_sq.jpg" alt="Image" class="img-fluid">
            </RouterLink>
            <div>
              <span class="date">Apr. 14th, 2022 &bullet; <RouterLink to="#">Business</RouterLink></span>
              <h2><RouterLink to="">Thought you loved Python? Wait until you meet Rust</RouterLink></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
            </div>
          </div>

          <div class="blog-entry d-flex blog-entry-search-item">
            <RouterLink to="/single" class="img-link me-4">
              <img src="~/assets/images/img_2_sq.jpg" alt="Image" class="img-fluid">
            </RouterLink>
            <div>
              <span class="date">Apr. 14th, 2022 &bullet; <RouterLink to="#">Business</RouterLink></span>
              <h2><RouterLink to="/single">Thought you loved Python? Wait until you meet Rust</RouterLink></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
            </div>
          </div>

          <div class="blog-entry d-flex blog-entry-search-item">
            <RouterLink to="/single" class="img-link me-4">
              <img src="~/assets/images/img_3_sq.jpg" alt="Image" class="img-fluid">
            </RouterLink>
            <div>
              <span class="date">Apr. 14th, 2022 &bullet; <RouterLink to="#">Business</RouterLink></span>
              <h2><RouterLink to="/single">Thought you loved Python? Wait until you meet Rust</RouterLink></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
            </div>
          </div>

          <div class="blog-entry d-flex blog-entry-search-item">
            <RouterLink to="/single" class="img-link me-4">
              <img src="~/assets/images/img_4_sq.jpg" alt="Image" class="img-fluid">
            </RouterLink>
            <div>
              <span class="date">Apr. 14th, 2022 &bullet; <RouterLink to="#">Business</RouterLink></span>
              <h2><RouterLink to="/single">Thought you loved Python? Wait until you meet Rust</RouterLink></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
            </div>
          </div>

          <div class="blog-entry d-flex blog-entry-search-item">
            <RouterLink to="/single" class="img-link me-4">
              <img src="~/assets/images/img_5_sq.jpg" alt="Image" class="img-fluid">
            </RouterLink>
            <div>
              <span class="date">Apr. 14th, 2022 &bullet; <RouterLink to="#">Business</RouterLink></span>
              <h2><RouterLink to="/single">Thought you loved Python? Wait until you meet Rust</RouterLink></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
            </div>
          </div>

        </div>

        <div class="col-lg-4 sidebar">

          <div class="sidebar-box search-form-wrap mb-4">
            <form action="#" class="sidebar-search-form">
              <span class="bi-search"></span>
              <input type="text" class="form-control" id="s" placeholder="Type a keyword and hit enter">
            </form>
          </div>

          <div class="sidebar-box">
            <h3 class="heading">Categories</h3>
            <ul class="categories">
              <li><RouterLink to="#">Food <span>(12)</span></RouterLink></li>
              <li><RouterLink to="#">Travel <span>(22)</span></RouterLink></li>
              <li><RouterLink to="#">Lifestyle <span>(37)</span></RouterLink></li>
              <li><RouterLink to="#">Business <span>(42)</span></RouterLink></li>
              <li><RouterLink to="#">Adventure <span>(14)</span></RouterLink></li>
            </ul>
          </div>
          <!-- END sidebar-box -->

          <div class="sidebar-box">
            <h3 class="heading">Tags</h3>
            <ul class="tags">
              <li><RouterLink to="#">Travel</RouterLink></li>
              <li><RouterLink to="#">Adventure</RouterLink></li>
              <li><RouterLink to="#">Food</RouterLink></li>
              <li><RouterLink to="#">Lifestyle</RouterLink></li>
              <li><RouterLink to="#">Business</RouterLink></li>
              <li><RouterLink to="#">Freelancing</RouterLink></li>
              <li><RouterLink to="#">Travel</RouterLink></li>
              <li><RouterLink to="#">Adventure</RouterLink></li>
              <li><RouterLink to="#">Food</RouterLink></li>
              <li><RouterLink to="#">Lifestyle</RouterLink></li>
              <li><RouterLink to="#">Business</RouterLink></li>
              <li><RouterLink to="#">Freelancing</RouterLink></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script lang="ts" setup>
// import { SingleBlog } from '~/components/single-blog.vue';
import { RouterLink } from 'vue-router';


</script>
<style>

</style>
>>>>>>> 7dbf6733358f75192c5cad2d04d819ec9f5d0338
