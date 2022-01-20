<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">BUZÓN DE SUGERENCIAS</h3>
      <p></p>
      <div class="row">
        <div class="col-xl-12">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-xl-6 marginCardsText">
                  <br />
                  <p class="justify-text-div card-icon-text">
                    Te invitamos que si tienes una Queja, Observación o
                    Sugerencia relacionado a la empresa o sobre algún asunto
                    específico, nos la hagas llegar a través de este buzón.
                  </p>
                  <p>
                    La información que nos proporciones será tratada con
                    estricta confidencialidad.
                  </p>
                  <p></p>
                  <!-- <form> -->
                  <label class="mb-1">Asunto</label>
                  <select
                    v-model="subject"
                    class="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <!-- <option disabled value="">Please select one</option> -->
                    <option
                      v-for="option in options"
                      :key="option.id"
                      :value="option.option"
                      :disabled="option.option === 'Seleccionar'"
                      :selected="option.option === 'Seleccionar'"
                    >
                      {{ option.option }}
                    </option>
                  </select>
                  <p></p>
                  <label class="mb-1">Descripción</label>
                  <textarea
                    v-model="description"
                    class="form-control"
                    placeholder="Descripción de la situación"
                    rows="5"
                  ></textarea>
                  <br />
                  <div>
                    <button
                      class="btn btn-portal"
                      @click="sendSuggestions"
                      :disabled="subject === 'Seleccionar' || !description"
                    >
                      ENVIAR
                    </button>
                  </div>
                  <!-- </form> -->
                </div>
                <div class="col-xl-6 marginCardsText">
                  <p class="center-text-div card-icon-text">TERMINOLOGÍA</p>
                  <!-- <p class="justify-text-div">
                    <strong>Hallazgo</strong> : Queja, Observación o Sugerencia.
                  </p> -->
                  <p class="justify-text-div">
                    <strong>Queja</strong> : Incumplimiento de calidad,
                    ambiental, discriminación, denuncia derivada del
                    incumplimiento al código de ética, de conducta o las reglas
                    de integridad* ó cualquier incumplimiento a algún reglamento
                    interno de la Empresa.
                  </p>
                  <p class="justify-text-div">
                    <strong>Observación</strong> : Es un hallazgo que podría
                    ocasionar potencialmente un incumplimiento de calidad, medio
                    ambiente, discriminación ó cualquier incumplimiento a algún
                    reglamento interno de la Empresa y que afecta a la calidad
                    del servicio.
                  </p>
                  <p class="justify-text-div">
                    <strong>Sugerencia</strong> : Es una recomendación que pueda
                    ayudar a la calidad del servicio.
                  </p>
                </div>
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
  name: "SuggestionsMailbox",
  data() {
    return {
      description: null,
      subject: "Seleccionar",
      options: [
        {
          id: 1,
          option: "Seleccionar",
        },
        { id: 2, option: "Queja" },
        { id: 3, option: "Observación" },
        { id: 4, option: "Sugerencia" },
      ],
    };
  },
  methods: {
    sendSuggestions() {
      if (this.subject != null && this.description != null) {
        axios
          .post("sendSuggestions", {
            subject: this.subject,
            description: this.description,
          })
          .then(() => {
            this.$swal({
              title: `${this.subject} enviada correctamente`,
              icon: "success",
            });
            this.subject = null;
            this.description = null;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => (this.loading = false));
      }
    },
  },
};
</script>
