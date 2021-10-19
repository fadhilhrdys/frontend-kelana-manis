<template>
  <div class="home">
    <Navigation />
    <!-- Hero -->
    <div class="container-hero">
      <img src="assets/img/banner-3.png" alt="" />
      <div class="hero-text">
        <h1>We Present The Best Drink For You</h1>
        <p>Enjoy a fresh milk made from the best quality ingredients</p>
      </div>
      <router-link to="/shop"
        ><button class="to-order">Order Now</button></router-link
      >
    </div>
    <!-- end -->

    <!-- signature menu -->
    <div class="container-signature">
      <h2>Signature menu</h2>
      <div class="signature-menu">
        <a href="#" class="signature-menu-items">
          <div class="img-signature-menu">
            <img src="assets/img/L.png" alt="" />
          </div>
          <p class="name-signature-menu">Brown Sugar Fresh Milk</p>
        </a>
        <a href="#" class="signature-menu-items">
          <div class="img-signature-menu">
            <img src="assets/img/L.png" alt="" />
          </div>
          <p class="name-signature-menu">Japanese Green Tea</p>
        </a>
      </div>
      <router-link to="/menu"
        ><button class="to-menu">Explore Our Menu</button></router-link
      >
    </div>
    <!-- end -->

    <!-- slide show -->
    <SlideShow />
    <!-- end -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import SlideShow from "@/components/SlideShow.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    SlideShow,
    Footer,
  },
};
</script>


