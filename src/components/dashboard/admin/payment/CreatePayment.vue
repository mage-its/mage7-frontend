<template>
  <div class="pb-3">
    <div v-if="step == 3">
      <div id="mail" class="bg-white">
        <body
          width="100%"
          style="margin: 0; mso-line-height-rule: exactly;"
          id="payment-success"
        >
          <center style="width: 100%; background: #F7F7F7; text-align: left;">
            <table
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              align="center"
              width="600"
              style="margin: auto;"
              class="email-container"
            >
              <tr>
                <td
                  style="padding: 20px 0; text-align: center; background: #ffffff;"
                >
                  <img
                    src="http://anavaugm.com/logo-anava.png"
                    width="100"
                    height="100"
                    alt="alt_text"
                    border="0"
                    style="heightimg: auto; background: #ffffff; font-family: sans-serif; font-size: 14px; line-height: 140%; color: #555555; height: 100px; width: 100px;"
                  />
                </td>
              </tr>
            </table>

            <table
              role="presentation"
              cellspacing="0"
              cellpadding="0"
              border="0"
              align="center"
              width="600"
              style="margin: auto;"
              class="email-container"
            >
              <tr>
                <td bgcolor="#ffffff" align="center"></td>
              </tr>
              <tr>
                <td
                  bgcolor="#ffffff"
                  style="padding: 40px 20px 20px; text-align: center;"
                >
                  <h1
                    style="margin: 0; font-family: sans-serif; font-size: 20px; line-height: 125%; color: #333333; font-weight: bold;"
                  >
                    Pembayaran Biaya Pendaftaran Sukses
                  </h1>
                </td>
              </tr>
              <tr>
                <td
                  bgcolor="#ffffff"
                  style="padding: 0 20px 0px; font-family: sans-serif; font-size: 14px; line-height: 140%; color: #555555; text-align: left;"
                >
                  <p style="margin: 0;">
                    Kepada <b>Yth. {{ this.selectedParticipant.username }}</b
                    ><br />Terimakasih kami telah menerima pembayaran Anda pada
                    <b>{{ getDateTime("dateDay", new Date()) }}</b>
                  </p>
                  <br />

                  <p>
                    Bersama email ini, kami informasikan bahwa Anda akan
                    <b
                      >langsung terdaftar di satu event ANAVA yang anda
                      bayarkan</b
                    >
                  </p>

                  <p>Berikut informasi lengkap mengenai pembayaran Anda :</p>
                  <p><b>Jumlah Tagihan</b> : Rp {{ totalBill }}<br /></p>
                </td>
              </tr>

              <tr>
                <td
                  bgcolor="#ffffff"
                  style="padding: 20px 20px 0px; font-family: sans-serif; font-size: 14px; line-height: 140%; color: #555555;"
                >
                  <table
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    align="center"
                    style="margin: auto"
                  >
                    <tr>
                      <td
                        style="border-radius: 0px; background: rgb(88, 66, 124,1); text-align: left; padding: 0px 20px; color: #ffffff;"
                        colspan="3"
                      >
                        <p>Rincian Pembayaran</p>
                      </td>
                    </tr>
                    <tr
                      style="font-size: 12px; border-bottom: 1px solid #eaeaea;"
                    >
                      <td
                        style="border-radius: 0px; background: #f7f7f7; text-align: left; padding: 0px 20px;"
                      >
                        <p><b>Nama Event</b></p>
                      </td>
                      <td
                        style="border-radius: 0px; background: #f7f7f7; text-align: right; padding: 0px 20px;"
                      >
                        <p><b></b></p>
                      </td>
                      <td
                        style="border-radius: 0px; background: #f7f7f7; text-align: right; padding: 0px 20px;"
                      >
                        <p><b>Harga</b></p>
                      </td>
                    </tr>
                    <tr
                      style="font-size: 12px; border-bottom: 1px solid #eaeaea;"
                      v-for="event in selectedEvent"
                      :key="event._id"
                    >
                      <td
                        style="border-radius: 0px; background: #ffffff; text-align: left; padding: 0px 20px;"
                      >
                        <p>Registrasi {{ event.name }}</p>
                      </td>
                      <td
                        style="border-radius: 0px; background: #ffffff; text-align: right; padding: 0px 20px;"
                      >
                        <p></p>
                      </td>
                      <td
                        style="border-radius: 0px; background: #ffffff; text-align: right; padding: 0px 20px;"
                      >
                        <p>Rp {{ event.price }}</p>
                      </td>
                    </tr>
                    <tr style="font-size: 12px;">
                      <td
                        style="border-radius: 0px; background: #ffffff; text-align: left; padding: 0px 20px;"
                        colspan="2"
                      >
                        <p><b>TOTAL PEMBAYARAN</b></p>
                      </td>
                      <td
                        style="border-radius: 0px; background: rgba(116, 108, 192, 1); text-align: right; padding: 0px 20px; color: #ffffff;"
                      >
                        <p>
                          <b>Rp {{ totalBill }}</b>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff">
                  <table
                    role="presentation"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    width="100%"
                  >
                    <tr>
                      <td
                        style="padding: 20px 20px 40px; font-family: sans-serif; font-size: 14px; line-height: 50%; color: #555555; text-align: left;"
                      >
                        <p>Hormat kami,</p>
                        <p>Anava</p>
                        <p>
                          <a href="http://www.anavaugm.com/"
                            >www.anavaugm.com</a
                          >
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </center>
        </body>
      </div>
      <button class="btn btn-primary mt-3 pl-3 pr-3" @click="createPayment()">
        <i class="fas fa-paper-plane"></i> Kirim
      </button>
    </div>
    <div v-if="step == 1">
      <h2 class="text-left">Pilih Peserta</h2>
      <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
        <b-col class="text-left" md="3">
          <p>Peserta</p>
        </b-col>
        <b-col class="text-center" md="2">
          <p>Identitas</p>
        </b-col>
        <b-col class="text-center" md="2">
          <p>Kartu Osis</p>
        </b-col>
        <b-col class="text-center" md="2">
          <p>Pas Foto</p>
        </b-col>
      </b-row>
      <b-row
        class="bg-white p-2 mb-2 shadow-sm rounded"
        no-gutters
        v-for="participant in participants"
        :key="participant._id"
      >
        <b-col md="1">
          <img
            class="profile"
            v-bind:src="'http://anavaugm.com/' + participant.image"
          />
        </b-col>
        <b-col md="2">
          <p class="text-bold">{{ participant.username }}</p>
          <p class="text-secondary">
            {{ participant.firstname + " " + participant.lastname }}
          </p>
        </b-col>
        <b-col class="pt-2" md="2">
          <p
            class="text-success"
            v-if="participant.participant.address.length > 1"
          >
            <i class="fas fa-check"></i>
          </p>
          <p v-else>-</p>
        </b-col>
        <b-col class="pt-2" md="2">
          <div v-if="participant.participant.document">
            <p
              class="text-success"
              v-if="participant.participant.document.osis_card == 1"
            >
              <i class="fas fa-check"></i>
            </p>
            <p v-else>-</p>
          </div>
          <p v-else>-</p>
        </b-col>
        <b-col class="pt-2" md="2">
          <div v-if="participant.participant.document">
            <p
              class="text-success"
              v-if="participant.participant.document.image == 1"
            >
              <i class="fas fa-check"></i>
            </p>
            <p v-else>-</p>
          </div>
          <p v-else>-</p>
        </b-col>
        <b-col md="3">
          <button
            class="btn btn-primary"
            @click="chooseParticipant(participant)"
          >
            <i class="fas fa-check"></i> Pilih
          </button>
        </b-col>
      </b-row>
    </div>
    <div v-if="step == 2">
      <h2 class="text-left">Pilih Event</h2>
      <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
        <b-col class="text-center" md="2">
          <p>Event</p>
        </b-col>
        <b-col class="text-center" md="2">
          <p>Harga</p>
        </b-col>
        <b-col class="text-center" md="3">
          <p>Pembukaan registrasi</p>
        </b-col>
        <b-col class="text-center" md="3">
          <p>Penutupan registrasi</p>
        </b-col>
      </b-row>
      <b-row
        class="bg-white p-2 mb-2 shadow-sm rounded"
        no-gutters
        v-for="(event, index) in events"
        :key="event._id"
      >
        <b-col md="2">
          <p class="text-bold">{{ event.name }}</p>
        </b-col>
        <b-col class="pt-2" md="2">
          <p>{{ "Rp " + event.price }}</p>
          <br />
        </b-col>
        <b-col class="pt-2" md="3">
          <p>
            {{ getDateTime("date", event.registration.opened_at) }}
          </p>
        </b-col>

        <b-col class="pt-2" md="3">
          <p>
            {{ getDateTime("date", event.registration.closed_at) }}
          </p>
        </b-col>
        <b-col md="2">
          <b-form-checkbox @change="selectEvent(index)"> </b-form-checkbox>
        </b-col>
      </b-row>
      <button class="btn btn-primary" @click="chooseEvent()">
        <i class="fas fa-check"></i> Pilih
      </button>
    </div>
  </div>
