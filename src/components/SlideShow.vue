<template>
  <div class="slideshow-container">
    <carousel
      :items="1"
      :margin="10"
      :autoplay="true"
      :autoplaySpeed="false"
      :autoplayTimeout="3000"
      :autoplayHoverPause="true"
      :loop="true"
      :dots="false"
      :nav="false"
    >
      <a href="#"><img src="assets/img/banner-1.png" alt="" /></a>
      <a href="#"><img src="assets/img/banner-2.png" alt="" /></a>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "SlideShow",
  components: {
    carousel,
  },
};
</script>

<style>
</style>