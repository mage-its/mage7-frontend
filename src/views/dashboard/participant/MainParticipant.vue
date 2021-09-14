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
        <template #cell(registeredComp)="data">
          {{
            data.item.registeredComp
              ? data.item.registeredComp
              : "Belum terdaftar"
          }}
        </template>
        <template #cell(detail)="data">
          <router-link
            :to="{ name: 'DetailParticipant', params: { id: data.item.id } }"
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
import LoadingSubmit from "@/components/LoadingSubmit";

export default {
  name: "MainParticipant",
  components: {
    LoadingSubmit,
  },
  data() {
    return {
      loading: true,
      participants: [],
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: "name",
          label: "Nama",
        },
        {
          key: "email",
          label: "Email",
        },
        {
          key: "registeredComp",
          label: "Kompetisi yang Terdaftar",
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
        .get(`${this.endpointAPI}api/v1/users/?role=user`, header())
        .then((response) => {
          this.loading = false;
          // eslint-disable-next-line prefer-destructuring
          data = response.data;
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
        .get(`${this.endpointAPI}api/v1/users/?role=user&page=${this.currentPage}`, header())
        .then((response) => {
          this.loading = false;
          // eslint-disable-next-line prefer-destructuring
          data = response.data;
        });
      this.participants = data.results;
      this.rows = data.totalResults;
    },
  },
  async mounted() {
    this.getParticipantsData();
  },
};
</script>
<style scoped>
b-table {
  overflow: show;
}
</style>
