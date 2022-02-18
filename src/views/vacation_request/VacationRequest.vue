<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">SOLICITUD DE VACACIONES</h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active card-icon-text text-black"></li>
      </ol>
      <div class="row">
        <div class="col-xl-12">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-12">
                <general-information></general-information>
                <label for="" class=""
                  >Folio: <span class="card-icon-text">24R3S</span></label
                >
                <br />
                <br />
              </div>
              <div class="col-xl-6">
                <p><i class="fas fa-calendar-alt"></i> Período de ausencia</p>
                <div class="form-group">
                  <label>Salida:</label>
                  <select class="form-control" id="">
                    <option>Seleccionar</option>
                    <option>Dias</option>
                  </select>
                </div>
                <br />
                <div>
                  <label>No. Jefe Inmediato:</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-xl-6">
                <p for="" class="">
                  Fecha de Elaboración:
                  <span class="card-icon-text">27/Oct/21</span>
                </p>
                <div class="form-group">
                  <label>Regreso:</label>
                  <select class="form-control" id="">
                    <option>Seleccionar</option>
                    <option>Dias</option>
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <label>E-mal Jefe Inmediato:</label>
                  <input type="text" class="form-control" />
                </div>
                <br />
              </div>
              <div class="col-xl-12">
                <div class="form-group">
                  <label>Clave de ausencia:</label>
                  <select class="form-control" id="">
                    <option>Seleccionar</option>
                    <option>CLAVES</option>
                  </select>
                </div>
                <br />
                <div class="form-group centerItems">
                  <button class="btn btn-portal btn-lg">SOLICITAR</button>
                </div>
                <br />
                <p class="card-icon-text text-black">FIRMAS DE AUTORIZACIÓN</p>
                <br />
                <table class="table">
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td width="25%">Jefe Inmediato</td>
                      <td class="boldUsuario" width="25%"></td>
                      <td width="25%">Director Departamento</td>
                      <td class="boldUsuario" width="25%">
                        Igmar Irigoyen Falcón
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.text-green-succes {
  color: #36bc27;
}
.text-red-cancel {
  color: red;
}
</style>

<script>
import GeneralInformation from "./components/GeneralInformation.vue";
export default {
  name: "VacationRequest",
  components: {
    GeneralInformation,
  },
};
</script>

<style></style>
