<template>
  <div>
    <header class="masthead linear">
            <div class="container">
                <div class="masthead-subheading">Welcome To Our Blog!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <!-- <a class="btn btn-primary btn-xl text-uppercase" href="/blog">Tell Me More</a> -->
            </div>
    </header>
          <!-- Start retroy layout blog posts -->
      <section class="section bg-light">
        <div class="container">
          <div class="row align-items-stretch retro-layout">
            <div class="col-md-4">
              <RouterLink to="/single" class="h-entry mb-30 v-height gradient">

                <div class="featured-img head1"></div>

                <div class="text">
                  <span class="date">Apr. 14th, 2022</span>
                  <h2>AI can now kill those annoying cookie pop-ups</h2>
                </div>
              </RouterLink>
              <RouterLink to="/single" class="h-entry v-height gradient">

                <div class="featured-img head2"></div>

                <div class="text">
                  <span class="date">Apr. 14th, 2022</span>
                  <h2>Don’t assume your user data in the cloud is safe</h2>
                </div>
              </RouterLink>
            </div>
            <div class="col-md-4">
              <RouterLink to="/single" class="h-entry img-5 h-100 gradient">

                <div class="featured-img head3"></div>

                <div class="text">
                  <span class="date">Apr. 14th, 2022</span>
                  <h2>Why is my internet so slow?</h2>
                </div>
              </RouterLink>
            </div>
            <div class="col-md-4">
              <RouterLink to="/single" class="h-entry mb-30 v-height gradient">

                <div class="featured-img head4"></div>

                <div class="text">
                  <span class="date">Apr. 14th, 2022</span>
                  <h2>Startup vs corporate: What job suits you best?</h2>
                </div>
              </RouterLink>
              <RouterLink to="/single" class="h-entry v-height gradient">

                <div class="featured-img head5"></div>

                <div class="text">
                  <span class="date">Apr. 14th, 2022</span>
                  <h2>Thought you loved Python? Wait until you meet Rust</h2>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
      <!-- End retroy layout blog posts -->


      <div class="section bg-light">
        <div class="container">

          <div class="row mb-4">
            <div class="col-sm-6">
              <!-- <h2 class="posts-entry-title">Travel</h2> -->
            </div>
            <!-- <div class="col-sm-6 text-sm-end"><RouterLink to="category.html" class="read-more">View All</RouterLink></div> -->
          </div>

          <div class="row align-items-stretch retro-layout-alt">

            <div class="col-md-5 order-md-2">
              <RouterLink to="/single" class="hentry img-1 h-100 gradient">
                <div class="featured-img bot1"></div>
                <div class="text">
                  <span>February 12, 2019</span>
                  <h2>Meta unveils fees on metaverse sales</h2>
                </div>
              </RouterLink>
            </div>

            <div class="col-md-7">

              <RouterLink to="/single" class="hentry img-2 v-height mb30 gradient">
                <div class="featured-img bot2"></div>
                <div class="text text-sm">
                  <span>February 12, 2019</span>
                  <h2>AI can now kill those annoying cookie pop-ups</h2>
                </div>
              </RouterLink>

              <div class="two-col d-block d-md-flex justify-content-between">
                <RouterLink to="/single" class="hentry v-height img-2 gradient">
                  <div class="featured-img bot3"></div>
                  <div class="text text-sm">
                    <span>February 12, 2019</span>
                    <h2>Don’t assume your user data in the cloud is safe</h2>
                  </div>
                </RouterLink>
                <RouterLink to="/single" class="hentry v-height img-2 ms-auto float-end gradient">
                  <div class="featured-img bot4"></div>
                  <div class="text text-sm">
                    <span>February 12, 2019</span>
                    <h2>Startup vs corporate: What job suits you best?</h2>
                  </div>
                </RouterLink>
              </div>  

            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>

</script>

<style>

.head1 {
  background-image:  url('~/assets/images/img_2_horizontal.jpg');
}
.head2{
  background-image: url('@/assets/images/img_5_horizontal.jpg');
}
.head3{
  background-image: url('@/assets/images/img_1_vertical.jpg');
}
.head4{
  background-image: url('@/assets/images/img_3_horizontal.jpg');
}
.head5{
  background-image: url('@/assets/images/img_4_horizontal.jpg');
}
.bot1{
  background-image: url('@/assets/images/img_2_vertical.jpg');
}
.bot2{
  background-image: url('@/assets/images/img_1_horizontal.jpg');
}
.bot3{
  background-image: url('@/assets/images/img_2_sq.jpg');
}
.bot4{
  background-image: url('@/assets/images/img_3_sq.jpg');
}

.linear{
  background-image: url("@/assets/images/bg1.jpeg");;
}
</style>