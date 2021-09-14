<template>
  <div>
    <div v-if="loading">
      <LoadingSubmit />
    </div>
    <b-container class="bg-white p-5">
      <b-input-group class="mt-3 mb-3">
        <b-form-input v-model="keyword" placeholder="Search" type="text">
        </b-form-input>
      </b-input-group>
      <div v-if="dataEmpty"><h5 class="text-center">Data Kosong</h5></div>
      <div v-else>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
        ></b-pagination>
        <b-table
          striped
          hover
          :items="searchedParticipants"
          :fields="fields"
          responsive
        >
          <template #cell(proposal)="data" v-if="type !== 'olim'">
            <a
              target="_blank"
              :href="endpointAPI + data.item.pathProposal"
              class="btn d-inline"
              v-if="data.item.pathProposal"
            >
              <b-button><i class="fa fa-search"></i></b-button>
            </a>
            <p v-else class="text-center">-</p>
          </template>
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
import LoadingSubmit from "@/components/LoadingSubmit";

export default {
  name: "MainUserCompetition",
  components: {
    LoadingSubmit,
  },
  data() {
    const fields = [
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
        key: "asalInfo",
        label: "Asal Info",
      },
      {
        key: "sudahUploadBuktiBayar",
        label: "Sudah Bayar",
      },
      {
        key: "proposal",
        label: "Proposal",
      },
      {
        key: "detail",
        label: "Detail",
      },
    ];
    if (this.$route.params.competition === 'olim') {
      fields.splice(5, 1);
    }
    return {
      loading: true,
      competition: "",
      dataEmpty: false,
      participants: [],
      fields,
      keyword: "",
      perPage: 10,
      currentPage: 1,
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
          this.loading = false;
          // eslint-disable-next-line prefer-destructuring
          data = response.data;
          if (data.results.length < 1) {
            this.dataEmpty = true;
          }
        });
      this.participants = data.results;
      this.rows = data.totalResults;
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
  watch: {
    async currentPage() {
      let data = null;
      await axios
        .get(`${this.endpointAPI}api/v1/${this.$route.params.competition}?page=${this.currentPage}`, header())
        .then((response) => {
          this.loading = false;
          // eslint-disable-next-line prefer-destructuring
          data = response.data;
        });
      this.participants = data.results;
      this.rows = data.totalResults;
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
