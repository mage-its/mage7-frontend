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
  },
  async mounted() {
    await this.getParticipantById(this.$route.params.id);
  },
};
</script>
<style scoped>
</style>
