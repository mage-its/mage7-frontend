<template>
  <div class="m-4">
    <h3>Upload Proposal</h3>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        @submit.prevent="handleSubmit(onSubmit)"
        enctype="multipart/form-data"
      >
        <ValidationProvider
          name="Upload Proposal"
          rules="required|ext:pdf|size:5000"
          v-slot="{ validate, errors }"
        >
          <div class="form-group">
            <label
              >Klik dibawah untuk memilih file (Format File Harus Pdf)</label
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
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      proposal: null,
      competition: '',
      service: '',
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.competition = user.user.registeredComp;
    if (this.competition === 'gamedev') {
      this.service = 'uploadProposal/uploadProposalGameDev';
    }
    if (this.competition === 'iotdev') {
      this.service = 'uploadProposal/uploadProposalIotDev';
    }
    if (this.competition === 'appdev') {
      this.service = 'uploadProposal/uploadProposalAppDev';
    }
  },
  methods: {
    onUpload(e) {
      this.proposal = e.target.files[0];
    },
    onSubmit() {
      const document = new FormData();
      document.append('proposal', this.proposal);
      const formData = {
        data: document,
      };
      this.$store.dispatch(this.service, formData).then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Upload Proposal berhasil',
            showConfirmButton: true,
          }).then(() => {
            this.$router.push('/dashboard');
          });
        },
        (error) => {
          if (error.response.data.code === 401) {
            this.refreshToken();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Upload Proposal gagal',
              text: error.response.data.message,
              showConfirmButton: true,
            }).then(() => {});
          }
        },
      );
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
          this.onSubmit();
        });
    },
  },
};
</script>
