<template>
  <div class="col-xl-12" v-if="data">
    <p class="card-icon-text text-black">SOLICITUD DE VACACIONES</p>
    <div class="card-body">
      <div class="row">
        <div class="col-xl-12">
          <br />
        </div>
        <div class="col-xl-6">
          <p><i class="fas fa-calendar-alt"></i> Período de ausencia</p>
          <div class="form-group">
            <label>Salida:</label>
            <input
              type="date"
              class="form-control"
              id="fecha"
              name="fecha"
              :min="date_today"
              :max="data.DEEND"
              v-model="form.schedule_out"
              @change="calculateDaysMaxVacation(form.schedule_out)"
            />
          </div>
          <br />
          <div>
            <label>No. Jefe Inmediato:</label>
            <input type="text" class="form-control" v-model="form.immediate_boss"/>
          </div>
        </div>
        <div class="col-xl-6">
          <p for="" class="">
            Fecha de Elaboración:
            <span class="card-icon-text">{{elaboration_date}}</span>
          </p>
          <div class="form-group">
            <label>Regreso:</label>
            <input
              type="date"
              class="form-control"
              id="fecha"
              name="fecha"
              :min="form.schedule_out"
              :max="date_max"
              v-model="form.schedule_return"
            />
          </div>
          <br />
          <div class="form-group">
            <label>E-mail Jefe Inmediato:</label>
            <input type="text" class="form-control" v-model="form.email_boss"/>
          </div>
          <br />
        </div>
        <div class="col-xl-12">
          <div class="form-group">
            <label>Clave de ausencia:</label>
            <input
              type="text"
              class="form-control"         
              v-model="form.absence_key"
            />
          </div>
          <br />
          <div class="form-group centerItems">
            <button class="btn btn-portal btn-lg" @click="saveVacationRequest()">SOLICITAR</button>
          </div>
        </div>
      </div>
    </div>

  </div>
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
import axios from "axios";
export default {
  data() {
    return {
      data: null,
      form:{},
      date_today: null,
      date_max:null,
      elaboration_date:null,
      meses:[]
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      await axios
        .get("getGeneralInformation")
        .then((response) => (
          this.data = response.data,
          this.form.immediate_boss = this.data.VORNAD +" "+ this.data.NACHND +" "+ this.data.NACH2D,
          this.form.email_boss = this.data.USRID_LONG
          ));
      this.getDateNow();
    },
    getDateNow() {
      const d = new Date();
      const day = ("0" + d.getDate()).slice(-2);
      let mont_val = parseInt(d.getMonth());
      mont_val = mont_val + 1;
      const month = ("0" + mont_val).slice(-2);
      const year = d.getFullYear();
      var anio = year.toString();
      this.date_today = year + "-" + month + "-" + day;
      this.form.date = this.date_today;
      this.meses=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
      this.elaboration_date = day + "/" + this.meses[mont_val-1] + "/" + anio.substr(anio.length - 2);
    },
    calculateDaysMaxVacation(date){
      this.date_max = null;
      const d = new Date(date);
      d.setDate(d.getDate() + Math.trunc(this.data.ANZHL));
      //validacion con fecha limite de vencimiento
      const fecha_vencimiento = new Date(this.data.DEEND);
      if(d >= fecha_vencimiento){
        this.date_max = this.data.DEEND;
      }else{
        const day = ("0" + d.getDate()).slice(-2);
        let mont_val = parseInt(d.getMonth());
        mont_val = mont_val + 1;
        const month = ("0" + mont_val).slice(-2);
        const year = d.getFullYear();
        this.date_max = year + "-" + month + "-" + day;
      }
    },
    saveVacationRequest(){
      axios
        .post("/saveVacationRequest", {
          form: this.form,
        })
        .then((response) => {
          //this.$router.push({ name: "Reservations" });
          this.form = {},
          this.$swal({
            title: response.data[0].mesage,
            icon: "success",
          });          
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
};
</script>

<style></style>
