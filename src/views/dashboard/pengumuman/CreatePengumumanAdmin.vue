<template>
  <div>
    <b-container class="bg-white p-5">
      <div class="form-group">
        <label for="kodepromo">Judul Pengumuman</label>
        <b-form-input
          id="kodepromo"
          type="text"
          class="form-control"
          v-model="title"
          placeholder="Masukkan Judul Pengumuman"
          required
        ></b-form-input>
        <label class="mt-3" for="category">Kategori</label>
        <b-form-radio-group
          v-model="type"
          :options="options"
          class="mb-3"
          value-field="item"
          text-field="name"
          required
        ></b-form-radio-group>
        <label class="mt-3" for="namatim" v-show="type === 'namatim'">Nama Tim</label>
        <b-form-input
          id="kodepromo"
          type="text"
          class="form-control"
          v-model="namaTim"
          placeholder="Masukkan Nama Tim"
          required
          v-show="type === 'namatim'"
        ></b-form-input>
        <label class="mt-3" for="discountPrice">Konten Pengumuman</label>
        <b-form-textarea
          id="discountPrice"
          rows="8"
          class="form-control"
          v-model="content"
          placeholder="Isikan konten atau isi dari pengumuman"
        ></b-form-textarea>
        <b-button @click="createAnnouncement" class="mt-3" variant="info"
          >Buat pengumuman</b-button
        >
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
      title: '',
      options: [
        { item: 'all', name: 'All' },
        { item: 'gamedev', name: 'Game Dev' },
        { item: 'appdev', name: 'App Dev' },
        { item: 'iotdev', name: 'Iot Dev' },
        { item: 'devcom', name: 'DevCom' },
        { item: 'namatim', name: 'Nama Tim' },
      ],
      content: '',
      type: '',
      message: '',
      namaTim: '',
    };
  },
  methods: {
    createAnnouncement() {
      axios
        .post(
          `${this.endpointAPI}api/v1/announcement`,
          {
            title: this.title,
            type: this.type,
            content: this.content,
            ...(this.type === 'namatim' && { namaTim: this.namaTim }),
          },
          header(),
        )
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Pengumuman berhasil ditambah',
            showConfirmButton: true,
          }).then(() => {});
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
            Swal.fire({
              icon: 'error',
              title: 'gagal menambahkan pengumuman',
              text: this.message,
              showConfirmButton: true,
            }).then(() => {});
          }
        });
    },
	refreshToken() {
      const user = JSON.parse(localStorage.getItem('user'));
      axios.post(`${this.endpointAPI}api/v1/auth/refresh-tokens`, {
        refreshToken: user.tokens.refresh.token,
      }).then((response) => {
        user.tokens = response.data;
        localStorage.setItem('user', JSON.stringify(user));
      }).then(() => {
        this.createAnnouncement();
      });
    },
  },
};
</script>
