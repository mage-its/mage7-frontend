<template>
  <b-container class="bg-white p-5">
    <p class="text-bold">Kategori</p>
    <p>{{ participant.kategori ? participant.kategori : '-' }}</p>
    <hr />
    <p class="text-bold">tahap</p>
    <p>{{ participant.tahap ? participant.tahap : '-'}}</p>
    <hr />
    <p class="text-bold">Nama Tim</p>
    <p>{{ participant.namaTim ? participant.namaTim : '-'}}</p>
    <hr />
    <p class="text-bold">Nama Ketua</p>
    <p>{{ participant.namaKetua ? participant.namaKetua : '-' }}</p>
    <hr />
	<p class="text-bold">Identitas Ketua</p>
    <img :src="endpointAPI + participant.pathIdentitasKetua ? endpointAPI + participant.pathIdentitasKetua : '-'" alt=""/>
	<br>
	<a target="blank" :href="endpointAPI + participant.pathIdentitasKetua">{{ participant.pathIdentitasKetua ? 'Lihat File' : '-' }}</a>
    <hr />
    <p class="text-bold">namaAnggota1</p>
    <p>{{ participant.namaAnggota1 ? participant.namaAnggota1 : '-' }}</p>
    <hr />
	<p class="text-bold">Identitas Anggota 1</p>
    <img :src="endpointAPI + participant.pathIdentitasAnggota1 ? endpointAPI + participant.pathIdentitasAnggota1 : '-'" alt=""/>
	<br>
	<a target="blank" :href="endpointAPI + participant.pathIdentitasAnggota1">{{ participant.pathIdentitasAnggota1 ? 'Lihat File' : '-' }}</a>
    <hr />
    <p class="text-bold">namaAnggota2</p>
    <p>{{ participant.namaAnggota2 ? participant.namaAnggota2 : '-' }}</p>
    <hr />
	<p class="text-bold">Identitas Anggota 2</p>
    <img :src="endpointAPI + participant.pathIdentitasAnggota2 ? endpointAPI + participant.pathIdentitasAnggota2 : '-'" alt=""/>
	<br>
	<a target="blank" :href="endpointAPI + participant.pathIdentitasAnggota2">{{ participant.pathIdentitasAnggota2 ? 'Lihat File' : '-' }}</a>
    <hr />
    <p class="text-bold">Hp Ketua</p>
    <p>{{ participant.hpKetua ? participant.hpKetua : '-' }}</p>
    <hr />
    <p class="text-bold">WhatsApp Ketua</p>
    <p>{{ participant.waKetua ? participant.waKetua : '-' }}</p>
    <hr />
    <p class="text-bold">lineKetua</p>
    <p>{{ participant.lineKetua ? participant.lineKetua : '-' }}</p>
    <hr />
    <p class="text-bold">asalInstansi</p>
    <p>{{ participant.asalInstansi ? participant.asalInstansi : '-' }}</p>
    <hr />
    <p class="text-bold">alamatInstansi</p>
    <p>{{ participant.alamatInstansi ? participant.alamatInstansi : '-' }}</p>
    <hr />
    <p class="text-bold">asalKota</p>
    <p>{{ participant.asalKota ? participant.asalKota : '-' }}</p>
    <hr />
    <p class="text-bold">asalInfo</p>
    <p>{{ participant.asalInfo ? participant.asalInfo : '-' }}</p>
    <hr />
    <p class="text-bold">Nama Pembimbing</p>
    <p>{{ participant.namaPembimbing ? participant.namaPembimbing : '-' }}</p>
    <hr />
    <p class="text-bold">Hp Pembimbing</p>
    <p>{{ participant.hpPembimbing ? participant.hpPembimbing : '-' }}</p>
    <hr />
    <p class="text-bold">WhatsApp Pembimbing</p>
    <p>{{ participant.waPembimbing ? participant.waPembimbing : '-' }}</p>
    <hr />
	<p class="text-bold">Bukti Upload Twibbon</p>
    <img :src="endpointAPI + participant.pathBuktiUploadTwibbon ? endpointAPI + participant.pathBuktiUploadTwibbon : '-'" alt=""/>
	<br>
	<a target="blank" :href="endpointAPI + participant.pathBuktiUploadTwibbon">{{ participant.pathBuktiUploadTwibbon ? 'Lihat File' : '-' }}</a>
    <hr />
	<p class="text-bold">Bukti Follow Mage</p>
    <img :src="endpointAPI + participant.pathBuktiFollowMage ? endpointAPI + participant.pathBuktiFollowMage : '-'" alt=""/>
	<br>
	<a target="blank" :href="endpointAPI + participant.pathBuktiFollowMage">{{ participant.pathBuktiFollowMage ? 'Lihat File' : '-' }}</a>
    <hr />
	<p class="text-bold">Bukti Repost Story</p>
    <img :src="endpointAPI + participant.pathBuktiRepostStory ? endpointAPI + participant.pathBuktiRepostStory : '-'" alt=""/>
	<br>
	<a target="blank" :href="endpointAPI + participant.pathBuktiRepostStory">{{ participant.pathBuktiRepostStory ? 'Lihat File' : '-' }}</a>
    <hr />
    <p class="text-bold">noPeserta</p>
    <p>{{ participant.noPeserta ? participant.noPeserta : '-' }}</p>
	<hr>
    <p class="text-bold">price</p>
    <p>{{ participant.price ? participant.price : '-' }}</p>
	<hr>
    <p class="text-bold">ID</p>
    <p>{{ participant.id ? participant.id : '-' }}</p>
    <hr />
    <p class="text-bold">sudahUploadBuktiBayar</p>
    <p>{{ participant.sudahUploadBuktiBayar ? participant.sudahUploadBuktiBayar : '-' }}</p>
    <hr />
    <p class="text-bold">namaBayar</p>
    <p>{{ participant.namaBayar ? participant.namaBayar : '-' }}</p>
    <hr />
	<p class="text-bold">Bukti Pembayaran</p>
    <img :src="endpointAPI + participant.pathBuktiBayar ? endpointAPI + participant.pathBuktiBayar : '-'" alt=""/>
	<br>
	<a target="blank" :href="endpointAPI + participant.pathBuktiBayar">{{ participant.pathBuktiBayar ? 'Lihat File' : '-'}}</a>
    <hr />
	<p class="text-bold">statusBayar</p>
    <p>{{ participant.statusBayar ? participant.statusBayar : '-' }}</p>
    <hr />
	<p class="text-bold">pathProposal</p>
    <p>{{ participant.pathProposal ? participant.pathProposal : '-' }}</p>
    <hr />
	<p class="text-bold">linkKaryaDanVideo</p>
    <p>{{ participant.linkKaryaDanVideo ? participant.linkKaryaDanVideo : '-' }}</p>
    <hr />
  </b-container>
</template>
<script>
import axios from "axios";
import header from "../../../services/header";

export default {
  name: "DetailUserCompetition",
  data() {
    return {
      participant: null,
    };
  },
  methods: {
    async getParticipantById(id) {
      await axios
        .get(
          `${this.endpointAPI}api/v1/${this.$route.params.competition}/${id}`,
          header()
        )
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
img {
  width: 400px;
  height: auto;
}
</style>