</template>
<script>
import * as datetime from "./../../../../services/datetime";
import Swal from "sweetalert2";

export default {
  name: "CreatePayment",
  data() {
    return {
      payment: {
        events: [],
        participantId: "",
        adminId: "",
        mail: "",
      },
      selectedEvent: [],
      selectedParticipant: {},
      step: 1,
      totalBill: 0,
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    participants() {
      return this.$store.state.participant.participants;
    },
    events() {
      return this.$store.state.event.events;
    },
  },
  watch: {
    events: function(val) {
      this.selectedEvent = [];
      val.forEach(() => {
        this.selectedEvent.push(false);
      });
    },
  },
  methods: {
    getParticipants() {
      this.$store.dispatch("participant/getAllParticipant");
    },
    getEvents() {
      this.$store.dispatch("event/getAllEvent");
    },
    chooseParticipant(participant) {
      this.selectedParticipant = participant;
      (this.payment.participantId = participant._id),
        (this.payment.adminId = this.user.id),
        (this.step = 2);
    },
    chooseEvent() {
      var choosedEvent = [];
      var index = 0;
      this.selectedEvent.forEach((selected) => {
        if (selected) {
          choosedEvent.push(this.events[index]);
          this.totalBill += this.events[index].price;
        }
        index++;
      });
      this.selectedEvent = choosedEvent;
      this.step = 3;
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
    createPayment() {
      this.payment.mail = document.getElementById("mail").innerHTML;
      this.payment.events = this.selectedEvent;
      this.$store.dispatch("payment/createPayment", this.payment).then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Pembayaran berhasil dibuat",
            showConfirmButton: true,
          }).then(() => {
            this.$router.push("/dashboard/payment/");
          });
        },
        () => {}
      );
    },
    selectEvent(index) {
      this.selectedEvent[index] = !this.selectedEvent[index];
      console.log(this.selectedEvent);
    },
  },
  created() {
    this.getParticipants();
    this.getEvents();
  },
};
</script>
<style scoped>
.profile {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}

