<template>
  <div id="app">
    <div class="sb-nav-fixed">
      <div id="layoutSidenav">
        <NavBar />
        <SideBar />
        <div id="layoutSidenav_content">
          <router-view />
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/template/partials/NavBar.vue";
import SideBar from "@/template/partials/SideBar.vue";
import Footer from "@/template/partials/Footer.vue";
export default {
  components: {
    NavBar,
    SideBar,
    Footer,
  },
};
</script>
