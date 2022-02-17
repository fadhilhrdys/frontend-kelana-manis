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
          <div
            class="menu-order-items"
            v-for="pc in pannacottas"
            :key="pc.id"
            @click.prevent="detail(pc.id)"
          >
            <img :src="pc.photo" alt="pannacotta" />
            <div class="detail-menu-order">
              <p class="title-menu-order">{{ pc.name }}</p>
              <p class="harga-menu-order">{{ pc.price }}</p>
            </div>
          </div>
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
          <div
            class="menu-order-items"
            v-for="ml in mililiters"
            :key="ml.id"
            @click.prevent="detail(ml.id)"
          >
            <img :src="ml.photo" alt="pannacotta" />
            <div class="detail-menu-order">
              <p class="title-menu-order">{{ ml.name }}</p>
              <p class="harga-menu-order">{{ ml.price }}</p>
            </div>
          </div>
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
          <div
            class="menu-order-items"
            v-for="liter in liters"
            :key="liter.id"
            @click.prevent="detail(liter.id)"
          >
            <img :src="liter.photo" alt="pannacotta" />
            <div class="detail-menu-order">
              <p class="title-menu-order">{{ liter.name }}</p>
              <p class="harga-menu-order">{{ liter.price }}</p>
            </div>
          </div>
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
  computed: {
    pannacottas() {
      return this.$store.getters["menu/pannacotta"];
    },
    mililiters() {
      return this.$store.getters["menu/mililiter"];
    },
    liters() {
      return this.$store.getters["menu/liter"];
    },
  },
  // ambil data di store
  mounted() {
    this.$store.dispatch("menu/getMenu");
  },
  methods: {
    // direct ke detail menu
    detail(id) {
      this.$router.push("/menu/" + id);
    },
  },
};
</script>

<style>
</style>