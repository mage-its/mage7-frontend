<template>
  <b-container class="bg-white p-5">
    <p class="text-bold">Nama</p>
    <p>{{ participant.name }}</p>
    <hr>
    <p class="text-bold">Email</p>
    <p>{{ participant.email }}</p>
    <hr>
    <p class="text-bold">Kompetisi yang terdaftar</p>
    <p>{{ participant.registeredComp ? participant.registeredComp : "Belum terdaftar"}}</p>
    <hr>
    <div v-if="competitionId">
      <p class="text-bold">Kompetisi</p>
      <router-link
        :to="{
          name: 'DetailUserCompetition',
          params: { id: competitionId, competition: participant.registeredComp },
        }"
      >
        <b-button><i class="fa fa-search"></i></b-button>
      </router-link>
      <hr>
    </div>
    <p class="text-bold">ID</p>
    <p>{{ participant.id }}</p>
    <hr>
    <p class="text-bold">Status verifikasi email</p>
    <p>{{ participant.isEmailVerified ? "Email sudah terverifikasi" : "Belum verifikasi email" }}</p>
  </b-container>
</template>
<script>
import axios from 'axios';
import header from '../../../services/header';

export default {
  name: 'DetailParticipant',
  data() {
    return {
      participant: null,
      competitionId: null,
    };
  },
  methods: {
    async getParticipantById(id) {
      await axios
        .get(`${this.endpointAPI}api/v1/users/${id}`, header())
        .then((response) => {
          this.participant = response.data;
        });
    },
    async getCompeById() {
      await axios
        .get(`${this.endpointAPI}api/v1/compe/user/${this.participant.id}`, header())
        .then((response) => {
          console.log(response.data);
          this.competitionId = response.data.id;
        });
    },
  },
  async mounted() {
    await this.getParticipantById(this.$route.params.id);
    await this.getCompeById();
  },
};
</script>
<style scoped>
</style>
