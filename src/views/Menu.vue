<template>
  <div class="menu">
    <Navigation />
    <BagsHeader />
    <div class="container-menu-order">
      <div class="menu-order-category">
        <div class="title">
          <h2>Panncotta</h2>
        </div>
        <div class="menu-order" v-if="pannacottas.length > 0">
          <router-link
            :to="'/menu/' + pc.id"
            class="menu-order-items"
            v-for="pc in pannacottas"
            :key="pc.id"
          >
            <img :src="pc.photo" alt="pannacotta" />
            <div class="detail-menu-order">
              <p class="title-menu-order">{{ pc.name }}</p>
              <p class="harga-menu-order">{{ pc.price }}</p>
            </div>
          </router-link>
        </div>
        <div v-else>
          <p>Menu Tidak Tersedia</p>
        </div>
      </div>
      <div class="menu-order-category">
        <div class="title">
          <h2>250 Mililiters</h2>
        </div>
        <div class="menu-order" v-if="mililiters.length > 0">
          <router-link
            :to="'/menu/' + ml.id"
            class="menu-order-items"
            v-for="ml in mililiters"
            :key="ml.id"
          >
            <img :src="ml.photo" alt="pannacotta" />
            <div class="detail-menu-order">
              <p class="title-menu-order">{{ ml.name }}</p>
              <p class="harga-menu-order">{{ ml.price }}</p>
            </div>
          </router-link>
        </div>
        <div v-else>
          <p>Menu Tidak Tersedia</p>
        </div>
      </div>
      <div class="menu-order-category">
        <div class="title">
          <h2>1 Liters</h2>
        </div>
        <div class="menu-order" v-if="liters.length > 0">
          <router-link
            :to="'/menu/' + liter.id"
            class="menu-order-items"
            v-for="liter in liters"
            :key="liter.id"
          >
            <img :src="liter.photo" alt="pannacotta" />
            <div class="detail-menu-order">
              <p class="title-menu-order">{{ liter.name }}</p>
              <p class="harga-menu-order">{{ liter.price }}</p>
            </div>
          </router-link>
        </div>
        <div v-else>
          <p>Menu Tidak Tersedia</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Navigation from "@/components/Navigation.vue";
import BagsHeader from "@/components/BagsHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Menu",
  components: {
    Navigation,
    BagsHeader,
    Footer,
  },
  // siapin variabel untuk menampung data menus
  data() {
    return {
      pannacottas: [],
      mililiters: [],
      liters: [],
    };
  },
  // ambil data lewat API
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/menus")
      .then((response) => {
        // tampung data dari api
        const menus = response.data.data;

        // filter data pada variabel menus dengan category pannacotta
        this.pannacottas = menus.filter((pc) => pc.categories == "pannacotta");

        // filter data pada variabel menus dengan category mililiter
        this.mililiters = menus.filter((ml) => ml.categories == "mililiter");

        // filter data pada variabel menus dengan category liter
        this.liters = menus.filter((l) => l.categories == "liter");
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>