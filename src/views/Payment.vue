<template>
  <div class="payment">
    <!-- price payment -->
    <div class="container-price-payment">
      <h1>Payment</h1>
      <div class="price-payment">
        <p>Rp {{ orderInfo.transaction_total }}</p>
      </div>
    </div>
    <!-- end -->

    <!-- payment methods -->
    <div class="container-payment-methods">
      <h1>Payment Methods</h1>
      <p>
        Please select the bank you want to use and input accroding to the number
        of your order
      </p>
      <div class="container-bank">
        <div class="bank">
          <img src="assets/img/bca.png" alt="bank bca" />
          <div class="detail-bank">
            <p>Bank BCA - 2330350647</p>
            <p>Rifqi Hardinsa Musa</p>
          </div>
        </div>
        <div class="bank">
          <img src="assets/img/mandiri.png" alt="bank mandiri" />
          <div class="detail-bank">
            <p>Bank Mandiri - 1320017419327</p>
            <p>Rifqi Hardinsa Musa</p>
          </div>
        </div>
      </div>
    </div>
    <!-- end -->

    <!-- Upload payment -->
    <form class="container-upload-payment">
      <p>
        Upload proof of your transaction and we will send your order immdiately
      </p>
      <div class="upload-payment">
        <p>Upload your transaction payment</p>
        <input type="file" @change="handleFile" />
      </div>
      <button @click="onUpload" class="btn-payment">Confirm My Payment</button>
    </form>
    <!-- end -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Payment",
  data() {
    return {
      orderInfo: {},
      payment: null,
    };
  },
  methods: {
    // ambil data file yang diupload
    handleFile(event) {
      this.payment = event.target.files[0];
    },
    onUpload() {
      const paymentFile = new FormData();
      paymentFile.append("payment", this.payment, this.payment.name);

      // tampung semua data yang akan dikirim
      let dataOrder = {
        name: this.orderInfo.name,
        address: this.orderInfo.address,
        phone_number: this.orderInfo.phone_number,
        zip: this.orderInfo.zip,
        toping: this.orderInfo.toping,
        quantity: this.orderInfo.quantity,
        payment: this.payment,
        transaction_total: this.orderInfo.transaction_total,
        transaction_status: "SUCCESS",
        transaction: this.orderInfo.transaction,
      };

      axios
        .post("https://127.0.0.1:8000/api/checkout", dataOrder)
        .then(
          () =>
            // notifikasi order berhasil
            this.$swal({
              icon: "success",
              title: "You Order is Success !",
              showConfirmButton: false,
              time: 1500,
            }),
          // redicert halaman ke myorder
          this.$router.push({ path: "/success" }),
          // hapus localstorage ordered
          localStorage.removeItem("Ordered"),
          console.log(dataOrder)
        )
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    // ambil data order dari local storage
    if (localStorage.getItem("Ordered")) {
      try {
        this.orderInfo = JSON.parse(localStorage.getItem("Ordered"));
      } catch (e) {
        localStorage.removeItem("Ordered");
      }
    }
  },
};
</script>

<style>
</style>