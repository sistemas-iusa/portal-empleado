<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4"></h3>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active card-icon-text text-black">
          MIS RESERVACIONES
        </li>
        <li class="breadcrumb-item">SALAS FÍSICAS</li>
      </ol>
      <div class="row">
        <div class="col-xl-12">
          <table id="datatablesSimple" class="table">
            <thead>
              <tr>
                <th>Folio</th>
                <th>Reunion</th>
                <th>Fecha</th>
                <th>Horario</th>
                <th>Detalle</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-red-cancel">243RS</td>
                <td class="text-red-cancel">Seguimiento Portal E.</td>
                <td class="text-red-cancel">15/Nov/2021</td>
                <td class="text-red-cancel">1:00pm - 2:00pm</td>
                <td class="centerItems">
                  <a><i class="fas fa-eye"></i></a>
                </td>
                <td>
                  <div class="centerItems">
                    <button class="btn btn-pending text-white">
                      Duplicado
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-red-cancel">251RS</td>
                <td class="text-red-cancel">Reunion TICS</td>
                <td class="text-red-cancel">15/Nov/2021</td>
                <td class="text-red-cancel">1:00pm - 2:00pm</td>
                <td class="centerItems">
                  <a><i class="fas fa-eye"></i></a>
                </td>
                <td>
                  <div class="centerItems">
                    <button class="btn btn-pending text-white">
                      Duplicado
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>382RS</td>
                <td>Estatus PGC360</td>
                <td>17/Nov/2021</td>
                <td>11:00pm - 12:00pm</td>
                <td class="centerItems">
                  <a><i class="fas fa-eye"></i></a>
                </td>
                <td>
                  <div class="centerItems">
                    <button class="btn btn-confirm text-white">
                      Confirmada
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>391RS</td>
                <td>Proyecto Hardware</td>
                <td>18/Nov/2021</td>
                <td>9:00pm - 10:00pm</td>
                <td class="centerItems">
                  <a><i class="fas fa-eye"></i></a>
                </td>
                <td>
                  <div class="centerItems">
                    <button class="btn btn-confirm text-white">
                      Confirmada
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>392RS</td>
                <td>Portal Promotoria</td>
                <td>18/Nov/2021</td>
                <td>1:00pm - 2:00pm</td>
                <td class="centerItems">
                  <a><i class="fas fa-eye"></i></a>
                </td>
                <td>
                  <div class="centerItems">
                    <button class="btn btn-cancel text-white">Cancelada</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.btn-pending {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
  border-radius: 24px !important;
}
.btn-pending:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .btn-pending,
.btn-pending:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-pending,
.btn-check:active + .btn-pending,
.btn-pending:active,
.btn-pending.active,
.show > .btn-pending.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .btn-pending:focus,
.btn-check:active + .btn-pending:focus,
.btn-pending:active:focus,
.btn-pending.active:focus,
.show > .btn-pending.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-pending:disabled,
.btn-pending.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-confirm {
  color: #000;
  background-color: #36bc27;
  border-color: #36bc27;
  border-radius: 24px !important;
}
.btn-confirm:hover {
  color: #000;
  background-color: #53d844;
  border-color: #36bc27;
}
.btn-check:focus + .btn-confirm,
.btn-confirm:focus {
  color: #000;
  background-color: #53d844;
  border-color: #36bc27;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-confirm,
.btn-check:active + .btn-confirm,
.btn-confirm:active,
.btn-confirm.active,
.show > .btn-confirm.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #36bc27;
}
.btn-check:checked + .btn-confirm:focus,
.btn-check:active + .btn-confirm:focus,
.btn-confirm:active:focus,
.btn-confirm.active:focus,
.show > .btn-confirm.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-confirm:disabled,
.btn-confirm.disabled {
  color: #000;
  background-color: #36bc27;
  border-color: #36bc27;
}

.btn-cancel {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  border-radius: 24px !important;
}
.btn-cancel:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .btn-cancel,
.btn-cancel:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .btn-cancel,
.btn-check:active + .btn-cancel,
.btn-cancel:active,
.btn-cancel.active,
.show > .btn-cancel.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .btn-cancel:focus,
.btn-check:active + .btn-cancel:focus,
.btn-cancel:active:focus,
.btn-cancel.active:focus,
.show > .btn-cancel.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-cancel:disabled,
.btn-cancel.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
