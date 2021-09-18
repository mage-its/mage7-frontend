<template>
  <div class="mb-5">
    <b-card>
      <h5>Detail Peserta</h5>
      <font size="4" face="Courier New">
        <div v-if="loading" class="text-center">
          <b-spinner class="align-middle"></b-spinner>
          <p>loading...</p>
        </div>
        <table style="width: 100%" v-else>
          <tr>
            <th>User</th>
            <td>
              <router-link
                :to="{ name: 'DetailParticipant', params: { id: participant.user } }"
              >
              <b-button><i class="fa fa-search"></i></b-button>
            </router-link>
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Kategori</th>
            <td>{{ participant.kategori ? participant.kategori : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Tahap</th>
            <td>{{ participant.tahap ? participant.tahap : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Nama Tim</th>
            <td>{{ participant.namaTim ? participant.namaTim : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Nama Ketua</th>
            <td>{{ participant.namaKetua ? participant.namaKetua : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Identitas Ketua</th>
            <td>
              <img
                :src="
                  endpointAPI + participant.pathIdentitasKetua
                    ? endpointAPI + participant.pathIdentitasKetua
                    : '-'
                "
                alt=""
              />
            </td>
            <td>
              <b-button variant="success">
                <a
                  target="_blank"
                  :href="endpointAPI + participant.pathIdentitasKetua"
                  >{{ participant.pathIdentitasKetua ? "Lihat File" : "-" }}</a
                >
              </b-button>
            </td>
          </tr>
          <tr>
            <th>Nama Anggota 1</th>
            <td>
              {{ participant.namaAnggota1 ? participant.namaAnggota1 : "-" }}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Identitas Anggota 1</th>
            <td>
              <div v-if="participant.pathIdentitasAnggota1">
                <img
                  :src="endpointAPI + participant.pathIdentitasAnggota1"
                  alt=""
                />
              </div>
              <div v-else>-</div>
            </td>
            <td>
              <div v-if="participant.pathIdentitasAnggota1">
                <b-button variant="success">
                  <a
                    target="_blank"
                    :href="endpointAPI + participant.pathIdentitasAnggota1"
                    >Lihat File</a
                  >
                </b-button>
              </div>
              <div v-else></div>
            </td>
          </tr>
          <tr>
            <th>Nama Anggota 2</th>
            <td>
              {{ participant.namaAnggota2 ? participant.namaAnggota2 : "-" }}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Identitas Anggota 2</th>
            <td>
              <div v-if="participant.pathIdentitasAnggota2">
                <img
                  :src="
                    endpointAPI + participant.pathIdentitasAnggota2
                      ? endpointAPI + participant.pathIdentitasAnggota2
                      : '-'
                  "
                  alt=""
                />
              </div>
              <div v-else>-</div>
            </td>
            <td>
              <div v-if="participant.pathIdentitasAnggota2">
                <b-button variant="success">
                  <a
                    target="_blank"
                    :href="endpointAPI + participant.pathIdentitasAnggota2"
                    >{{
                      participant.pathIdentitasAnggota2 ? "Lihat File" : "-"
                    }}</a
                  >
                </b-button>
              </div>
              <div v-else></div>
            </td>
          </tr>
          <tr>
            <th>Hp Ketua</th>
            <td>{{ participant.hpKetua ? participant.hpKetua : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>WhatsApp Ketua</th>
            <td>{{ participant.waKetua ? participant.waKetua : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Line Ketua</th>
            <td>{{ participant.lineKetua ? participant.lineKetua : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Asal Instansi</th>
            <td>
              {{ participant.asalInstansi ? participant.asalInstansi : "-" }}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Alamat Instansi</th>
            <td>
              {{
                participant.alamatInstansi ? participant.alamatInstansi : "-"
              }}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Asal Kota</th>
            <td>{{ participant.asalKota ? participant.asalKota : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Asal Info</th>
            <td>{{ participant.asalInfo ? participant.asalInfo : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Nama Pembimbing</th>
            <td>
              {{
                participant.namaPembimbing ? participant.namaPembimbing : "-"
              }}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Hp Pembimbing</th>
            <td>
              {{ participant.hpPembimbing ? participant.hpPembimbing : "-" }}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>WhatsApp Pembimbing</th>
            <td>
              {{ participant.waPembimbing ? participant.waPembimbing : "-" }}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Bukti Upload Twibbon</th>
            <td>
              <img
                :src="
                  endpointAPI + participant.pathBuktiUploadTwibbon
                    ? endpointAPI + participant.pathBuktiUploadTwibbon
                    : '-'
                "
                alt=""
              />
            </td>
            <td>
              <b-button variant="success">
                <a
                  target="_blank"
                  :href="endpointAPI + participant.pathBuktiUploadTwibbon"
                  >{{
                    participant.pathBuktiUploadTwibbon ? "Lihat File" : "-"
                  }}</a
                >
              </b-button>
            </td>
          </tr>
          <tr>
            <th>Bukti Follow Mage</th>
            <td>
              <img
                :src="
                  endpointAPI + participant.pathBuktiFollowMage
                    ? endpointAPI + participant.pathBuktiFollowMage
                    : '-'
                "
                alt=""
              />
            </td>
            <td>
              <b-button variant="success">
                <a
                  target="_blank"
                  :href="endpointAPI + participant.pathBuktiFollowMage"
                  >{{ participant.pathBuktiFollowMage ? "Lihat File" : "-" }}</a
                >
              </b-button>
            </td>
          </tr>
          <tr>
            <th>Bukti Repost Story</th>
            <td>
              <img
                :src="
                  endpointAPI + participant.pathBuktiRepostStory
                    ? endpointAPI + participant.pathBuktiRepostStory
                    : '-'
                "
                alt=""
              />
            </td>
            <td>
              <b-button variant="success">
                <a
                  target="_blank"
                  :href="endpointAPI + participant.pathBuktiRepostStory"
                  >{{
                    participant.pathBuktiRepostStory ? "Lihat File" : "-"
                  }}</a
                >
              </b-button>
            </td>
          </tr>
          <tr>
            <th>No Peserta</th>
            <td>{{ participant.noPeserta ? participant.noPeserta : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Harga</th>
            <td>{{ participant.price ? participant.price : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>ID</th>
            <td>{{ participant.id ? participant.id : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Sudah Upload Bukti Bayar</th>
            <td>
              {{
                participant.sudahUploadBuktiBayar == true ? "Sudah" : "Belum"
              }}
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Nama Bayar</th>
            <td>{{ participant.namaBayar ? participant.namaBayar : "-" }}</td>
            <td></td>
          </tr>
          <tr>
            <th>Bukti Pembayaran</th>
            <td>
              <div v-if="participant.pathBuktiBayar">
                <img
                  :src="
                    endpointAPI + participant.pathBuktiBayar
                      ? endpointAPI + participant.pathBuktiBayar
                      : '-'
                  "
                  alt=""
                />
              </div>
              <div v-else>-</div>
            </td>
            <td>
              <div v-if="participant.pathBuktiBayar">
                <b-button variant="success">
                  <a
                    target="_blank"
                    :href="endpointAPI + participant.pathBuktiBayar"
                    >{{ participant.pathBuktiBayar ? "Lihat File" : "-" }}</a
                  >
                </b-button>
              </div>
              <div v-else></div>
            </td>
          </tr>
          <tr>
            <th>Status Bayar</th>
            <td>
              {{
                participant.isVerified ? "Terverifikasi" : "Belum Terverifikasi"
              }}
            </td>
            <td>
              <b-button @click="verif()" :variant="[participant.isVerified ? 'danger' : 'success']">
              {{
                participant.isVerified ? "Batal verifikasi" : "Verifikasi"
              }}
              </b-button>
            </td>
          </tr>
          <tr>
            <th>Proposal</th>
            <td>
              <div v-if="participant.pathProposal">
                <b-button variant="success">
                  <a
                    target="_blank"
                    :href="endpointAPI + participant.pathProposal"
                    >{{ participant.pathProposal ? "Lihat File" : "-" }}</a
                  >
                </b-button>
              </div>
              <div v-else>-</div>
            </td>
            <td></td>
          </tr>
          <tr v-if="participant.tahap">
            <th>Tahap</th>
            <td>
              {{
                participant.tahap || "-"
              }}
            </td>
            <td>
              <b-button @click="toggleTahap('inc')" variant="success">
              Naik tahap
              </b-button>
              <b-button @click="toggleTahap('dec')" variant="danger">
              Turun tahap
              </b-button>
            </td>
          </tr>
          <tr>
            <th>Link Karya Dan Video</th>
            <td>
              {{
                participant.linkKaryaDanVideo
                  ? participant.linkKaryaDanVideo
                  : "-"
              }}
            </td>
            <td></td>
          </tr>
        </table>
      </font>
    </b-card>
  </div>
</template>
<script>
import axios from "axios";
import header from "../../../services/header";
import Swal from "sweetalert2";
import LoadingSubmit from "@/components/LoadingSubmit";

export default {
  name: "DetailUserCompetition",
  components: {
    LoadingSubmit,
  },
  data() {
    return {
      loading: true,
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
          this.loading = false;
        });
    },
    toggleVerif() {
      this.loading = true;
      axios
        .post(
          `${this.endpointAPI}api/v1/${this.$route.params.competition}/toggle-verif/${this.$route.params.id}`,
          {},
          header()
        )
        .then((response) => {
          this.getParticipantById(this.$route.params.id);
          this.loading = false;
          Swal.fire({
            icon: "success",
            title: "verifikasi sukses",
            showDenyButton: false,
          });
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.data.code === 401) {
            this.refreshToken();
          } else {
            Swal.fire({
              icon: "error",
              title: "gagal",
              text: error.response.data.message,
              showConfirmButton: true,
            }).then(() => {});
          }
        });
    },
    verif() {
      Swal.fire({
        icon: "warning",
        title: "Yakin Toggle Verifikasi Pembayaran ?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.toggleVerif();
        }
      });
    },
    toggleTahap(method) {
      Swal.fire({
        icon: "warning",
        title: `Yakin ${method === 'dec' ? 'turunkan' :
        'naikkan'} tahap peserta ?`,
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.tahap(method);
        }
      });
    },
    tahap(method) {
      this.loading = true;
      axios
        .post(
          `${this.endpointAPI}api/v1/${this.$route.params.competition}/${method}-tahap/${this.$route.params.id}`,
          {},
          header()
        )
        .then((response) => {
          this.getParticipantById(this.$route.params.id);
          this.loading = false;
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            showDenyButton: false,
          });
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.data.code === 401) {
            this.refreshToken();
          } else {
            Swal.fire({
              icon: "error",
              title: "gagal",
              text: error.response.data.message,
              showConfirmButton: true,
            }).then(() => {});
          }
        });
    },
    refreshToken() {
      const user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(`${this.endpointAPI}api/v1/auth/refresh-tokens`, {
          refreshToken: user.tokens.refresh.token,
        })
        .then((response) => {
          user.tokens = response.data;
          localStorage.setItem("user", JSON.stringify(user));
        })
        .then(() => {
          this.toggleVerif();
        })
        .catch(() => {
          this.$router.push("/");
        });
    },
  },
  async mounted() {
    await this.getParticipantById(this.$route.params.id);
  },
};
</script>
<style scoped>
table,
th,
td {
  padding: 15px;
  border-bottom: 0.5px solid black;
  border-collapse: collapse;
}
img {
  width: 400px;
  height: auto;
}
</style>
