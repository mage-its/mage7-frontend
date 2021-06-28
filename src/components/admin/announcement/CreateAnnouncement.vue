<template>
  <div>
    <b-container
      v-if="step == 0"
      class="bg-white p-3 mt-3 shadow-sm rounded text-dark"
    >
      <h3>Jenis Pengumuman</h3>
      <hr />
      <button @click="chooseType(1)" class="btn btn-custom p-3">Umum</button
      ><br />
      <button @click="chooseType(2)" class="btn btn-custom p-3">Event</button
      ><br />
      <button @click="chooseType(3)" class="btn btn-custom p-3">
        Peserta
      </button>
    </b-container>
    <b-container v-if="step == 1" class="bg-white p-3 mt-3 shadow-sm rounded">
      <div v-if="announcement.type == 3">
        <h3 class="text-left ml-4">Pilih Peserta</h3>
        <hr />
        <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
          <b-col class="text-left" md="3">
            <p>Peserta</p>
          </b-col>
        </b-row>
        <b-row
          class="bg-white p-2 mb-2 shadow-sm rounded"
          no-gutters
          v-for="participant in participants"
          :key="participant._id"
        >
          <b-col md="1">
            <img class="profile" v-bind:src="'../../' + participant.image" />
          </b-col>
          <b-col md="2">
            <p class="text-bold">{{ participant.username }}</p>
            <br />
            <p class="text-secondary">
              {{ participant.firstname + " " + participant.lastname }}
            </p>
          </b-col>
          <b-col md="3" />
          <b-col md="3" />
          <b-col md="3">
            <button
              @click="chooseParticipant(participant._id)"
              class="btn btn-primary"
            >
              <i class="fas fa-check"></i>
              Pilih
            </button>
          </b-col>
        </b-row>
      </div>
      <div v-else>
        <h2>Pilih Event</h2>
        <hr />
        <div v-for="event in events" :key="event._id">
          <h3 class="text-left pl-5">{{ event.name }}</h3>
          <b-row
            class="bg-white p-2 mb-2 shadow-sm rounded"
            no-gutters
            v-for="stage in event.stages"
            :key="stage._id"
          >
            <b-col md="3" class="text-left pl-5">
              <p>{{ stage.name }}</p>
            </b-col>
            <b-col md="3" />
            <b-col md="3" />
            <b-col md="3">
              <button @click="chooseStage(stage._id)" class="btn btn-primary">
                <i class="fas fa-check"></i>
                Pilih
              </button>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
    <b-container v-if="step == 2" class="bg-white p-3 mt-3 shadow-sm rounded">
      <h2>Buat Pengumuman</h2>
      <hr />
      <b-form class="text-left ml-5 mt-4 mr-5">
        <b-form-group label="Judul :" label-for="title">
          <b-form-input
            type="text"
            id="title"
            placeholder="Masukan Judul"
            v-model="announcement.name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Deskripsi :" label-for="short">
          <vue-editor
            type="text"
            id="short"
            aria-describedby="namaHelp"
            placeholder="Masukan Deskripsi"
            v-model="announcement.description"
          ></vue-editor>
        </b-form-group>
        <a
          @click="createAnnouncement"
          href="#"
          class="btn btn-primary"
          type="submit"
        >
          <i class="far fa-save text-white"></i>
          Simpan
        </a>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import * as datetime from "./../../../../services/datetime";
import Swal from "sweetalert2";

export default {
  name: "CreateAnnouncement",
  data() {
    return {
      announcement: {
        eventId: "",
        participantId: "",
        adminId: "",
      },
      step: 0,
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    participants() {
      return this.$store.state.participant.participants;
    },
    events() {
      return this.$store.state.event.events;
    },
  },
  methods: {
    createAnnouncement() {
      this.$store
        .dispatch("announcement/createAnnouncement", this.announcement)
        .then(
          () => {
            Swal.fire({
              icon: "success",
              title: "Pengumuman berhasil dibuat",
              showConfirmButton: true,
            }).then(() => {
              this.$router.push("/dashboard/announcement/");
            });
          },
          () => {}
        );
    },
    getParticipants() {
      this.$store.dispatch("participant/getAllParticipant");
    },
    getEvents() {
      this.$store.dispatch("event/getAllEvent");
    },
    chooseParticipant(participantId) {
      this.announcement.participantId = participantId;
      this.step = 2;
    },
    chooseStage(stageId) {
      this.announcement.stageId = stageId;
      this.step = 2;
    },
    chooseType(type) {
      this.announcement.type = type;
      if (type == 1) this.step = 2;
      else this.step = 1;
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
  },
  created() {
    this.announcement.adminId = this.user.id;
    this.getParticipants();
    this.getEvents();
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
.btn-custom {
  background: #fff;
  min-width: 300px;
  margin-bottom: 10px;
  border: 3px solid rgb(200, 200, 200);
  color: #000;
}
.btn-custom:hover {
  border-color: #58427c;
  color: #000;
  background: #fff;
}
.btn-custom:active {
  border-color: #58427c;
  background: #ddd;
}
</style>
