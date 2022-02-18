<template>
  <main>
    <div class="container-fluid px-4" v-if="data">
      <h3 class="mt-4">MI PERFIL</h3>
      <!-- {{data}} -->
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active"></li>
      </ol>
      <div class="row">
        <div class="col-xl-12">
          <div class="card mb-4">
            <!-- <div class="card-header">
              <i class="fas fa-user"></i>
              PERFIL
            </div> -->
            <div class="card-body">
              <div class="row">
                <div class="col-xl-12 centerItems">
                  <!--<img src="" />-->
                  <h5 class="card-title" style="font-weight: 700">
                    {{ data.VORNA }} {{ data.NACHN }} {{ data.NACH2 }}
                  </h5>
                  <div
                    class="alert alert-danger"
                    role="alert"
                    v-if="hasError"
                    style="font-weight: 500"
                  >
                    {{ msg }}.
                  </div>
                  <p></p>
                  <!-- <i class="fas fa-user fa-3x"></i>
                  <br /> -->
                  <img
                    :src="
                      'https://api-empleado.iusa.com.mx/' + user.image_profile
                    "
                    style="border-radius: 50%"
                    width="124px;"
                  />
                  <br />
                  <a
                    class="card-text text-perfil"
                    style="font-weight: 700; color: #000"
                    @click="
                      () => {
                        trigger = true;
                      }
                    "
                    ><p></p>
                    <i class="fas fa-pen"></i> Editar</a
                  >
                  <avatar-cropper
                    v-model="trigger"
                    :upload-handler="cropperHandler"
                    @error="handleError"
                  />
                </div>
              </div>
              <div class="row">
                <h5 class="card-title">DATOS PERSONALES</h5>
                <div class="col-xl-12">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Nombre(s)</td>
                        <td class="boldUsuario">{{ data.VORNA }}</td>
                        <td>Apellidos</td>
                        <td class="boldUsuario">
                          {{ data.NACHN }} {{ data.NACH2 }}
                        </td>
                      </tr>
                      <tr>
                        <td>Sexo</td>
                        <td class="boldUsuario">{{ data.BEZEI }}</td>
                        <td>Estado Civil</td>
                        <td class="boldUsuario">{{ data.TEXT2 }}</td>
                      </tr>
                      <tr>
                        <td>Fecha nacimiento</td>
                        <td class="boldUsuario">
                          {{ data.GBJHR }}-{{ data.GBMON }}-{{ data.GBTAG }}
                        </td>
                        <td>Ingreso</td>
                        <td class="boldUsuario">{{ data.DAT01 }}</td>
                      </tr>
                      <tr>
                        <td>Credencial</td>
                        <td class="boldUsuario">{{ data.PERNR }}</td>
                        <td>E-mail</td>
                        <td class="boldUsuario">{{ data.CORREO }}</td>
                      </tr>
                      <tr>
                        <td>CURP</td>
                        <td class="boldUsuario">{{ data.PERID }}</td>
                        <td>RFC</td>
                        <td class="boldUsuario">{{ data.ICNUM }}</td>
                      </tr>
                      <tr>
                        <td>IMSS</td>
                        <td class="boldUsuario">{{ data.NIMSS }}</td>
                        <td>Sociedad</td>
                        <td class="boldUsuario">{{ data.BUKRS }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <fiscal-identification-data></fiscal-identification-data>
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
import AvatarCropper from "vue-avatar-cropper";
import FiscalIdentificationData from "./components/FiscalIdentificationData.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserProfile",
  components: { AvatarCropper, FiscalIdentificationData },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
  data() {
    return {
      data: null,
      trigger: false,
      hasError: false,
      msg: null,
    };
  },
  async mounted() {
    this.recargarListado();
  },
  methods: {
    ...mapActions({
      changeUser: "auth/changeUser",
    }),
    async recargarListado() {
      await axios
        .get("getProfile")
        .then((response) => (this.data = response.data));
    },
    cropperHandler(cropper) {
      let imgdat = cropper.getCroppedCanvas().toDataURL(this.cropperOutputMime);
      console.log(imgdat);
      let file = this.dataURLtoFile(imgdat, "profile_image.png");
      let formData = new FormData();
      formData.append("imagen", file);
      axios
        .post("changeImage", formData)
        .then((response) => {
          /* alert("Imagen cambiada correctamente");
          this.changeUser(response.data);*/
          if (response.data.errors) {
            this.msg = response.data.errors;
            this.hasError = true;
            setTimeout(() => {
              this.hasError = false;
            }, 5000);
          } else {
            this.$swal({
              title: "Imagen actualizada..",
              icon: "success",
            });
            this.changeUser(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
    dataURLtoFile(dataurl, filename) {
      let arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    handleError({ message }) {
      console.log(message);
      if (message == "File type not correct") {
        this.msg = "El tipo de archivo no es correcto.";
        this.hasError = true;
        setTimeout(() => {
          this.hasError = false;
        }, 5000);
      }
    },
  },
};
</script>

<style></style>
