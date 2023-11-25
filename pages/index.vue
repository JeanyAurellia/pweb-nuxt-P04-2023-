<template>
  <div>
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

      <!-- Start posts-entry -->
      <section class="section posts-entry">
        <div class="container">
          <div class="row mb-4">
            <div class="col-sm-6">
              <h2 class="posts-entry-title">Business</h2>
            </div>
            <div class="col-sm-6 text-sm-end"><RouterLink to="category.html" class="read-more">View All</RouterLink></div>
          </div>
          <div class="row g-3">
            <div class="col-md-9">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="blog-entry">
                    <RouterLink to="/single" class="img-link">
                      <img src="@/assets/images/img_1_sq.jpg" alt="Image" class="img-fluid">
                    </RouterLink>
                    <span class="date">Apr. 14th, 2022</span>
                    <h2><RouterLink to="/single">Thought you loved Python? Wait until you meet Rust</RouterLink></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                    <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="blog-entry">
                    <RouterLink to="/single" class="img-link">
                      <img src="@/assets/images/img_2_sq.jpg" alt="Image" class="img-fluid">
                    </RouterLink>
                    <span class="date">Apr. 14th, 2022</span>
                    <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                    <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <ul class="list-unstyled blog-entry-sm">
                <li>
                  <span class="date">Apr. 14th, 2022</span>
                  <h3><RouterLink to="/single">Don’t assume your user data in the cloud is safe</RouterLink></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </li>

                <li>
                  <span class="date">Apr. 14th, 2022</span>
                  <h3><RouterLink to="/single">Meta unveils fees on metaverse sales</RouterLink></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </li>

                <li>
                  <span class="date">Apr. 14th, 2022</span>
                  <h3><RouterLink to="/single">UK sees highest inflation in 30 years</RouterLink></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- End posts-entry -->

      <!-- Start posts-entry -->
      <section class="section posts-entry posts-entry-sm bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="blog-entry">
                <RouterLink to="/single" class="img-link">
                  <img src="@/assets/images/img_1_horizontal.jpg" alt="Image" class="img-fluid">
                </RouterLink>
                <span class="date">Apr. 14th, 2022</span>
                <h2><RouterLink to="/single">Thought you loved Python? Wait until you meet Rust</RouterLink></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="blog-entry">
                <RouterLink to="/single" class="img-link">
                  <img src="@/assets/images/img_2_horizontal.jpg" alt="Image" class="img-fluid">
                </RouterLink>
                <span class="date">Apr. 14th, 2022</span>
                <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="blog-entry">
                <RouterLink to="/single" class="img-link">
                  <img src="@/assets/images/img_3_horizontal.jpg" alt="Image" class="img-fluid">
                </RouterLink>
                <span class="date">Apr. 14th, 2022</span>
                <h2><RouterLink to="/single">UK sees highest inflation in 30 years</RouterLink></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="blog-entry">
                <RouterLink to="/single" class="img-link">
                  <img src="@/assets/images/img_4_horizontal.jpg" alt="Image" class="img-fluid">
                </RouterLink>
                <span class="date">Apr. 14th, 2022</span>
                <h2><RouterLink to="/single">Don’t assume your user data in the cloud is safe</RouterLink></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End posts-entry -->

      <!-- Start posts-entry -->
      <section class="section posts-entry">
        <div class="container">
          <div class="row mb-4">
            <div class="col-sm-6">
              <h2 class="posts-entry-title">Culture</h2>
            </div>
            <div class="col-sm-6 text-sm-end"><RouterLink to="category.html" class="read-more">View All</RouterLink></div>
          </div>
          <div class="row g-3">
            <div class="col-md-9 order-md-2">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="blog-entry">
                    <RouterLink to="/single" class="img-link">
                      <img src="@/assets/images/img_1_sq.jpg" alt="Image" class="img-fluid">
                    </RouterLink>
                    <span class="date">Apr. 14th, 2022</span>
                    <h2><RouterLink to="/single">Thought you loved Python? Wait until you meet Rust</RouterLink></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                    <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="blog-entry">
                    <RouterLink to="/single" class="img-link">
                      <img src="@/assets/images/img_2_sq.jpg" alt="Image" class="img-fluid">
                    </RouterLink>
                    <span class="date">Apr. 14th, 2022</span>
                    <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                    <p><RouterLink to="/single" class="btn btn-sm btn-outline-primary">Read More</RouterLink></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <ul class="list-unstyled blog-entry-sm">
                <li>
                  <span class="date">Apr. 14th, 2022</span>
                  <h3><RouterLink to="/single">Don’t assume your user data in the cloud is safe</RouterLink></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </li>

                <li>
                  <span class="date">Apr. 14th, 2022</span>
                  <h3><RouterLink to="/single">Meta unveils fees on metaverse sales</RouterLink></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </li>

                <li>
                  <span class="date">Apr. 14th, 2022</span>
                  <h3><RouterLink to="/single">UK sees highest inflation in 30 years</RouterLink></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">

          <div class="row mb-4">
            <div class="col-sm-6">
              <h2 class="posts-entry-title">Politics</h2>
            </div>
            <div class="col-sm-6 text-sm-end"><RouterLink to="category.html" class="read-more">View All</RouterLink></div>
          </div>

          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_7_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_1.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_6_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_2.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_5_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_3.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>


            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_4_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_4.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_3_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_5.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_2_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_4.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>


            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_1_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_3.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_4_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_2.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="post-entry-alt">
                <RouterLink to="/single" class="img-link"><img src="@/assets/images/img_3_horizontal.jpg" alt="Image" class="img-fluid"></RouterLink>
                <div class="excerpt">
                  
                  

                  <h2><RouterLink to="/single">Startup vs corporate: What job suits you best?</RouterLink></h2>
                  <div class="post-meta align-items-center text-left clearfix">
                    <figure class="author-figure mb-0 me-3 float-start"><img src="@/assets/images/person_5.jpg" alt="Image" class="img-fluid"></figure>
                    <span class="d-inline-block mt-1">By <RouterLink to="#">David Anderson</RouterLink></span>
                    <span>&nbsp;-&nbsp; July 19, 2019</span>
                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
                  <p><RouterLink to="#" class="read-more">Continue Reading</RouterLink></p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <div class="section bg-light">
        <div class="container">

          <div class="row mb-4">
            <div class="col-sm-6">
              <h2 class="posts-entry-title">Travel</h2>
            </div>
            <div class="col-sm-6 text-sm-end"><RouterLink to="category.html" class="read-more">View All</RouterLink></div>
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
</style>