/* reset */
a:link {
  color: #0366d6;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: #0366d6;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: #0366d6;
  text-decoration: none;
}

/* selected link */
a:active {
  color: #0366d6;
  text-decoration: none;
}

/* What it does: Remove spaces around the email design added by some email clients. */
/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
html,
body {
  margin: 0 auto !important;
  padding: 0 !important;
  height: 100% !important;
  width: 100% !important;
}

/* What it does: Stops email clients resizing small text. */
* {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

/* What it does: Centers email on Android 4.4 */
div[style*="margin: 16px 0"] {
  margin: 0 !important;
}

/* What it does: Stops Outlook from adding extra spacing to tables. */
table,
td {
  mso-table-lspace: 0pt !important;
  mso-table-rspace: 0pt !important;
}

/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
table {
  border-spacing: 0 !important;
  border-collapse: collapse !important;
  table-layout: fixed !important;
  margin: 0 auto !important;
}
table table table {
  table-layout: auto;
}

/* What it does: Uses a better rendering method when resizing images in IE. */
img {
  -ms-interpolation-mode: bicubic;
}

/* What it does: A work-around for email clients meddling in triggered links. */
*[x-apple-data-detectors],  /* iOS */
        .x-gmail-data-detectors,    /* Gmail */
        .x-gmail-data-detectors *,
        .aBn {
  border-bottom: 0 !important;
  cursor: default !important;
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
}

/* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */
.a6S {
  display: none !important;
  opacity: 0.01 !important;
}
/* If the above doesn't work, add a .g-img class to any image in question. */
img.g-img + div {
  display: none !important;
}

/* What it does: Prevents underlining the button text in Windows 10 */
.button-link {
  text-decoration: none !important;
}

/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
/* Create one of these media queries for each additional viewport size you'd like to fix */

/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
  .email-container {
    min-width: 320px !important;
  }
}
/* iPhone 6, 6S, 7, 8, and X */
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
  .email-container {
    min-width: 375px !important;
  }
}
/* iPhone 6+, 7+, and 8+ */
@media only screen and (min-device-width: 414px) {
  .email-container {
    min-width: 414px !important;
  }
}
/* What it does: Hover styles for buttons */
.button-td,
.button-a {
  transition: all 100ms ease-in;
}
.button-td:hover,
.button-a:hover {
  background: #09b5ff !important;
  border-color: #09b5ff !important;
}

/* Media Queries */
@media screen and (max-width: 600px) {
  .email-container {
    width: 100% !important;
    margin: auto !important;
  }

  /* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */
  .fluid {
    max-width: 100% !important;
    height: auto !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  /* What it does: Forces table cells into full-width rows. */
  .stack-column,
  .stack-column-center {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    direction: ltr !important;
  }
  /* And center justify these ones. */
  .stack-column-center {
    text-align: center !important;
  }

  /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
  .center-on-narrow {
    text-align: center !important;
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
    float: none !important;
  }
  table.center-on-narrow {
    display: inline-block !important;
  }

  /* What it does: Adjust typography on small screens to improve readability */
  .email-container p {
    font-size: 17px !important;
  }
}
</style>
