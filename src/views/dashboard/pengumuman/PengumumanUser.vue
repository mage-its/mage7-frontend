<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="fas fa-bullhorn"></i>
        Pengumuman
      </h3>
    </div>
    <hr />
    <div>
      <b-container class="bg-white p-5" v-if="announcements.length">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          class="mt-3"
        ></b-pagination>
        <div v-for="announcement in announcements" :key="announcement.id">
          <b-card :title="announcement.title" class="mb-2">
            <b-card-text>
              {{announcement.content}}
            </b-card-text>
          </b-card>
        </div>
      </b-container>
      <b-container v-else class="bg-white p-5">
        <h4>Belum ada pengumuman</h4>
      </b-container>
    </div>
  </b-container>
</template>
<script>
import axios from 'axios';
import header from '../../../services/header';

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      rows: 10,
      announcements: [],
    };
  },
  methods: {
    async getAnnouncements() {
      let data = null;
      await axios
        .get(`${this.endpointAPI}api/v1/announcement/peserta?page=${this.currentPage}`, header())
        .then((response) => {
          // eslint-disable-next-line prefer-destructuring
          data = response.data;
        })
        .catch((error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          if (error.response.data.code === 401) {
            this.refreshToken();
          } else {
            console.log(error.response.data.message);
          }
        });
      this.announcements = data.results;
      this.rows = data.totalResults;
    },
    refreshToken() {
      const user = JSON.parse(localStorage.getItem('user'));
      axios
        .post(`${this.endpointAPI}api/v1/auth/refresh-tokens`, {
          refreshToken: user.tokens.refresh.token,
        })
        .then((response) => {
          user.tokens = response.data;
          localStorage.setItem('user', JSON.stringify(user));
        })
        .then(() => {
          this.getAnnouncements();
        });
    },
  },
  watch: {
    currentPage() {
      this.getAnnouncements();
    },
  },
  async mounted() {
    this.getAnnouncements();
  },
};
</script>

<style scoped>
.header {
  overflow: auto;
  min-width: 100%;
  padding: 30px;
}
</style>
