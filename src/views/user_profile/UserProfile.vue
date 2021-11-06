<template>
  <main>
    <div class="container-fluid px-4">
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
                  <h5 class="card-title">
                    {{ data.VORNA }} {{ data.NACHN }} {{ data.NACH2 }}
                  </h5>
                  <i class="fas fa-user fa-3x "></i>
                  <br />
                  <br />
                  <a class="card-text text-perfil"
                    ><i class="fas fa-pen"></i> Editar</a
                  >
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
                        <td class="boldUsuario">{{data.CORREO}}</td>
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
                <!-- <h5 class="card-title cellContainer">DATOS CONTACTO</h5>
                <div class="col-xl-12">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>E-mail</td>
                        <td class="boldUsuario">jarreguin@iusa.com.mx</td>
                        <td>Usuario Skype</td>
                        <td class="boldUsuario">pepe.arreguin</td>
                      </tr>
                      <tr>
                        <td>Celular</td>
                        <td class="boldUsuario">5569743011</td>
                        <td>Teléfono fijo</td>
                        <td class="boldUsuario">5558713459</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h5 class="card-title cellContainer">DATOS COMPLEMENTARIOS</h5>
                <div class="col-xl-12">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Distancia de casa a la oficina</td>
                        <td class="boldUsuario">1 - 5 km</td>
                        <td>Lugar para trabajar</td>
                        <td class="boldUsuario">
                          Otra casa de familiar o amigo
                        </td>
                      </tr>
                      <tr>
                        <td>Velocidad de internet</td>
                        <td class="boldUsuario">100 MB</td>
                        <td>Laptop</td>
                        <td class="boldUsuario">Si</td>
                      </tr>
                      <tr>
                        <td>Correo personal</td>
                        <td class="boldUsuario">arreguinpepe@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>-->
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
  name: "UserProfile",
  data() {
    return {
      data: null,
    };
  },
  async mounted() {
    this.recargarListado();
  },
  methods: {
    async recargarListado() {
      await axios
        .get("getProfile")
        .then((response) => (this.data = response.data));
    },
  },
};
</script>

<style></style>
