<template>
  <div class="container-footer">
    <div class="profile-kelana">
      <img src="assets/img/mascot.png" alt="" />
      <h2>Kelana Manis</h2>
      <p>
        Jl. Jomas No.26, rt06/rw05, Meruya Utara, <br />
        Kembangan, Jakarta Barat <br />
        DKI Jakarta 11620
      </p>
    </div>

    <div class="links-footer">
      <h2>Links</h2>
      <div class="nav-footer">
        <router-link to="/"> Home </router-link>
        <router-link to="/menu"> Menu </router-link>
        <router-link to="/shop"> Pre - Order </router-link>
      </div>
    </div>

    <div class="sosial-media">
      <h2>Follow us on sosial media</h2>
      <div class="sosmed">
        <img src="assets/img/ig.png" alt="" />
        <a href="instagram.com"> @kelana_manis </a>
      </div>
    </div>

    <div class="copyright">
      <p>&copy;2021 Kelana Manis</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
</style>