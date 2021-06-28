<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-newspaper"></i>
        Artikel
      </h3>
    </div>
    <hr />
    <div v-if="user.verification == 1">
      <b-row>
        <b-col lg="12">
          <b-container class="article bg-white p-3">
            <b-row>
              <b-col lg="2">
                <img class="logo" src="@/assets/logo-anava.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>Anava</h2>
                  Ajang Pengenalan Aktivitas Statistika (ANAVA) merupakan
                  program tahunan Himpunan Mahasiswa Statistika UGM, dengan
                  tujuan memperkenalkan ilmu statistika dan prospeknya di dunia
                  kerja.<br />
                  <a href="../../osm" target="blank" class="btn btn-purple"
                    >Selengkapnya</a
                  >
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col lg="12">
          <b-container class="article bg-white p-3">
            <b-row>
              <b-col lg="2">
                <img class="logo" src="@/assets/osm.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>OSM</h2>
                  Kompetisi ini dapat lebih mengasah kemampuannya di bidang
                  matematika dan statistika, melatih analisis data dan
                  mempresentasikannya, serta berkompetisi secara sehat dalam
                  tingkat nasional.<br /><a
                    href="../../osm"
                    target="blank"
                    class="btn btn-purple"
                    >Selengkapnya</a
                  >
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col lg="12">
          <b-container class="article bg-white p-3">
            <b-row>
              <b-col lg="2">
                <img class="logo" src="@/assets/the-one.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>The One</h2>
                  The One bertujuan untuk mengasah pemahaman peserta terhadap
                  materi SMA, strategi menjawab soal dalam waktu yang singkat,
                  dan menumbuhkan karakter kompetitif dalam tingkat nasional.
                  <br />
                  <a href="../../rank1" target="blank" class="btn btn-purple"
                    >Selengkapnya</a
                  >
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col lg="12">
          <b-container class="article bg-white p-3">
            <b-row>
              <b-col lg="2">
                <img class="logo" src="@/assets/started.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>Started</h2>
                  Lomba poster “STARTED” merupakan lomba yang bertujuan melatih
                  kreativitas melalui kolaborasi antara ilmu
                  matematika-statistika dan visualisasi (kemampuan desain).<br />
                  <a href="../../poster" target="blank" class="btn btn-purple"
                    >Selengkapnya</a
                  >
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col lg="12">
          <b-container class="article bg-white p-3">
            <b-row>
              <b-col lg="2">
                <img class="logo" src="@/assets/sigma.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>Sigma</h2>
                  Sosialisasi Statistika “SIGMA” merupakan acara pengenalan
                  Statistika dan cabang ilmunya yang utamanya ditujukan kepada
                  siswa-siswi SMA/Sederajat.<br />
                  <a href="../../sigma" target="blank" class="btn btn-purple"
                    >Selengkapnya</a
                  >
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col lg="12">
          <b-container class="article bg-white p-3">
            <b-row>
              <b-col lg="2">
                <img class="logo" src="@/assets/open-house.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>Open House</h2>
                  Open house Statistics merupakan salah satu ajang pengenalan
                  Statistika untuk mengenalkan kegiatan akademis, non-akademis
                  serta lingkungan kampus statistika FMIPA UGM kepada
                  siswa-siswi SMA/Sederajat. <br />
                  <a
                    href="../../openhouse"
                    target="blank"
                    class="btn btn-purple"
                    >Selengkapnya</a
                  >
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </div>
    <div v-if="user.verification == 0">
      <div class="bg-white p-3 text-center text-dark rounded-lg shadow">
        <p>
          <i style="font-size:30px" class="far fa-envelope"></i>
          <br />
          Anda Belum Melakukan Verifikasi Email, Harap Lakukan Verifikasi Email
          Anda Terlebih Dahulu!
        </p>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
};
</script>
<style scoped>
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
.article {
  margin-bottom: 20px;
  border: 1px solid rgb(220,220,220);
}
.article img {
  height: 150px;
  width: 150px;
  margin-left: 20px;
  margin-top: 20px;
}
.article .description {
  padding-left: 60px;
  padding-top: 10px;
}
.btn-purple {
  border: 0;
  outline: 0;
  width: 30%;
  padding: 8px;
  background-color: #58427c;
  color: #fff;
  cursor: pointer;
  margin-top: 40px;
  border-radius: 0;
}
</style>
