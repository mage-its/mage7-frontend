<template>
  <div>
    <b-container class="p-0 m-0">
      <h3 class="text-left">Outline</h3>
      <b-row>
        <b-col class="mt-3" cols="3">
          <b-container class="bg-white p-3 rounded shadow-sm border">
            <h5>Peserta</h5>
            <br />{{ outline.participants }} peserta
          </b-container>
        </b-col>
        <b-col class="mt-3" cols="3">
          <b-container class="bg-white p-3 rounded shadow-sm border">
            <h5>Pembayaran</h5>
            <br />{{ outline.pay }}
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <h3 class="text-left mt-4">Peserta</h3>
    <b-container class="text-left ml-0 pl-0 pt-2 pb-2">
      <router-link :to="{ name: 'AddParticipantStage' }" class="btn btn-primary"
        ><i class="fas fa-plus"></i> Tambah</router-link
      >
    </b-container>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-left" md="3">
        <p>Peserta</p>
      </b-col>
      <b-col class="text-center" md="3">
        <p>Nomor Peserta</p>
      </b-col>
      <b-col class="text-center" md="3">
        <p>Status Pembayaran</p>
      </b-col>
      <b-col class="text-center" md="3">
        <p v-if="event.name == 'Started'">Surat Orisinalitas</p>
        <p v-else>Pakta Integritas</p>
      </b-col>
    </b-row>
    <div v-for="(participant, index) in stage.participants" :key="index">
      <b-row
        class="bg-white p-2 mb-2 shadow-sm rounded"
        no-gutters
        v-if="participant != null"
      >
        <b-col md="1">
          <img
            class="profile"
            v-bind:src="'http://anavaugm.com/' + participant.image"
          />
        </b-col>
        <b-col md="2">
          <p class="text-bold">{{ participant.username }}</p>
          <br />
          <p class="text-secondary">
            {{ participant.firstname + " " + participant.lastname }}
          </p>
        </b-col>
        <b-col md="3">
          <b v-if="getNumberParticipant(participant)">
            {{ getNumberParticipant(participant) }}
          </b>
          <p v-else>-</p>
        </b-col>
        <b-col md="3">
          <i
            v-if="getPaymentStatus(participant)"
            class="fas fa-check text-success"
          ></i>
          <p v-else>-</p>
        </b-col>
        <b-col md="3">
          <a
            class="btn btn-primary ml-3 mt-3"
            target="blank"
            :href="
              'http://anavaugm.com/event_document_' +
                event._id +
                participant._id +
                '.pdf'
            "
            v-if="getDocumentStatus(participant)"
          >
            <i class="fa fa-download" />&nbsp;Unduh
          </a>
          <p v-else>-</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListParticipantStage",
  data() {
    return {
      event: {},
      stage: {},
      outline: {
        participants: 0,
        pay: 0,
      },
      indexEvent: 0,
      indexStage: 0,
    };
  },
  methods: {
    getStage() {
      this.$store
        .dispatch("stage/getStage", this.$route.params.idStage)
        .then(() => {
          this.stage = this.$store.state.stage.stage;
          this.outline.participants = 0;
          this.outline.pay = 0;
          this.stage.participants.forEach((participant) => {
            this.outline.participants++;
            participant.participant.events.forEach((event) => {
              if (event.id == this.event._id && event.number) {
                this.outline.pay++;
              }
            });
          });
        });
    },
    getPaymentStatus(participant) {
      var paymentStatus = false;
      participant.participant.events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.$route.params.idStage && event.number)
            paymentStatus = true;
        });
      });
      return paymentStatus;
    },
    getDocumentStatus(participant) {
      var documentStatus = false;
      participant.participant.events.forEach((event) => {
        event.stages.forEach(() => {
          if (this.event.name == event.name && event.document == 1)
            documentStatus = true;
        });
      });
      return documentStatus;
    },
    getNumberParticipant(participant) {
      var number = false;
      participant.participant.events.forEach((event) => {
        if (event.id == this.event._id) {
          number = event.number;
        }
      });
      return number;
    },
  },
  updated() {
    if (this.$route.params.idStage != this.stage._id) {
      this.getStage();
    }
  },
  created() {
    const that = this;

    setInterval(() => {
      that.event = JSON.parse(localStorage.getItem("event"));
      that.stage = this.$store.state.stage.stage;
    }, 100);
  },
};
</script>
<style scoped>
p {
  display: inline;
}
.profile {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
</style>
