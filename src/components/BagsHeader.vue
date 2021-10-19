<template>
  <div class="header-menu-order">
    <h1>Menu's</h1>
    <router-link class="bags" to="/chart">
      <img src="assets/img/bags-icon.png" alt="" />
      <span class="badge"> {{ bagsUser.length }} </span>
      <p>My Bags</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BagsHeader",
  data() {
    return {
      bagsUser: [],
    };
  },
  mounted() {
    if (localStorage.getItem("Chart")) {
      try {
        this.bagsUser = JSON.parse(localStorage.getItem("Chart"));
      } catch (e) {
        localStorage.removeItem("Chart");
      }
    }
  },
};
</script>

<style>
</style>