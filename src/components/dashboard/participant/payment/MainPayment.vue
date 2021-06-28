<template>
  <div class="bg-white p-2">
    <vue-tabs>
      <v-tab title="Daftar pembayaran">
        <div class="container bg-white p-4 text-center mb-3">
          <p v-if="payments.length == 0">
            <i class="fas fa-exclamation-triangle fa-2x"></i>
            <br /><br />
            Anda belum memiliki riwayat pembayaran
            <br />
          </p>
          <div v-else>
            <b-row
              class="bg-white p-3 mb-2 shadow-sm rounded text-bold"
              no-gutters
            >
              <b-col class="text-left" md="3">
                <p>Event</p>
              </b-col>

              <b-col class="text-center" md="2">
                <p>Diterima pada</p>
              </b-col>
            </b-row>
            <b-row
              class="bg-white p-2 mb-2 shadow-sm rounded"
              no-gutters
              v-for="payment in payments"
              :key="payment._id"
            >
              <b-col lg="2" class="p-3 text-left">{{
                payment.event.name
              }}</b-col>
              <b-col lg="5" class="p-3 text-center">{{
                getDateTime("datetime", getTime(payment.created_at))
              }}</b-col>
            </b-row>
          </div>
        </div>
      </v-tab>
      <v-tab title="Pembayaran baru">
        <div
          v-if="step == 0"
          class="container bg-white p-3 text-center rounded-lg "
        >
          <h3>Pilih Event</h3>
          <hr />
          <button
            v-for="(event, index) in events"
            :key="event._id"
            class="btn-white event text-dark p-3 w-100 text-left"
            @click="selectEvent(event._id, index)"
          >
            <b-row v-if="event.name != 'Started' && event.name != 'OSM'">
              <b-col lg="2">
                <img class="logo" v-bind:src="'../../../' + event.logo" />
              </b-col>
              <b-col lg="10">
                <h2>{{ event.name }}</h2>
                <p>{{ "Rp " + event.price }}</p></b-col
              >
            </b-row>
          </button>
        </div>
        <b-row v-if="step == 1">
          <b-col v-if="newEvent" md="12 mt-3">
            <div class="container bg-white p-3 text-left rounded-lg ">
              <b-alert variant="success" show
                ><h3>Berhasil melakukan pendaftaran</h3>
                <p>
                  Silahkan melakukan pembayaran untuk menyelesaikan pendaftaran
                </p></b-alert
              >
            </div>
          </b-col>
          <b-col md="12 mt-3">
            <div class="container bg-white p-3 text-center rounded-lg border">
              <h3>Tata Cara Pembayaran</h3>
              <hr />
              <p class="text-left p-3">
                1. Melakukan pembayaran ke Nomor Rekening di bawah ini <br />
                2. Melakukan konfirmasi ke CP event dengan format <br /><b
                  >Nama Lengkap_Email_Tanggal Transfer_Waktu Transfer_Asal
                  Sekolah</b
                ><br />
                3. Tunggu email bukti pembayaran dari panitia <br />
              </p>
            </div>
          </b-col>
          <b-col md="12 mt-3">
            <div class="container bg-white p-3 text-center rounded-lg border">
              <h3>Rekening Pembayaran</h3>
              <hr />
              <div
                style="border: 1px solid #ddd; border-radius:5px; padding: 10px; padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"
              >
                <b-row>
                  <b-col cols="3"
                    ><img
                      src="https://api.jatimnet.com/jinet/assets/media/filer_public/0e/5b/0e5be345-225a-4252-a5c6-151043f088b9/logo_bank_mandiri.jpg"
                      style="width:200px;height:100px;"
                  /></b-col>
                  <b-col cols="9">
                    <div class="text-left p-3">
                      <b>No. Rekening: </b>1020007964346<br />
                      <b>Atas Nama: </b>Julius Satya Ratnandi<br />
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div
                v-if="events[payment.eventIndex].name == 'Sigma'"
                style="border: 1px solid #ddd; border-radius:5px; padding: 10px; padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"
              >
                <b-row>
                  <b-col cols="3"
                    ><img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/1024px-Logo_ovo_purple.svg.png"
                      style="width:150px;height:60px;margin-top:10px;"
                  /></b-col>
                  <b-col cols="9">
                    <div class="text-left p-3">
                      <b>No. Rekening: </b>1020007964346<br />
                      <b>Atas Nama: </b>Julius Satya Ratnandi<br />
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div
                v-if="events[payment.eventIndex].name == 'Sigma'"
                style="border: 1px solid #ddd; border-radius:5px; padding: 10px; padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"
              >
                <b-row>
                  <b-col cols="3"
                    ><img
                      src="https://1.bp.blogspot.com/-NwSMFZdU8l4/XZxj8FxN6II/AAAAAAAABdM/oTjizwstkRIqQZ7LOZSPMsUG3EYXF3E4wCEwYBhgL/s1600/logo-gopay-vector.png"
                      style="width:150px;height:60px;margin-top:10px;"
                    />
                  </b-col>
                  <b-col cols="9">
                    <div class="text-left p-3">
                      <b>No. Rekening: </b>1020007964346<br />
                      <b>Atas Nama: </b>Julius Satya Ratnandi<br />
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div
                v-if="events[payment.eventIndex].name == 'Sigma'"
                style="border: 1px solid #ddd; border-radius:5px; padding: 10px; padding-left: 20px; padding-right: 20px; margin-bottom: 10px;"
              >
                <b-row>
                  <b-col cols="3"
                    ><img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/52/Dana_logo.png"
                      style="width:150px;height:60px;margin-top:10px;"
                  /></b-col>
                  <b-col cols="9">
                    <div class="text-left p-3">
                      <b>No. Rekening: </b>1020007964346<br />
                      <b>Atas Nama: </b>Julius Satya Ratnandi<br />
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>

          <b-col steps="2" md="12 mt-3">
            <div
              class="container bg-white p-3 text-center rounded-lg  border"
              style="padding: 10px;"
            >
              <h3>Contact Person</h3>
              <hr />

              <b-row>
                <b-col cols="3" class="text-center"
                  ><i class="fa fa-user fa-5x"></i
                ></b-col>
                <b-col cols="6">
                  <div class="text-left p-3">
                    <b>Nama: </b
                    >{{ events[payment.eventIndex].contact_person.name }}<br />
                    <b>WA: </b
                    >{{ events[payment.eventIndex].contact_person.phone_number
                    }}<br />
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-container class="d-flex justify-content-center mt-3 mb-3">
            <button @click="backToSelectEvent()" class="btn btn-primary mb-3">
              Kembali ke pilih Event
            </button>
          </b-container>
        </b-row>
      </v-tab>
    </vue-tabs>
  </div>
