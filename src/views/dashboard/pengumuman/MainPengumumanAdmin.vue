<template>
  <div>
    <b-container class="bg-white p-5">
      <b-input-group-append>
        <router-link :to="{ name: 'CreatePengumumanAdmin' }">
          <b-button variant="info">Tambah Pengumuman</b-button>
        </router-link>
      </b-input-group-append>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        class="mt-3"
      ></b-pagination>
      <div v-for="announcement in announcements" :key="announcement.id">
        <b-card :title="announcement.title" :sub-title="announcement.type" class="mb-2">
          <b-card-text>
            {{announcement.content}}
          </b-card-text>
          <b-button @click="delAnnouncement(announcement.id)" variant="danger">Hapus</b-button>
        </b-card>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from 'axios';
import Swal from 'sweetalert2';
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
        .get(`${this.endpointAPI}api/v1/announcement?page=${this.currentPage}`, header())
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
    delAnnouncement(id) {
      axios
        .delete(`${this.endpointAPI}api/v1/announcement/${id}`, header())
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Pengumuman berhasil dihapus',
            showConfirmButton: true,
          }).then(() => this.getAnnouncements());
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'gagal menghapus pengumuman',
            text: err.response || err,
            showConfirmButton: true,
          }).then(() => {});
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
