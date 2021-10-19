<template>
  <div class="shop">
    <Navigation />
    <!--- Slide Banner -->
    <SlideShow />
    <!-- End -->

    <!-- Main Content -->
    <div class="container-po">
      <h2>Pre Order</h2>
      <p>You can pre order your favorite drink here</p>
      <button class="btn-menu-order">
        <router-link to="/menu">See all menu's </router-link>
      </button>
    </div>
    <!-- End -->

    <!-- Time PO -->
    <div class="container-time">
      <p class="title-time">Countdown to pre order</p>
      <div class="timer-wrapper">
        <div class="timer">
          <p id="hour"></p>
          <p>Hours</p>
        </div>
        <div class="timer">
          <p id="minute"></p>
          <p>Minutes</p>
        </div>
        <div class="timer">
          <p id="second"></p>
          <p>Seconds</p>
        </div>
      </div>
      <p>Order now don't miss it</p>
    </div>
    <!-- end -->

    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import SlideShow from "@/components/SlideShow.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Shop",
  components: {
    Navigation,
    SlideShow,
    Footer,
  },
};
</script>
