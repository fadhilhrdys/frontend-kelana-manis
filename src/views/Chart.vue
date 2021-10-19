<template>
  <div class="chart">
    <!-- Navigation Bar -->
    <nav>
      <div class="logo">
        <router-link to="/menu">
          <img src="assets/img/back-icon.png" alt="" />
        </router-link>
      </div>
      <p class="title-header">My Bags</p>
    </nav>
    <!--- End -->

    <div class="state" v-if="bagsUser.length > 0">
      <!-- Detail Order -->
      <div class="container-detail-order" v-if="bagsUser.length > 0">
        <div class="list-order" v-for="item in bagsUser" :key="item.id">
          <img
            class="trash"
            @click="removeMenu(item.id)"
            src="assets/img/trash-icon.png"
          />
          <div class="detail-order">
            <div class="qty-order">
              <span> {{ item.quantity }} </span>
            </div>
            <div class="wrapper-menu-order">
              <div class="detail-menu-order">
                <p class="title-menu-order">{{ item.name }}</p>
                <p class="addons">{{ item.toping }}</p>
              </div>
              <div class="price-menu-order">
                <p>{{ item.totalPrice * item.quantity }}</p>
                <p class="price-addons"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="note">
          <p>*The price above has been added to the topping if you choose it</p>
        </div>
        <div class="sub-total">
          <p>Sub total</p>
          <p class="price-subtotal">Rp {{ subTotal }}</p>
        </div>
      </div>

      <!-- end -->

      <!-- Input for delivery -->
      <div class="container-input-delivery">
        <p class="title-input-delivery">Enter your data for delivery</p>
        <form class="form-input-delivery" action="">
          <div class="input-form">
            <label> Name </label>
            <input
              type="text"
              name="name"
              placeholder="My name"
              v-model="orderInfo.name"
              required
            />
          </div>
          <div class="input-form">
            <label> Phone number </label>
            <input
              type="text"
              name="phone"
              placeholder=" My phone number"
              v-model="orderInfo.phoneNumber"
              required
            />
          </div>
          <div class="input-form">
            <label> Address </label>
            <textarea
              name="address"
              placeholder=" My address"
              v-model="orderInfo.address"
            ></textarea>
          </div>
          <div class="input-form">
            <label> Zip Code </label>
            <input
              type="number"
              name="zip"
              placeholder=" Zip address"
              max="5"
              v-model="orderInfo.zip"
              required
            />
          </div>
        </form>
      </div>
      <!-- end -->

      <!-- Total and button order -->
      <div class="container-price">
        <div class="fee-delivery">
          <p>Fee delivery</p>
          <p class="price-fee">20000</p>
        </div>
        <div class="total-order">
          <p>Total</p>
          <p class="price-total">Rp {{ total }}</p>
        </div>
        <a href="#" @click="toOrder()"
          ><button class="btn-order">Orders</button></a
        >
      </div>
    </div>

    <div class="empty-state" v-else>
      <img src="assets/img/mascot.png" alt="" />
      <h2>Sorry you not yet added menu</h2>
      <router-link to="/menu">
        <button>See Menu</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  data() {
    return {
      bagsUser: [],
      orderInfo: {
        name: "",
        phoneNumber: "",
        address: "",
        zip: "",
      },
    };
  },
  methods: {
    removeMenu(menuid) {
      // cari tahu id menu yang akan dihapus
      let bagsStorage = JSON.parse(localStorage.getItem("Chart"));
      let searchIdMenu = bagsStorage.map((searchIdMenu) => searchIdMenu.id);
      // cocokan parameter yang berisi id dari menu dengan id menu yang ada di local storage
      let matching = searchIdMenu.findIndex((id) => id == menuid);
      this.bagsUser.splice(matching, 1);
      // notification delete
      this.$swal({
        icon: "success",
        title: "Menu has deleting from chart",
        showConfirmButton: false,
        timer: 2000,
      });
      // simpan perubahan
      const parsed = JSON.stringify(this.bagsUser);
      localStorage.setItem("Chart", parsed);
    },
    toOrder() {
      // buat validasi apakah form sudah lengkap atau belum
      if (
        this.orderInfo.name &&
        this.orderInfo.phoneNumber &&
        this.orderInfo.address &&
        this.orderInfo.zip
      ) {
        // mengambil menu yang apa saja yang diambil
        let menuId = this.bagsUser.map(function (menu) {
          return menu.id;
        });
        // mengambil data toping sesuai dengan yang di pilih
        let toping = this.bagsUser.map(function (tp) {
          return tp.toping;
        });
        // mengambil data quantity tiap menu
        let qty = this.bagsUser.map(function (qty) {
          return qty.quantity;
        });
        // masukan data kedalam object
        let orderData = {
          name: this.orderInfo.name,
          phone_number: this.orderInfo.phoneNumber,
          address: this.orderInfo.address,
          zip: this.orderInfo.zip,
          payment: "struk.png",
          toping: toping.toString(),
          quantity: qty.toString(),
          transaction_total: this.total,
          transaction: menuId,
        };

        // lalu simpan ke local storage
        const parsed = JSON.stringify(orderData);
        localStorage.setItem("Ordered", parsed);
        // hapus data chart di local storage
        localStorage.removeItem("Chart");

        // redirect kehalaman payment
        this.$router.push({ path: "/payment" });
      } else {
        this.$swal({
          icon: "error",
          title: "You must fill in the data on the delivery form",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  mounted() {
    // ambil data dari local storage
    if (localStorage.getItem("Chart")) {
      try {
        this.bagsUser = JSON.parse(localStorage.getItem("Chart"));
      } catch (e) {
        localStorage.removeItem("Chart");
      }
    }
  },
  computed: {
    subTotal() {
      return this.bagsUser.reduce(function (items, data) {
        return items + data.totalPrice * data.quantity;
      }, 0);
    },
    total() {
      return this.subTotal + 20000;
    },
  },
};
</script>

<style>
</style>