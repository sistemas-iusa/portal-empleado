<template>
  <main>
    <div class="container-fluid px-4">
      <h4 class="mt-4">
        SAP R3 <span style="font-weight: 200"> / CURSOS</span>
      </h4>
      <div class="card" style="padding: 20px">
        <div class="col-xl-12">
          <img :src="'img/logo_iusa.svg'" style="margin-right: 10px;"/>
          <img :src="'img/logo_sap.png'"/>
        </div>
        <div class="row">
          <p>Incrementa y potencializa tu trabajo en IUSA con SAP. Aprende y familiarizáte con las funcionalidades del sistema.</p>
          <div class="col-xl-12">
            <br>
            <p><strong>CURSOS</strong></p>
          </div>
          <div class="col-xl-12">
            <table id="tableBook" class="table">
              <thead>
                <tr>
                  <th style="font-weight: 700;">Cursos</th>
                  <th style="font-weight: 700;">Duración</th>
                  <th style="font-weight: 700;">Horario</th>
                  <th style="font-weight: 700;">Días</th>   
                  <th style="font-weight: 700;">Instructor</th>              
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="4">
                    <strong>CICLO DE INGRESOS</strong><br>
                    Estructura Organizacional<br>
                    Datos Maestros (Clientes, Materiales,)<br>
                    Documentos comerciales:<br>
                    &nbsp;Pedidos<br>
                    &nbsp;Entrega<br>
                    &nbsp;Facturas<br>
                    &nbsp;Cotizaciones<br>
                    Condiciones<br>
                    Sistemas Info (Reportes de ventas, fill rate, estadística, etc)<br>
                    Reportes de ventas Click View<br>
                    Reportes de stock<br>
                    Antiguedad y Cartera Clientes<br>
                    Analisis indivial del cliente<br>
                    Cobranza<br>
                    PGC<br>
                    Portal Distribuidores<br>
                  </td>
                  <td>1.5 hrs.</td>
                  <td>10am - 11:30am</td>
                  <td>20-sep</td>
                  <td>Elizabeth Paz</td>
                </tr>
                <tr>
                  
                  <td>1.5 hrs.</td>
                  <td>10am - 11:30am</td>
                  <td>21-sep</td>
                  <td>Elizabeth Paz</td>
                </tr>
                <tr>
                  
                  <td>1.5 hrs.</td>
                  <td>10am - 11:30am</td>
                  <td>22-sep</td>
                  <td>Faustino Garduño</td>
                </tr>
                <tr>
                  
                  <td>1.5 hrs.</td>
                  <td>10am - 11:30am</td>
                  <td>23-sep</td>
                  <td>Jesús Hidalgo</td>
                </tr>

                <tr>
                  <td rowspan="4">
                    <strong>CICLO DE EGRESOS</strong><br>
                    Estructura Organizacional (Sociedad, centro, Almacenes)<br>
                    Datos Maestros (Materiales, Proveedores, Registros Info)<br>
                    &nbsp;&nbsp;&nbsp;Flujo de documentos:<br>
                    &nbsp;&nbsp;&nbsp;Proceso de compras:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Solicitud de pedido<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Petición de oferta<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Orden de compra<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Entrada de mercancías<br>
                    &nbsp;&nbsp;&nbsp;Gestión de stock:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Entradas de mercancías<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Salida de mercancías<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Traspasos<br>
                    Verificación de factura<br>
                    &nbsp;&nbsp;&nbsp;Inventarios:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Documento de inventario<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Recuento del inventario<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Análisis de diferencias<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Contabilización del documento<br>
                    &nbsp;&nbsp;&nbsp;Maestro de Materiales:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;Alta de los diferentes tipos de materiales MP,SEMI, PT, REFA, INDIRECTOS, SERVICIOS, IMPUTADOS<br>
              
                    Reportes de stock<br>
                    Reportes Compras<br>
                    Antigüedad de saldos proveedores<br>
                    Pagos<br>
                  </td>
                  <td>1.5 hrs.</td>
                  <td>10am - 11:30am</td>
                  <td>26-sep</td>
                  <td>Gerardo Acevedo</td>
                </tr>

                <tr>
                  
                  <td>1.5 hrs.</td>
                  <td>10am - 11:30am</td>
                  <td>27-sep</td>
                  <td>Faustino Garduño</td>
                </tr>

                <tr>
                  
                  <td>1.5 hrs.</td>
                  <td>10am - 11:30am</td>
                  <td>28-sep</td>
                  <td>Gerardo Acevedo</td>
                </tr>

                <tr>
                  
                  <td>1.5 hrs.</td>
                  <td>10am - 11:30am</td>
                  <td>29-sep</td>
                  <td>Faustino Garduño</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div class="col-xl-12">
            <br>
            <p><strong>CUPO</strong></p>
            <p class="resaltado">15 integrantes por Curso.</p>
          </div>

          <div class="col-xl-12">
            <br>
            <p><strong>PERFIL DEL ALUMNADO</strong></p>
            <ul>
              <li>Tener usuario SAP</li>
              <li>Participar en el proceso dentro de la organización del Ciclo en que se inscriba, Ingresos y/o Egresos</li>
              <li>Se permite inscribirse a todos los cursos del mismo Ciclo</li>
              <li>Se debe contar con computadora con cámara, micrófono e internet para las videoconferencias</li>
            </ul>
          </div>

          <div class="col-xl-12">
            <br>
            <p><strong>METODO DE INSCRIPCIÓN</strong></p>
            <p>Envía un correo a <span class="resaltado">accamacho@iusa.com.mx</span> y <span class="resaltado">jmartinez@iusa.com.mx</span>,
            poniendo el Código del Curso y una breve justificación del porque estas interesado en el curso, solo se aceptaran 15 integrantes
            por curso, pero se estarán programando mas cursos cada mes</p>
          </div>

        </div>
      </div>
      <p></p>
    </div>
  </main>
</template>
<script>
export default {
  name: "SAPCourse",
  data() {
    return {
      data: null,
    };
  },
};
</script>
<style>
button.page-link {
  display: inline-block;
}
.resaltado{font-weight: 500; color: #ff0000}
</style>
