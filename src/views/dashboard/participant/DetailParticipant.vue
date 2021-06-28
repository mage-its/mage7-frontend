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
      <hr />
      <br />
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Tanggal lahir:</p>
        </b-col>
        <b-col lg="8">
          <p class="text-left">
            {{ getDateTime("date", participant.participant.birth_date) }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Region:</p>
        </b-col>
        <b-col lg="8">
          <p v-if="participant.participant.region" class="text-left">
            {{ participant.participant.region }}
          </p>
          <p v-else>-</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Alamat:</p>
        </b-col>
        <b-col lg="8">
          <p v-if="participant.participant.address" class="text-left">
            {{ participant.participant.address }}
          </p>
          <p v-else>-</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Kelas:</p>
        </b-col>
        <b-col lg="8">
          <p v-if="participant.participant.grade" class="text-left">
            {{ participant.participant.grade }}
          </p>
          <p v-else>-</p>
        </b-col>
      </b-row>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Kontak</h2>
      <hr />
      <br />
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Email:</p>
        </b-col>
        <b-col lg="8">
          <p v-if="participant.email" class="text-left">
            {{ participant.email }}
          </p>
          <p v-else>-</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Nomor HP:</p>
        </b-col>
        <b-col lg="8">
          <p v-if="participant.participant.phone_number" class="text-left">
            {{ participant.participant.phone_number }}
          </p>
          <p>-</p>
        </b-col>
      </b-row>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Sekolah</h2>
      <hr />
      <br />
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Nama:</p>
        </b-col>
        <b-col lg="8">
          <p v-if="participant.participant.school.name" class="text-left">
            {{ participant.participant.school.name }}
          </p>
          <p v-else>-</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2">
          <p class="text-left text-bold">Alamat:</p>
        </b-col>
        <b-col lg="8">
          <p v-if="participant.participant.school.address" class="text-left">
            {{ participant.participant.school.address }}
          </p>
          <p>-</p>
        </b-col>
      </b-row>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Dokumen</h2>
      <hr />
      <br />
      <div v-if="participant.participant.document">
        <b-card
          v-if="participant.participant.document.osis_card == 1"
          title="Kartu Osis"
          :img-src="
            'http://anavaugm.com/osis_card_' + participant._id + '.jpg'
          "
          style="width: 500px;"
        >
        </b-card>
        <b-container
          v-else
          class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2
          border"
        >
          <p>
            <i class="fas fa-exclamation-triangle fa-2x"></i>
            <br />
            Kartu pelajar belum diunggah
          </p>
        </b-container>
        <b-card
          v-if="participant.participant.document.image == 1"
          title="Pas Foto"
          :img-src="'http://anavaugm.com/image_' + participant._id + '.jpg'"
          style="width: 300px; height: 500px;"
        >
        </b-card>
        <b-container
          v-else
          class="container bg-white p-3 text-center text-dark rounded-lg mt-2 mb-2
          border"
        >
          <p>
            <i class="fas fa-exclamation-triangle fa-2x"></i>
            <br />
            Pas foto belum diunggah
          </p>
        </b-container>
      </div>
      <div v-else>
        <p class="text-left">Peserta belum mengunggah dokumen</p>
      </div>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Event</h2>
      <hr />
      <br />
      <b-row
        class="p-3 border"
        v-for="event in participant.participant.events"
        :key="event.id"
      >
        <b-col class="text-left" cols="12">
          <h3>{{ event.name }}</h3>
          <small>
            Status Pembayaran:
            <i v-if="event.paymentStatus == 1" class="fas fa-check"></i>
            <p class="d-inline" v-else>-</p>
          </small><br/>
          <small>
            Nomor Peserta:
            <p class="d-inline" v-if="event.number">{{ event.number }}</p>
            <p class="d-inline" v-else>-</p>
          </small>
          <div v-for="stage in event.stages" :key="stage.id">
            <hr />
            {{ getStageName(stage.name, event.name) }}
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="bg-white rounded shadow-sm p-4 mb-3">
      <h2 class="text-left">Sertifikat</h2><hr/>
      <br />
    </div>
  </div>
</template>
<script>
import * as datetime from "./../../../services/datetime";

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
    getStageName(name, eventName) {
      switch (eventName) {
        case "OSM":
          switch (name) {
            case "preliminary":
              name = "Penyisihan";
              break;
            case "semifinal":
              name = "Semifinal";
              break;
            case "final":
              name = "Final";
              break;
          }
          break;
        case "The One":
          switch (name) {
            case "preliminary":
              name = "Babak Gugur";
              break;
            case "semifinal":
              name = "Babak Championship";
              break;
          }
          break;
        case "Started":
          switch (name) {
            case "preliminary":
              name = "Pekan Kreativitas";
              break;
            case "semifinal":
              name = "Final";
              break;
          }
          break;
        case "Sigma":
          name = "";
          break;
        case "Open House":
          name = "";
          break;
      }
      return name;
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
