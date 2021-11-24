<template>
  <main class="bg-img">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
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
                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="no_empleado"
                        type="text"
                        placeholder="Ingresa el Numero tu Numero de Empleado"
                      />
                      <label for="no_empleado">No. Empleado</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        class="form-control"
                        id="usuario"
                        type="text"
                        placeholder="Ingresa tu Usaurio"
                      />
                      <label for="usuario">Usuario</label>
                    </div>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputEmail"
                    type="email"
                    placeholder="name@example.com"
                  />
                  <label for="inputEmail">Correo Electrónico</label>
                </div>
                <div class="row mb-3">
                  <div class="col-md-12">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Create a password"
                      />
                      <label for="inputPassword">Contraseña</label>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mb-0">
                  <div class="d-grid">
                    <a class="btn btn-portal btn-lg btn-block" href=""
                      >Registrar</a
                    >
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <div class="small">
                Ya tienes una cuenta?
                <a href="" class="buzonColor">ir a login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped></style>
