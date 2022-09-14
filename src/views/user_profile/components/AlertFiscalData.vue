<template>
  <!-- Modal -->
  <div v-if="showModal" style="z-index: 1000">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div
            class="modal-dialog modal-dialog-scrollable"
            role="document"
            style="max-width: 1200px"
          >
            <div class="modal-content">
              <div class="modal-header">
                <!-- <h5 class="modal-title" style="font-weight: 700">
                  VALIDAR DATOS FISCALES
                </h5> -->
              </div>
              <div class="modal-body" style="heigth: 450px">
                <fiscal-identification-data
                  :warn="closeModal"
                ></fiscal-identification-data>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="closeModal()"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FiscalIdentificationData from "./FiscalIdentificationData.vue";

export default {
  name: "AlertFiscalData",
  components: { FiscalIdentificationData },
  props: {
    capturedUser: {
      type: String,
      default: null,
    },
    warn: {
      type: Function,
      default: null,
    },
  },
  watch: {
    capturedUser: function (value) {
      if (value != null) {
        this.showModal = true;
      }
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.warn(null);
    },
    verificData() {
      if (
        this.data.ICNUM == "" ||
        this.data.PERID == "" ||
        this.data.VORNA == "" ||
        this.data.NACHN == "" ||
        this.data.NACH2 == "" ||
        this.data.PSTLZ == "" ||
        this.data.STRAS == "" ||
        this.data.ORT02 == "" ||
        this.data.STATE == "" ||
        this.data.CORREO == ""
      ) {
        alert("Complete todos los datos");
      } else {
        this.showModal = false;
      }
    },
  },
};
</script>
