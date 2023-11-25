<template>
  <div>
  <div class="hero overlay inner-page bg-primary py-5">
    <div class="container">
      <div class="row align-items-center justify-content-center text-center pt-5">
        <div class="col-lg-6">
          <h1 class="heading text-white mb-3" data-aos="fade-up">Blog</h1>
        </div>
      </div>
    </div>
  </div>

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

          <div class="row text-start pt-5 border-top">
            <div class="col-md-12">
              <div class="custom-pagination">
                <span>1</span>
                <RouterLink to="#">2</RouterLink>
                <RouterLink to="#">3</RouterLink>
                <RouterLink to="#">4</RouterLink>
                <span>...</span>
                <RouterLink to="#">15</RouterLink>
              </div>
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
          <!-- END sidebar-box -->
          <div class="sidebar-box">
            <h3 class="heading">Popular Posts</h3>
            <div class="post-entry-sidebar">
              <ul>
                <li>
                  <RouterLink to="">
                    <img src="~/assets/images/img_1_sq.jpg" alt="Image placeholder" class="me-4 rounded">
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    <img src="~/assets/images/img_2_sq.jpg" alt="Image placeholder" class="me-4 rounded">
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="">
                    <img src="~/assets/images/img_3_sq.jpg" alt="Image placeholder" class="me-4 rounded">
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- END sidebar-box -->

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