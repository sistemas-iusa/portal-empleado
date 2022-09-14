<template>
  <nav
    class="sb-topnav navbar navbar-expand navbar-light bg-light"
    v-if="authenticated"
  >
    <!-- Navbar Brand-->
    <router-link :to="{ name: 'Home' }" class="navbar-brand ps-3">
      <img :src="'img/logo_pe.svg'" v-if="!sun" /><img
        :src="'img/logo_pe_w.svg'"
        v-else
      />&nbsp;&nbsp;<span style="border-left: 2px solid; color: #636363"></span
      >&nbsp;&nbsp;<img :src="'img/logo_iusa_gray.svg'" v-if="!sun" />
      <img :src="'img/logo_iusa_w.svg'" v-else />
    </router-link>
    <!-- Sidebar Toggle-->
    <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
      href="#!"
    >
      <i class="fas fa-bars"></i>
    </button>
    <!-- Navbar Search-->
    <form
      class="
        d-none d-md-inline-block
        form-inline
        ms-auto
        me-0 me-md-3
        my-2 my-md-0
      "
    >
      <!-- <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Buscar"
          aria-label="Buscar"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div> -->
    </form>
    <!-- Navbar-->
    <!-- <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li class="nav-item dropdown">
        <router-link
          :to="{ name: 'UserProfile' }"
          class="nav-link"
          id="navbarDropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          <i class="fas fa-user fa-fw"></i
        ></router-link>
      </li>
    </ul> -->
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <!-- <li class="nav-item dropdown">
        <router-link
          :to="{ name: 'UserProfile' }"
          class="nav-link"
          id="navbarDropdown"
          role="button"
          aria-expanded="false"
          > --><!-- <i class="far fa-bell"></i
        > -->
      <!-- <i class="fas fa-user fa-fw"></i
        >
        </router-link> 
      </li>-->
      <li class="nav-item dropdown">
        <a
          class="nav-link"
          @click="selectTheme((sun = !sun))"
          id="navbarDropdown"
          role="button"
          aria-expanded="false"
        >
          <span :class="{ sunClass: sun === false, moonClass: sun === true }"
            ><i class="fas fa-sun fa-2x" style="color: rgb(255, 165, 0)"></i
          ></span>
          <span :class="{ sunClass: sun === true, moonClass: sun === false }"
            ><i
              class="fas fa-moon fa-2x fa-flip-horizontal"
              style="color: #343d5b"
            ></i
          ></span>
        </a>
      </li>
      <!-- <button
        class="switch"
        style="margin-right: 15px"
        :class="{ active: sun }"
        @click="selectTheme((sun = !sun))"
      >
        ;
        <span><i class="far fa-sun"></i></span>
        <span><i class="far fa-moon"></i></span>
      </button> -->
      <li class="nav-item dropdown">
        <router-link
          :to="{ name: 'UserProfile' }"
          class="nav-link"
          id="navbarDropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          <img
            :src="'https://api-empleado.iusa.com.mx/' + user.image_profile"
            alt=""
            style="border-radius: 50%; margin-top: 0px"
            width="36px;"
          />
        </router-link>
      </li>
      <button
        class="btn btn-portal btn-md btn-block"
        style="margin-left: 10px; margin-top: 5px; margin-bottom: 5px"
        @click.prevent="signOut"
        data-toggle="modal"
        data-target="#logoutModal"
      >
        <i class="fas fa-sign-out-alt"></i> Salir
      </button>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      sun: false,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "SignIn",
        });
      });
    },
    selectTheme(sun) {
      this.sun = sun;
      /* const element = document.querySelector("#app");
      element.classList.toggle("dark"); */
      document.body.classList.toggle("dark");
    },
  },
};
</script>

<style scoped>
.sunClass {
  display: none;
}
.moonClass {
  display: block;
}
</style>
