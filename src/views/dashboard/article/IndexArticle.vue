<template>
  <b-container>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-newspaper"></i>
        Artikel
      </h3>
    </div>
    <hr />
    
      <b-row>
        <b-col lg="12">
          <b-container class="article bg-white p-3">
            <b-row>
              <b-col lg="2">
                <img class="logo" src="@/assets/img/app-hitam.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>App Development</h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.<br />
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
                <img class="logo" src="@/assets/img/app-hitam.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>Game Development</h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.<br /><a
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
                <img class="logo" src="@/assets/img/app-hitam.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>Iot Development</h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
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
                <img class="logo" src="@/assets/img/app-hitam.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>Olimpiade</h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.<br />
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
                <img class="logo" src="@/assets/img/app-hitam.png" />
              </b-col>
              <b-col lg="9">
                <b-container class="description text-left">
                  <h2>Mage Academy</h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.<br />
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
                <img class="logo" src="@/assets/img/app-hitam.png" />
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
  background-color: #3f0d12;
  background-image: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
  color: #fff;
  cursor: pointer;
  margin-top: 40px;
  border-radius: 0;
}
</style>
