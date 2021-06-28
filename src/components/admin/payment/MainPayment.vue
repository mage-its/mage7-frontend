<template>
  <div>
    <b-container class="text-left ml-0 pl-0 pt-2 pb-2">
      <router-link :to="{ name: 'CreatePayment' }" class="btn btn-primary"
        ><i class="fas fa-plus"></i> Tambah</router-link
      >
    </b-container>
    <b-row class="bg-white p-3 mb-2 shadow-sm rounded text-bold" no-gutters>
      <b-col class="text-left" md="3">
        <p>Peserta</p>
      </b-col>
      <b-col class="text-center" md="2">
        <p>Event</p>
      </b-col>
      <b-col class="text-center" md="4">
        <p>Tanggal pembayaran</p>
      </b-col>
    </b-row>
    <b-row
      class="bg-white p-2 mb-2 shadow-sm rounded"
      no-gutters
      v-for="payment in payments"
      :key="payment._id"
    >
      <b-col md="1">
        <img
          class="profile"
          v-bind:src="'http://anavaugm.com/' + payment.participant.image"
        />
      </b-col>
      <b-col md="2">
        <p class="text-bold">{{ payment.participant.username }}</p>
        <br />
        <p class="text-secondary">
          {{
            payment.participant.firstname + " " + payment.participant.lastname
          }}
        </p>
      </b-col>
      <b-col class="pt-2" md="2">
        <p>{{ payment.event.name }}</p>
        <br />
      </b-col>
      <b-col class="pt-2" md="4">
        <p>{{ getDateTime('datetime', payment.created_at) }}</p>
        <br />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import * as datetime from "./../../../../services/datetime";

export default {
  name: "MainSchedule",
  computed: {
    payments() {
      return this.$store.state.payment.payments;
    },
  },
  methods: {
    getPayments() {
      this.$store.dispatch("payment/getAllPayment");
    },
    getDateTime: function(type, date) {
      return datetime.getDateTime(type, date);
    },
  },
  created() {
    this.getPayments();
  },
};
</script>
<style scoped>
p {
  display: inline;
}
.profile {
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
</style>
