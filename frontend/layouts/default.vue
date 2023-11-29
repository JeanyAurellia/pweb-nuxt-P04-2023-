<template>
  <div>
    <!-- <client-only placeholder="loading..."> -->
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close">
            <span class="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
        </div>

      <nav class="site-nav">
        <div class="container">
          <div class="menu-bg-wrap">
            <div class="site-navigation">
              <div class="row g-0 align-items-center">
                <div class="col-2">
                  <RouterLink to="#" class="logo m-0 float-start">Blogy<span class="text-primary">.</span></RouterLink>
                </div>
                <div class="col-8 text-center">
                  <form action="#" class="search-form d-inline-block d-lg-none">
                    <input type="text" class="form-control" placeholder="Search...">
                    <span class="bi-search"></span>
                  </form>

                  <ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/blog">Blog</RouterLink></li>
                    <li><RouterLink to="/about">About</RouterLink></li>
                    <li><RouterLink to="/contact">Contact Us</RouterLink></li>
                  </ul>
                </div>
                <div class="col-2 text-end">
                  <RouterLink to="#" class="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
                    <span></span>
                  </RouterLink>
                  <form action="#" class="search-form d-none d-lg-inline-block">
                    <input type="text" class="form-control" placeholder="Search...">
                    <span class="bi-search"></span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    <!-- </client-only> -->
    <NuxtPage class="pt-5"></NuxtPage>
    <footer class="site-footer">
		<div class="container">
			<div class="row center">
				<div class="col-lg-5">
					<div class="widget">
						<h3>Social</h3>
						<ul class="list-unstyled d-flex gap-2 social">
							<li><a href="#"><span class="icon-instagram"></span></a></li>
							<li><a href="#"><span class="icon-twitter"></span></a></li>
							<li><a href="#"><span class="icon-facebook"></span></a></li>
							<li><a href="#"><span class="icon-linkedin"></span></a></li>
							<li><a href="#"><span class="icon-pinterest"></span></a></li>
							<li><a href="#"><span class="icon-dribbble"></span></a></li>
						</ul>
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-4 -->
				<div class="col-lg-5 ps-lg-5">
					<div class="widget">
						<h3 class="mb-4">team</h3>
						<ul class="list-unstyled float-start links">
							<li>Jeany Aurellia - 5027221008</li>
							<li>Wikri Cahya Syahrila - 5027221020</li>
							<li>Nicholas Marco - 5027221042</li>
						</ul>
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-4 -->
			</div>

			<div class="row mt-5">
				<div class="col-12 text-center">

            <p>Copyright &copy; 2023. All Rights Reserved. 
            </p>
          </div>
        </div>
      </div> <!-- /.container -->
    </footer> <!-- /.site-footer -->
  </div>
</template>

<script>
import 'aos/dist/aos.css';
import '~/assets/css/style.css'
import '~/assets/fonts/icomoon/style.css'
import '~/assets/fonts/flaticon/font/flaticon.css'
import '~/node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
// import '~/node_modul/es/bootstrap/dist/css/bootstrap.min.css'

export default {
  mounted() {
    import('@/assets/js/navbar.js')
      .then((module) => {
        // module.myFunction();
      })
      .catch((error) => {
        console.error('Error importing navbar script:', error);
      });

    import('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
      .then((module) => {
        // module.myFunction();
      })
      .catch((error) => {
        console.error('Error importing Bootstrap script:', error);
      });
	import('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css')
	.then((module) => {
	// module.myFunction();
	})
      import('aos').then((AOSModule) => {
      AOSModule.init({
        // offset: 200,
        // duration: 600,
      });
    });
  },
};
</script>

<style>

</style>