<template>
  <div>
    <b-container class="bg-white p-5">
      <b-input-group class="mt-3 mb-3">
        <b-form-input v-model="keyword" placeholder="Search" type="text">
        </b-form-input>
      </b-input-group>
      <b-table
        striped
        hover
        :items="searchedParticipants"
        :fields="fields"
        responsive
      >
        <template #cell(detail)="data">
          <router-link
            :to="{ name: 'DetailUserCompetition', params: { id: data.item.id } }"
          >
            <b-button><i class="fa fa-search"></i></b-button>
          </router-link>
        </template>
      </b-table>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import header from "../../../services/header";

export default {
  name: "MainParticipant",
  data() {
    return {
      competition: "",
      participants: [],
      fields: [
        {
          key: "namaTim",
          label: "Nama Tim",
        },
        {
          key: "namaKetua",
          label: "Nama Ketua",
        },
        {
          key: "asalInstansi",
          label: "Asal Instansi",
        },
        {
          key: "detail",
          label: "Detail",
        },
      ],
      keyword: "",
    };
  },
  methods: {
    async getParticipantsData() {
      let data = null;
      await axios
        .get(`${this.endpointAPI}api/v1/${this.$route.params.competition}`, header())
        .then((response) => {
          data = response.data.results;
        });
      this.participants = data;
    },
  },
  computed: {
    searchedParticipants() {
      return this.keyword
        ? this.participants.filter(
            (participant) =>
              participant.name.includes(this.keyword) ||
              participant.email.includes(this.keyword)
          )
        : this.participants;
    },
  },
  mounted() {  
    this.competition = this.$route.params.competition;
    this.getParticipantsData();
  },
};
</script>
<style scoped>
b-table {
  overflow: show;
}
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
</style>
