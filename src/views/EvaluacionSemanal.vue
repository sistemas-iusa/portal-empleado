<template>
  <main>
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-xl-6">
          <h3 class="mt-4"></h3>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item ">EVALUACIÓN SEMANAL</li>
            <li class="breadcrumb-item active">HOME OFFICE</li>
          </ol>
        </div>
        <div class="col-xl-6">
          <br />
          <div class="form-group">
            <select class="form-control">
              <option>Semana 1 / 2 OCT 21 - 9 OCT 21</option>
              <option>Semana 2 / 2 OCT 21 - 9 OCT 21</option>
              <option>Semana 3 / 2 OCT 21 - 9 OCT 21</option>
              <option selected>Semana 4</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              GRÁFICA RENDIMIENTO PERSONAL
            </div>
            <div class="card-body">
              <div id="chart_div-1" class="graphPanel"></div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-chart-bar"></i>
              GRÁFICA RENDIMIENTO POR ÁREA
              {{week}}
            </div>
            <div class="card-body">
              <div id="chart_div-2" class="graphPanel"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      week: [
        {
          Director: "ALEJO PERALTA",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboración: "100",
        },
        {
          Director: "ANDRES TORT RIVERA",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "ARMANDO ORTIZ RAMIREZ",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "BENJAMIN PEREZ LIZARRAGA",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "CARLOS MOCHON SACAL",
          Desempeño: "90",
          Disponibilidad: "90",
          Colaboracion: "90",
        },
        {
          Director: "EDGAR ANGELES GODINEZ",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "EDUARDO NERI",
          Desempeño: 0,
          Disponibilidad: 0,
          Colaboracion: 0,
        },
        {
          Director: "FEDERICO KRAFFT",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "FERNANDO HEREDIA CARRANCO",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "FRANCISCO RODRIGUEZ AVENDANO",
          Desempeño: "96",
          Disponibilidad: "96",
          Colaboracion: "96",
        },
        {
          Director: "IGMAR IRIGOYEN FALCON",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "JORGE MADRIGAL KIM ",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "JOSE OLIVERA",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
        {
          Director: "MIGUEL TAPIA BENITEZ",
          Desempeño: "100",
          Disponibilidad: "100",
          Colaboracion: "100",
        },
      ],
    };
  },
};
</script>

<style></style>
