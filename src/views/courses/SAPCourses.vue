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
                  <th style="font-weight: 700;">Código</th>
                  <th style="font-weight: 700;">Cursos</th>
                  <th style="font-weight: 700;">Ciclo</th>
                  <th style="font-weight: 700;">Duración</th>
                  <th style="font-weight: 700;">Horario</th>
                  <th style="font-weight: 700;">Días</th>   
                  <th style="font-weight: 700;">Instructor</th>              
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1001</strong></td>
                  <td>
                    Estructura Organizacional<br>
                    Datos Maestros (Clientes, Materiales)<br>
                  </td>
                  <td><strong>Ingresos</strong></td>
                  <td>1.5 hrs.</td>
                  <td><strong>10am - 11:30am</strong></td>
                  <td>20-sep</td>
                  <td>Elizabeth Paz</td>
                </tr>
                <tr>
                  <td><strong>1002</strong></td>
                  <td>Documentos comerciales:<br>
                    &nbsp;Pedidos<br>
                    &nbsp;Entrega<br>
                    &nbsp;Facturas<br>
                    &nbsp;Cotizaciones<br>
                    &nbsp;Condiciones<br>
                    &nbsp;Sistemas Info (Reportes de ventas, fill rate, estadística, etc)</td>
                  <td><strong>Ingresos</strong></td>
                  <td>2 hrs.</td>
                  <td><strong>10am - 12pm</strong></td>
                  <td>22-sep</td>
                  <td>Elizabeth Paz</td>
                </tr>
                <tr>
                  <td><strong>1003</strong></td>
                  <td> 
                    Reportes de ventas Click View<br>
                    Antiguedad y Cartera Clientes<br>
                    Analisis indivial del cliente<br>
                    Cobranza
                  </td>
                  <td><strong>Ingresos</strong></td>
                  <td>1.5 hrs.</td>
                  <td><strong>10am - 11:30am</strong></td>
                  <td>21-sep</td>
                  <td>Faustino Garduño</td>
                </tr>
                <tr>
                  <td><strong>1004</strong></td>
                  <td>
                    PGC<br>
                    Portal Distribuidores<br>
                  </td>
                  <td><strong>Ingresos</strong></td>
                  <td>1.5 hrs.</td>
                  <td><strong>10am - 11:30am</strong></td>
                  <td>23-sep</td>
                  <td>Jesús Hidalgo</td>
                </tr>

                <tr>
                  <td><strong>2001</strong></td>
                  <td>
                    Estructura Organizacional (Sociedad, centro, Almacenes)<br>
                    Datos Maestros (Materiales, Proveedores, Registros Info)<br>
                  </td>
                  <td><strong>Egresos</strong></td>
                  <td>1.5 hrs.</td>
                  <td><strong>10am - 11:30am</strong></td>
                  <td>26-sep</td>
                  <td>Gerardo Acevedo</td>
                </tr>

                <tr>
                  <td><strong>2002</strong></td>
                  <td>
                   Proceso de compras:<br>
                  &nbsp;Solicitud de pedido<br>
                  &nbsp;Petición de oferta<br>
                  &nbsp;Orden de compra<br>
                  Gestión de stock:<br>
                  &nbsp;Entradas de mercancías<br>
                  &nbsp;Salida de mercancías<br>
                  &nbsp;Traspasos<br>
                  Verificación de factura<br>
                  Antigüedad de saldos proveedores<br>
                  Pagos
                  </td>
                  <td><strong>Egresos</strong></td>
                  <td>2 hrs.</td>
                  <td><strong>10am - 12pm</strong></td>
                  <td>27-sep</td>
                  <td>Faustino Garduño</td>
                </tr>

                <tr>
                  <td><strong>2003</strong></td>
                  <td>
                    Inventarios:<br>
                    &nbsp;Documento de inventario<br>
                    &nbsp;Recuento del inventario<br>
                    &nbsp;Análisis de diferencias<br>
                    &nbsp;Contabilización del documento<br>
                    Maestro de Materiales:<br>
                    &nbsp;Alta de los diferentes tipos de materiales<br>
                    &nbsp;MP,SEMI, PT, REFA, INDIRECTOS, SERVICIOS, IMPUTADOS<br>
                    Reportes de stock<br>
                    Reportes Compras<br>
                  </td>
                  <td><strong>Egresos</strong></td>
                  <td>1.5 hrs.</td>
                  <td><strong>10am - 11:30am</strong></td>
                  <td>28-sep</td>
                  <td>Gerardo Acevedo</td>
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
            poniendo el Código del Curso y una breve justificación del porque estas interesado en el curso.</p>
          </div>

          <div class="col-xl-12">
            <strong>Solo se aceptarán 15 integrantes por curso. Se confirmará por correo si fue aceptado y se le enviará el link para la videoconferencia un día antes.</strong>
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
