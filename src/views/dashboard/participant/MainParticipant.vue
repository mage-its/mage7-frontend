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
            <h5>Konfirmasi Email</h5>
            <br />{{ outline.email_verification }} peserta
          </b-container>
        </b-col>
        <b-col class="mt-3" cols="3">
          <b-container class="bg-white p-3 rounded shadow-sm border">
            <h5>Identitas</h5>
            <br />{{ outline.identity }} peserta
          </b-container>
        </b-col>
        <b-col class="mt-3" cols="3">
          <b-container class="bg-white p-3 rounded shadow-sm border">
            <h5>Kartu Pelajar</h5>
            <br />{{ outline.osis_card }} peserta
          </b-container>
        </b-col>
        <b-col class="mt-3" cols="3">
          <b-container class="bg-white p-3 rounded shadow-sm border">
            <h5>Pas foto</h5>
            <br />{{ outline.image }} peserta
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="p-0 m-0 mb-4">
      <h3 class="text-left mb-2">Peserta</h3>
      <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
        <b-col class="text-left" md="3">
          <p>Peserta</p>
        </b-col>
        <b-col class="text-center" md="2">
          <p>Identitas</p>
        </b-col>
        <b-col class="text-center" md="2">
          <p>Kartu Osis</p>
        </b-col>
        <b-col class="text-center" md="2">
          <p>Pas Foto</p>
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
        <b-col class="pt-2" md="2">
          <p
            class="text-success"
            v-if="participant.participant.address.length > 1"
          >
            <i class="fas fa-check"></i>
          </p>
          <p v-else>-</p>
        </b-col>
        <b-col class="pt-2" md="2">
          <div v-if="participant.participant.document">
            <p
              class="text-success"
              v-if="participant.participant.document.osis_card == 1"
            >
              <i class="fas fa-check"></i>
            </p>
            <p v-else>-</p>
          </div>
          <p v-else>-</p>
        </b-col>
        <b-col class="pt-2" md="2">
          <div v-if="participant.participant.document">
            <p
              class="text-success"
              v-if="participant.participant.document.image == 1"
            >
              <i class="fas fa-check"></i>
            </p>
            <p v-else>-</p>
          </div>
          <p v-else>-</p>
        </b-col>
        <b-col md="3">
          <router-link class="btn btn-primary" :to="participant._id">
            <i class="fas fa-search"></i>
            Detail
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "MainSchedule",
  data() {
    return {
      outline: {
        participants: 0,
        email_verification: 0,
        identity: 0,
        osis_card: 0,
        image: 0,
      }
    }
  },
  computed: {
    participants() {
      return this.$store.state.participant.participants;
    },
  },
  methods: {
    getParticipants() {
      this.$store.dispatch("participant/getAllParticipant").then(
        ()=>{
          this.participants.forEach((participant)=>{
            this.outline.participants++;
            if(participant.verification == 1)
              this.outline.email_verification++;
            if(participant.firstname.length > 0)
              this.outline.identity++;
            if(participant.participant.document.osis_card == 1)
              this.outline.osis_card++;
            if(participant.participant.document.image == 1)
              this.outline.image++;
          })
        }
      );
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
