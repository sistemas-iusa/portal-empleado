<template>
  <nav
    class="sb-topnav navbar navbar-expand navbar-light bg-light"
    v-if="authenticated"
  >
    <!-- Navbar Brand-->
    <a class="navbar-brand ps-3" href="/">
      <img :src="'img/logo_pe.svg'" />&nbsp;&nbsp;<span
        style="border-left: 2px solid; color: #636363;"
      ></span
      >&nbsp;&nbsp;<img :src="'img/logo_iusa_gray.svg'" />
    </a>
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
      class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
    >
      <div class="input-group rounded">
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
      </div>
    </form>
    <!-- Navbar-->
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
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
    </ul>
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li class="nav-item dropdown">
        <a
          class="nav-link"
          id="navbarDropdown"
          href="#"
          role="button"
          aria-expanded="false"
          ><i class="far fa-bell"></i
        ></a>
      </li>
      <a
        class="btn btn-portal btn-md btn-block"
        style="margin-left:20px;"
        @click.prevent="signOut"
        data-toggle="modal"
        data-target="#logoutModal"
      >
        Logout
      </a>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
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
  },
};
</script>

<style></style>