</template>
<script>
import * as datetime from "./../../../../services/datetime";

export default {
  name: "ParticipantMainPayment",
  data() {
    return {
      payment: {
        id: null,
        event: null,
        participantId: null,
      },
      newEvent: true,
      options: [
        { text: "Radio 1", value: "radio1" },
        { text: "Radio 3", value: "radio2" },
        { text: "Radio 3 (disabled)", value: "radio3", disabled: true },
        { text: "Radio 4", value: "radio4" },
      ],
      step: 0,
    };
  },
  computed: {
    events() {
      return this.$store.state.event.events.filter(function(event){
        return event.name != 'Started' && event.name != 'OSM';
      });
    },
    payments() {
      return this.$store.state.payment.payments;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    getTime(_datetime) {
      var today = new Date();
      var datetime = new Date(_datetime);

      datetime = new Date(
        datetime.getTime() + (today.getTimezoneOffset() + 780) * 60 * 1000
      );

      return datetime;
    },
    getEvents() {
      this.$store.dispatch("event/getAllEvent");
    },
    getAllPaymentByParticipant() {
      this.$store
        .dispatch("payment/getAllPaymentByParticipant", this.user.id)
        .then((response) => {
          console.log(response.data.data);
        });
    },
    joinEvent() {
      this.$store.dispatch("event/joinEvent", this.payment);
    },
    selectEvent(id, index) {
      (this.payment.event = id),
        (this.payment.eventIndex = index),
        (this.step = 1);

      this.payment.id = id;

      this.user.participant.events.forEach((event) => {
        if (event.id == id) this.newEvent = false;
      });

      if (this.newEvent) this.joinEvent();
    },
    checkJoinEvent() {
      /*var joinEvent = false;

      if (this.user.participant.events.length > 0)
        this.user.participant.events.forEach((event) => {
          if (payment.event.name == name) joinEvent = true;
        });

      return joinEvent;*/
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
    backToSelectEvent() {
      this.step = 0;
    },
  },
  created() {
    this.getEvents();
    this.getAllPaymentByParticipant();
    this.payment.participantId = this.user.id;
    this.options = [];
    this.events.forEach((event) => {
      this.options.push({
        text: event.name,
        value: event._id,
      });
    });
  },
};
</script>
<style scoped>
.btn {
  padding: 10px 30px;
}
.event {
  background: #fff;
  margin-bottom: 10px;
  border: 3px solid rgb(200, 200, 200);
}
.event:hover {
  border-color: #58427c;
  background: #fff;
}
.event:active {
  border-color: #58427c;
  background: #ddd;
}
.logo {
  height: 100px;
  width: 100px;
}
</style>
