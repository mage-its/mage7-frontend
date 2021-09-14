<template>
  <b-container>
    <div v-if="loadingSubmit">
      <LoadingSubmit />
    </div>
    <div class="bg-light text-dark mb-3 rounded shadow-sm header">
      <h3 class="text-left d-inline float-left">
        <i class="far fa-newspaper"></i>
        Upload Proposal
      </h3>
    </div>
    <hr />
    <div class="mb-5">
      <b-card no-body class="text-center">
        <b-tabs v-model="tabIndex" card>
          <b-tab title="App Dev" :title-link-class="linkClass(0)">
            <b-card-title>Contoh Template Proposal App Dev</b-card-title>
            <b-card-text>
              Klik tombol download dibawah ini untuk mendownload contoh template
              <br />
              Proposal App Dev
            </b-card-text>
            <a
              target="_blank"
              href="/docx/Template_Proposal_AppDev.docx"
              class="btn d-inline"
            >
              <button class="button" style="vertical-align: middle">
                <span>Download</span>
              </button>
            </a>
          </b-tab>
          <b-tab title="Game Dev" :title-link-class="linkClass(1)">
            <b-card-title>Contoh Template Proposal Game Dev</b-card-title>
            <b-card-text>
              Klik tombol download dibawah ini untuk mendownload contoh template
              <br />
              Proposal Game Dev
            </b-card-text>
            <a
              target="_blank"
              href="/docx/Template_Proposal_Game_Development.docx"
              class="btn d-inline"
            >
              <button class="button" style="vertical-align: middle">
                <span>Download</span>
              </button>
            </a>
          </b-tab>
          <b-tab title="IoT Dev" :title-link-class="linkClass(2)">
            <b-card-title>Contoh Template Proposal IoT Dev</b-card-title>
            <b-card-text>
              Klik tombol download dibawah ini untuk mendownload contoh template
              <br />
              Proposal IoT Dev
            </b-card-text>
            <a
              target="_blank"
              href="/docx/Template_Proposal_IoT.docx"
              class="btn d-inline"
            >
              <button class="button" style="vertical-align: middle">
                <span>Download</span>
              </button>
            </a>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <b-card v-if="uploadedProposal" class="mb-5">
      <h5 class="text-bold">Proposal</h5>
      <a
        target="_blank"
        :href="pathProposal"
        class="btn d-inline"
      >
        <button class="button" style="vertical-align: middle">
          <span>Lihat file</span>
        </button>
      </a>
    </b-card>
    <ValidationObserver v-slot="{ handleSubmit }" v-if="!uploadedProposal">
      <b-card>
        <form
          @submit.prevent="handleSubmit(onSubmit)"
          enctype="multipart/form-data"
        >
          <ValidationProvider
            name="Upload Proposal"
            rules="required|ext:pdf|size:5120"
            v-slot="{ validate, errors }"
          >
            <div class="form-group">
              <h5 class="text-bold">Form Upload Proposal</h5>
              <label
                >Klik dibawah untuk memilih file (Format File Harus Pdf & Ukuran
                File Max. 5 MB)</label
              >
              <input
                type="file"
                accept="application/pdf"
                class="form-control"
                @change="
                  {
                    onUpload($event) || validate($event);
                  }
                "
                id="identitasKetua"
              />
              <span class="error-msg">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <input type="submit" class="btn btn-red" tect="Submit" />
        </form>
      </b-card>
    </ValidationObserver>
    <ValidationObserver v-slot="{ handleSubmit }" v-else>
      <b-card>
        <form
          @submit.prevent="handleSubmit(onSubmit)"
          enctype="multipart/form-data"
        >
          <ValidationProvider
            name="Upload Proposal"
            rules="required|ext:pdf|size:5120"
            v-slot="{ validate, errors }"
          >
            <div class="form-group">
              <h5 class="text-bold">Form Update Proposal</h5>
              <h5>Anda sudah pernah upload proposal, silahkan upload ulang apabila ingin mengganti.</h5>
              <label
                >Klik dibawah untuk memilih file (Format File Harus Pdf & Ukuran
                File Max. 5 MB)</label
              >
              <input
                type="file"
                accept="application/pdf"
                class="form-control"
                @change="
                  {
                    onUpload($event) || validate($event);
                  }
                "
                id="identitasKetua"
              />
              <span class="error-msg">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <input type="submit" class="btn btn-red" tect="Submit" />
        </form>
      </b-card>
    </ValidationObserver>
  </b-container>
</template>
<script>
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";
import Swal from "sweetalert2";
import axios from "axios";
import LoadingSubmit from "@/components/LoadingSubmit";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    LoadingSubmit,
  },
  data() {
    return {
      loadingSubmit: false,
      tabIndex: 0,
      proposal: null,
      competition: "",
      service: "",
      uploadedProposal: false,
      pathProposal: "",
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.competition = user.user.registeredComp;
    if (this.competition === "gamedev") {
      this.service = "uploadProposal/uploadProposalGameDev";
    }
    if (this.competition === "iotdev") {
      this.service = "uploadProposal/uploadProposalIotDev";
    }
    if (this.competition === "appdev") {
      this.service = "uploadProposal/uploadProposalAppDev";
    }
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(`${this.endpointAPI}api/v1/users/profile`, {
          headers: {
            "Content-Type": undefined,
            Authorization: `Bearer ${user.tokens.access.token}`,
          },
        })
        .then((response) => {
          this.uploadedProposal = !!response.data.compe.pathProposal;
          this.pathProposal = this.endpointAPI + response.data.compe.pathProposal;
        });
    },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["bg-danger", "text-white"];
      } else {
        return ["bg-light", "text-danger"];
      }
    },
    onUpload(e) {
      this.proposal = e.target.files[0];
    },
    onSubmit() {
      const document = new FormData();
      document.append("proposal", this.proposal);
      const formData = {
        data: document,
      };
      this.loadingSubmit = true;
      this.$store.dispatch(this.service, formData).then(
        () => {
          this.loadingSubmit = false;
          Swal.fire({
            icon: "success",
            title: "Upload Proposal berhasil",
            showConfirmButton: true,
          }).then(() => {
            this.$router.push("/dashboard");
          });
        },
        (error) => {
          if (error.response.data.code === 401) {
            this.refreshToken();
          } else {
            this.loadingSubmit = false;
            Swal.fire({
              icon: "error",
              title: "Upload Proposal gagal",
              text: error.response.data.message,
              showConfirmButton: true,
            }).then(() => {});
          }
        }
      );
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
          this.onSubmit();
        });
    },
  },
};
</script>
<style scoped>
.button {
  display: inline-block;
  border-radius: 20px;
  background-color: #912809;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
.header {
  min-height: 90px;
  min-width: 100%;
  padding: 30px;
}
</style>
