<template>
  <div>
    <b-container class="bg-white p-5">
      <b-input-group class="mt-3 mb-3">
        <b-form-input v-model="keyword" placeholder="Search" type="text">
        </b-form-input>
      </b-input-group>
      <div v-if="dataEmpty"><h5 class="text-center">Data Kosong</h5></div>
      <div v-else>
        <b-table
          striped
          hover
          :items="searchedParticipants"
          :fields="fields"
          responsive
        >
          <template #cell(detail)="data">
            <router-link
              :to="{
                name: 'DetailUserCompetition',
                params: { id: data.item.id },
              }"
            >
              <b-button><i class="fa fa-search"></i></b-button>
            </router-link>
          </template>
        </b-table>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import header from "../../../services/header";

export default {
  name: "MainUserCompetition",
  data() {
    return {
      competition: "",
      dataEmpty: false,
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
        .get(
          `${this.endpointAPI}api/v1/${this.$route.params.competition}`,
          header()
        )
        .then((response) => {
          data = response.data.results;
          if (data.length < 1) {
            this.dataEmpty = true;
          }
		  console.log(this.dataEmpty);
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
</style>
