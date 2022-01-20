<template>
  <footer class="py-4 bg-light mt-auto" v-if="authenticated">
    <div class="container-fluid px-4">
      <div class="d-flex align-items-center justify-content-between small">
        <div class="text-muted">
          Copyright &copy; 2021 Grupo IUSA. Todos los Derechos Reservados.
        </div>
        <div>
          <a :href="'pdf/aviso_privacidad.pdf'" style="color: red" target="_blank">Aviso de Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {},
};
</script>

<style></style>
