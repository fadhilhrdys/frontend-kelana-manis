<template>
  <nav>
    <div class="logo"><img src="assets/img/logo.png" alt="" /></div>
    <div class="links">
      <a href="home.html"> Home </a>
      <a href="#"> Menu </a>
      <a href="order-page.html"> Pre Order </a>
    </div>
    <img class="menu-bar" @click="showMenu" src="assets/img/menu-bar.png" />
    <img
      class="cancel"
      @click="hideMenu"
      src="assets/img/cancel-icon.png"
      alt=""
    />
  </nav>
</template>

<script>
import $ from "jquery";

export default {
  name: "Navigation",
  methods: {
    showMenu: function () {
      $(".links").addClass("slide");
      $(".menu-bar").hide();
      $(".cancel").show();
    },
    hideMenu: function () {
      $(".links").removeClass("slide");
      $(".menu-bar").show();
      $(".cancel").hide();
    },
  },
};
</script>

<style>
</style>