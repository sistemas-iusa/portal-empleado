<template>
  <main class="bg-img">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
            <div class="card-header text-center">
              <br />
              <img :src="'img/logo_pe.svg'" />&nbsp;&nbsp;<span
                class="centerLine"
              ></span
              >&nbsp;&nbsp;<img :src="'img/logo_iusa.svg'" />
            </div>
            <div class="card-body">
              <form>
                <h5
                  class="text-left font-weight-light"
                  style="font-weight: bolder"
                >
                  ELIGE UNA CONTRASEÑA NUEVA
                </h5>
                <p></p>
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="hasError"
                  style="font-weight: 500"
                >
                  {{ msg }}
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputPassword"
                    type="password"
                    v-model="form.password"
                  />
                  <label for="inputEmail">Contraseña nueva</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputPassword"
                    type="password"
                    v-model="form.confirm_password"
                  />
                  <label for="inputEmail">Confirmar contraseña</label>
                </div>
                <div class="mt-4 mb-0">
                  <div class="d-grid">
                    <a
                      class="btn btn-portal btn-lg btn-block"
                      @click="ConfirmPassword"
                      >Continuar</a
                    >
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <div class="small">
                Ya tienes una cuenta?
                <a href="/" class="buzonColor">ir a login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "newPassword",
  data() {
    return {
      hasError: false,
      msg: null,
      form: {
        id: this.$route.params.id,
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    ConfirmPassword() {
      if (this.form.password == this.form.confirm_password) {
        axios
          .post("confirmPassword", {
            data: this.form,
          })
          .then((response) => {
            alert(response.data);
            this.$router.replace({
              name: "SignIn",
            });
          })
          .catch(() => {
            this.msg = "No Usuario no valido.";
            this.hasError = true;
            setTimeout(() => {
              this.hasError = false;
            }, 5000);
            this.form.password = null;
          });
      } else {
        this.msg = "Las contraseñas no coinciden. Inténtelo de nuevo.";
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 5000);
        this.form.password = null;
      }
    },
  },
};
</script>

<style scoped></style>
