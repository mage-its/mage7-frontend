import PaymentService from '../services/payment.service';

export const payment = {
  namespaced: true,
  state: {
    payments: [],
    payment: {},
  },
  getters: {

  },
  actions: {
    getAllPayment({ commit }) {
      return PaymentService.getAllPayment().then(
        (response) => {
          commit('setPayments', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
    getAllPaymentByParticipant({ commit }, participantId) {
      return PaymentService.getAllPaymentByParticipant(participantId).then(
        (response) => {
          commit('setPayments', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
    getPayment({ commit }, id) {
      return PaymentService.getPayment(id).then(
        (response) => {
          commit('setPayment', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
    createPayment({ commit }, payment) {
      return PaymentService.createPayment(payment).then(
        (response) => {
          commit('createPaymentSuccess');
          return Promise.resolve(response.data);
        },
        (error) => {
          commit('createPaymentFailure');
          return Promise.reject(error);
        },
      );
    },
  },
  // mutations: {
  //   setPayments(state, payments) {
  //     state.payments = payments;
  //   },
  //   setPayment(state, payment) {
  //     state.payment = payment;
  //   },
  //   createPayment() {

  //   }
  // },
};
