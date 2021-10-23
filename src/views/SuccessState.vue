<template>
  <div clas="success-state">
    <Navigation />
    <div class="container-success-state">
      <img src="assets/img/mascot.png" alt="nilo" />
      <h1>Thank you for ordered</h1>
      <h2>Your order will be processed ASAP</h2>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SuccessState",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
</style>