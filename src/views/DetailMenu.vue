<template>
  <div class="detail">
    <Navigation />
    <!-- Detail Menu -->
    <div class="container-detail-menu">
      <div class="images-detail-menu">
        <img :src="menu.photo" alt="photo" />
      </div>
      <div class="detail-menu">
        <h1>{{ menu.name }}</h1>
        <h1>{{ menu.price }}</h1>
      </div>
    </div>
    <!-- end -->

    <!-- add ons -->
    <form class="container-add-ons" v-on:submit.prevent>
      <div class="container-toping">
        <p>Toping</p>
        <div class="toping">
          <input
            type="checkbox"
            id="toping"
            name="toping"
            true-value="Brown Sugar"
            false-value=" "
            v-model="bagsUser.toping"
          />
          <label for="toping" class="name-toping" @click="getToping">
            Brown Sugar
          </label>
          <span class="txt-toping"> + 5000 </span>
        </div>
      </div>
      <div class="container-quantity">
        <p>Quantity</p>
        <div class="qty-wrapper">
          <img
            class="btn-minus"
            src="assets/img/minus-icon.png"
            @click="decQty"
          />
          <input type="text" readonly="" v-model.number="qty" class="qty" />
          <img
            class="btn-plus"
            src="assets/img/plus-icon.png"
            @click="incQty"
          />
        </div>
      </div>
      <a
        href="#"
        @click="
          savetoChart(menu.id, menu.name, menu.price, bagsUser.toping, qty)
        "
        ><button class="btn-add">Add My Bag's</button></a
      >
    </form>
    <!-- end -->
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "DetailMenu",
  components: {
    Navigation,
  },
  data() {
    return {
      bagsUser: [],
      qty: 1,
    };
  },
  methods: {
    getDataId(param) {
      this.$store.dispatch("menu/getDetailMenu", { id: param });
    },
    getToping() {
      const checkToping = document.getElementById("toping");
      const txtToping = document.querySelector(".txt-toping");

      // if element #toping checked
      if (checkToping.checked == false) {
        txtToping.style.visibility = "visible";
      } else {
        txtToping.style.visibility = "hidden";
      }
    },
    decQty() {
      // mencegah incQty sampai minus -
      if (this.qty <= 0) {
        this.qty = 0;
      } else {
        this.qty -= 1;
      }
    },
    incQty() {
      this.qty += 1;
    },
    savetoChart(menuid, name, price, toping, quantity) {
      // pastikan bags user ada isinya
      if (!this.bagsUser) {
        return;
      }
      // buat penampung data yang dikirim dari parameter
      let bagsStored = {
        id: menuid,
        name: name,
        // jika toping true maka price ditambah 5000
        totalPrice: toping ? price + 5000 : price,
        toping: toping,
        quantity: quantity,
      };
      // push paramater menu ke bagsUser
      this.bagsUser.push(bagsStored);
      // lalu simpan ke local storage dengan nama Chart
      const parsed = JSON.stringify(this.bagsUser);
      localStorage.setItem("Chart", parsed);
      // buat notifikasi succes ditambahkan
      this.$swal({
        icon: "success",
        title: "Successfully added to cart",
        showConfirmButton: false,
        timer: 2000,
      });
      // setelah disimpan redirect ke halaman chart
      this.$router.push({ path: "/chart" });
    },
  },
  computed: {
    menu() {
      return this.$store.getters["menu/detailMenu"];
    },
  },
  mounted() {
    this.$store.dispatch("menu/getMenu");
    let id = this.$route.params.id;
    this.getDataId(id);
    // cek jika local storage ada item
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