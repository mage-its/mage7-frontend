<template>
  <div>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-left" md="3">
        <p>Peserta</p>
      </b-col>
      <b-col class="text-center" md="3">
        <p>Nomor Peserta</p>
      </b-col>
    </b-row>
    <div v-for="participant in participants" :key="participant._id">
      <b-row
        v-if="joinEvent(participant) && getNumberParticipant(participant)"
        class="bg-white p-2 mb-2 shadow-sm rounded"
        no-gutters
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
            {{ participant.firstname + " oke" + participant.lastname }}
          </p>
        </b-col>
        <b-col md="2" class="pl-5">
          <p v-if="getNumberParticipant(participant)">
            {{ getNumberParticipant(participant) }}
          </p>
          <p v-else>-</p>
        </b-col>
        <b-col class="pt-2" md="2"> </b-col>
        <b-col class="pt-2" md="2"> </b-col>
        <b-col md="3">
          <button
            class="btn btn-primary"
            :to="participant._id"
            v-if="checkParticipant(participant)"
          >
            <i class="far fa-trash-alt"></i>
            Hapus
          </button>
          <div v-else>
            <div v-if="stage.session > 1">
              <button
                class="btn btn-primary"
                @click="addParticipantToStage(participant._id, 1)"
              >
                <i class="far fa-plus-square"></i>
                Sesi 1
              </button>

              <button
                class="btn btn-primary"
                @click="addParticipantToStage(participant._id, 2)"
              >
                <i class="far fa-plus-square"></i>
                Sesi 2
              </button>
            </div>
            <div v-else>
              <button
                class="btn btn-primary"
                @click="addParticipantToStage(participant._id, 1)"
              >
                <i class="far fa-plus-square"></i>
                Tambahkan
              </button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";

export default {
  name: "AddParticipantStage",
  computed: {
    participants() {
      return this.$store.state.participant.participants;
    },
    stage() {
      return JSON.parse(localStorage.getItem('stage'+this.$route.params.idStage));
    },
    event() {
      return JSON.parse(localStorage.getItem('event'));
    },
  },
  methods: {
    joinEvent(participant) {
      var join = false;

      participant.participant.events.forEach((event) => {
        if (event.id == this.event._id) join = true;
      });

      return join;
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
    getParticipants() {
      this.$store.dispatch("participant/getAllParticipant");
    },
    addParticipantToStage(idParticipant, session) {
      var stage = {
        id: this.$route.params.idStage,
        participantId: idParticipant,
        session: session,
      };

      this.$store.dispatch("stage/addParticipantToStage", stage).then(() => {
        Swal.fire({
          icon: "success",
          title: "Peserta berhasil ditambahkan",
          showConfirmButton: true,
        }).then();
        this.getParticipants();
      });
    },
    checkParticipant(participant) {
      var events = participant.participant.events;
      var isParticipant = false;
      events.forEach((event) => {
        event.stages.forEach((stage) => {
          if (stage.id == this.$route.params.idStage) {
            isParticipant = true;
          }
        });
      });
      return isParticipant;
    },
  },
  created() {
    this.getParticipants();
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
