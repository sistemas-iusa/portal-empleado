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
                  REGISTRO
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
                <div class="row mb-3">
                  <div class="col-md-12">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="no_empleado"
                        type="text"
                        placeholder="Ingresa tu número de empleado"
                        required=""
                        v-model="form.employee_code"
                      />
                      <label for="no_empleado">No. Empleado</label>
                    </div>
                  </div>
                  <!-- <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        class="form-control"
                        id="usuario"
                        type="text"
                        placeholder="Ingresa tu Usuario"
                        required=""
                        v-model="form.user"
                      />
                      <label for="usuario">Usuario</label>
                    </div>
                  </div> -->
                </div>
                <!-- <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputEmail"
                    type="email"
                    placeholder="name@example.com"
                    required=""
                    v-model="form.email_user"
                  />
                  <label for="inputEmail">Correo electrónico</label>
                </div> -->
                <div class="row mb-3">
                  <div class="col-md-12">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        required=""
                        v-model="form.password"
                      />
                      <label for="inputPassword">Contraseña</label>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-12">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="inputConfirmationPassword"
                        type="password"
                        placeholder="Password confirmation"
                        required=""
                        v-model="form.password_confirmation"
                      />
                      <label for="inputPassword">Confirmar Contraseña</label>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mb-0">
                  <div class="d-grid">
                    <a
                      class="btn btn-portal btn-lg btn-block"
                      @click="RegisterPerson"
                      >Registrar</a
                    >
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <div class="small">
                Ya tienes una cuenta?
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
  name: "Register",
  data() {
    return {
      hasError: false,
      msg: null,
      form: {
        employee_code: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    RegisterPerson() {
      axios
        .post("registerPerson", this.form)
        .then((response) => {
          //console.log(response.data.errors);
          if (response.data.errors) {
            this.msg = response.data.errors;
            this.hasError = true;
            setTimeout(() => {
              this.hasError = false;
            }, 5000);
            this.form.password = null;
            this.form.password_confirmation = null;
          } else if (response.data.email_error) {
            this.msg = response.data.email_error;
            this.hasError = true;
            setTimeout(() => {
              this.hasError = false;
            }, 7000);
          } else if (response.data.employee_code_error) {
            this.msg = response.data.employee_code_error;
            this.hasError = true;
            setTimeout(() => {
              this.hasError = false;
            }, 7000);
          } else {
            console.log(response.data);
            this.$swal({
              title: response.data,
              icon: "success",
            });
            this.$router.replace({
              name: "SignIn",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.msg = "Código de empleado erróneo.";
          this.hasError = true;
          setTimeout(() => {
            this.hasError = false;
          }, 5000);
          this.form.password = null;
          this.form.password_confirmation = null;
        });
    },
  },
};
</script>

<style scoped></style>
