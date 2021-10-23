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
import $ from "jquery";

export default {
  name: "Shop",
  components: {
    Navigation,
    SlideShow,
    Footer,
  },
  mounted() {
    let countDownDate = new Date("October 23, 2021 14:39:00").getTime();
    let countDown = setInterval(() => {
      let dateNow = new Date().getTime();
      let distance = countDownDate - dateNow;

      // get calculation
      // let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      $("#hour").html(`${hours}`);
      $("#minute").html(`: ${minutes}`);
      $("#second").html(`: ${seconds}`);

      // when countdown is complete
      if ((distance == 0) | (distance < 1)) {
        // change the element
        $(".btn-menu-order").html(" We'll be back tomorrow, thank you ");
        $(".timer-wrapper").html(" CLOSE ");
        // reset the interval
        clearInterval(countDown);
      }
    });
  },
};
</script>
