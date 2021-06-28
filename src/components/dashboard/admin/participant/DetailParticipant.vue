<template>
  <div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <b-row>
        <b-col lg="3">
          <img class="profile" v-bind:src="'../../' + participant.image" />
        </b-col>
        <b-col class="pt-3" lg="8">
          <h1 class="text-left">{{ participant.username }}</h1>
          <h3 class="text-left text-secondary">
            {{ participant.firstname + " " + participant.lastname }}
          </h3>
        </b-col>
      </b-row>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Biodata</h2>
      <br />
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Tanggal lahir:</p>
        </b-col>
        <b-col lg="8">
          <p class="text-left">
            {{ getDateTime("date", "2001-01-28T00:00:00Z") }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Sekolah:</p>
        </b-col>
        <b-col lg="8">
          <p v-if="participant.participant.school" class="text-left">{{ participant.participant.school }}</p>
          <p v-else>-</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Daerah:</p>
        </b-col>
        <b-col lg="8">
          <p class="text-left">
            {{
              participant.participant.location.subdistrict +
                ", " +
                participant.participant.location.city +
                ", " +
                participant.participant.location.province
            }}
          </p>
        </b-col>
      </b-row>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Dokumen</h2>
      <br />
      <div v-if="participant.participant.document">
        <b-card
          title="Kartu Osis"
          img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
          style="width: 500px;"
        >
        
        <div v-if="participant.participant.document.osis_card.status == 1">
          <b-button
            class="btn btn-primary"
            href="javascript:;"
            variant="primary"
          >
            <i class="fas fa-search"></i>
            &nbsp;Buka
          </b-button>
          <b-button class="btn btn-success ml-2" href="javascript:;">
            <i class="fas fa-check"></i>&nbsp; Terima
          </b-button>
          <b-button class="btn btn-danger ml-2" href="javascript:;">
            <i class="fas fa-times"></i>
            &nbsp;Tolak
          </b-button>
        </div>
        <div v-if="participant.participant.document.osis_card.status == 2">
          <p><i class="fas fa-times"></i>Ditolak</p>
        </div>
        <div v-if="participant.participant.document.osis_card.status == 3">
          <p><i class="fas fa-check"></i>Ditolak</p>
        </div>
        </b-card>
        <br />
        <b-card
          title="Pas Foto"
          img-src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/img-1-1000x600.jpg"
          style="width: 500px;"
        >
          <b-button
            class="btn btn-primary"
            href="javascript:;"
            variant="primary"
          >
            <i class="fas fa-search"></i>
            &nbsp;Buka
          </b-button>
          <b-button class="btn btn-success ml-2" href="javascript:;">
            <i class="fas fa-check"></i>&nbsp; Terima
          </b-button>
          <b-button class="btn btn-danger ml-2" href="javascript:;">
            <i class="fas fa-times"></i>
            &nbsp;Tolak
          </b-button>
        </b-card>
      </div>
      <div v-else>
        <p class="text-left">Peserta belum mengunggah dokumen</p>
      </div>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Pembayaran</h2>
      <br />
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Tanggal lahir:</p>
        </b-col>
        <b-col lg="8">
          <p class="text-left">
            {{ getDateTime("date", "2001-01-28T00:00:00Z") }}
          </p>
        </b-col>
      </b-row>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Event</h2>
      <br />
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Tanggal lahir:</p>
        </b-col>
        <b-col lg="8">
          <p class="text-left">
            {{ getDateTime("date", "2001-01-28T00:00:00Z") }}
          </p>
        </b-col>
      </b-row>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Sertifikat</h2>
      <br />
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Tanggal lahir:</p>
        </b-col>
        <b-col lg="8">
          <p class="text-left">
            {{ getDateTime("date", "2001-01-28T00:00:00Z") }}
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import * as datetime from "./../../../../services/datetime";

export default {
  name: "MainSchedule",
  computed: {
    participant() {
      return this.$store.state.participant.participant;
    },
  },
  methods: {
    getParticipant() {
      this.$store.dispatch("participant/getParticipant", this.$route.params.id);
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
  },
  created() {
    this.getParticipant();
  },
};
</script>
<style scoped>
.profile {
  height: 150px;
  width: 150px;
  border-radius: 75px;
}
</style>
