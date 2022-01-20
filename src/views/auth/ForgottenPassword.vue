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
                  RECUPERA TU CUENTA
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
                    id="inputEmail"
                    type="text"
                    placeholder="name@example.com"
                    v-model="form.employee_code"
                  />
                  <label for="inputEmail">No. Empleado</label>
                </div>
                <div class="mt-4 mb-0">
                  <div class="d-grid">
                    <a
                      class="btn btn-portal btn-lg btn-block"
                      @click="ForgottenPassword"
                      >Aceptar</a
                    >
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <div class="small">
                ¿Ya tienes una cuenta?
                <router-link :to="{ name: 'SignIn' }" class="buzonColor">
                  <a style="font-weight: 500" class="buzonColor">Ir a login</a>
                </router-link>
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
  name: "ForgottenPassword",
  data() {
    return {
      hasError: false,
      msg: null,
      form: {
        employee_code: "",
      },
    };
  },
  methods: {
    ForgottenPassword() {
      axios
        .post("forgottenPassword", {
          data: this.form,
        })
        .then((response) => {
          this.$swal({
            title: response.data,
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.replace({
                name: "SignIn",
              });
            }
          });
        })
        .catch(() => {
          this.msg = "Código de empleado erróneo.";
          this.hasError = true;
          setTimeout(() => {
            this.hasError = false;
          }, 5000);
          this.form.password = null;
        });
    },
  },
};
</script>

<style scoped></style>
