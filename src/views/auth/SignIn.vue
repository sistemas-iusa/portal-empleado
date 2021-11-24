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
              <form @submit.prevent="submit">
                <h5
                  class="text-left font-weight-light"
                  style="font-weight: bolder"
                >
                  LOGIN
                </h5>
                <div class="alert alert-danger" role="alert" v-if="hasError">
                  {{ msg }}
                </div>
                <div class="form-floating mb-3">
                  <input
                    id="employee_code"
                    v-model="form.employee_code"
                    type="text"
                    class="form-control form-control-user"
                    :class="{ error: hasError }"
                    name="employee_code"
                    value=""
                    placeholder="Email Address..."
                    required=""
                    autofocus
                  />
                  <label for="inputEmail">No. Empleado</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    id="password"
                    v-model="form.password"
                    type="password"
                    name="password"
                    class="form-control form-control-user"
                    placeholder="Password"
                    required
                    autocomplete="current-password"
                  />
                  <label for="inputPassword">Contraseña</label>
                </div>
                <div class="form-group row">
                  <div class="col-12">
                    <vue-recaptcha
                      sitekey="6Lefo8kUAAAAANnsSS5MfvDnzzniSQ0f3Nfc6U_A"
                      @verify="onVerify"
                      @expired="onExpired"
                    ></vue-recaptcha>
                  </div>
                </div>
                <div class="centerItems">
                  <div class="small" style="text-align: left; margin-top: 10px">
                    <router-link :to="{ name: 'Register' }" class="buzonColor">
                      Registrarme
                    </router-link>
                  </div>
                  <br />
                  <button type="submit" class="btn btn-portal btn-lg btn-block">
                    {{ procesando ? "Validando..." : "Ingresar" }}
                  </button>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <a>v. 1.0.0</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "SignIn",
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      procesando: false,
      hasError: false,
      recaptcha: null,
      msg: null,
      form: {
        employee_code: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    onVerify: function (response) {
      this.recaptcha = response;
    },
    onExpired: function () {
      this.recaptcha = null;
    },
    submit() {
      if (this.recaptcha != null) {
        this.procesando = true;
        this.signIn(this.form)
          .then(() => {
            this.$router.replace({
              name: "Home",
            });
          })
          .catch(() => {
            this.msg = "Usuario y/o contraseña incorrectos";
            this.procesando = false;
            this.hasError = true;
            setTimeout(() => {
              this.hasError = false;
            }, 5000);
            this.form.password = null;
          });
      } else {
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 5000);
        this.msg = "El campo reCAPTCHA es obligatorio";
      }
    },
  },
};
</script>

<style></style>
