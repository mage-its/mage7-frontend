import ParticipantService from './../services/participant.service';

export const participant = {
  namespaced: true,
  state: {
    participants: [],
    participant: {},
  },
  getters: {},
  actions: {
    getAllParticipant({ commit }) {
      return ParticipantService.getAllParticipant().then(
        (response) => {
          commit('setParticipants', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
    getParticipant({ commit }, id) {
      return ParticipantService.getParticipant(id).then(
        (response) => {
          commit('setParticipant', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
    getProfile() {
      return ParticipantService.getProfile().then(
        (response) => {
          commit('getProfile', response);
          return Promise.resolve(response);
        },
        (error) => {
          console.log(error.message);
          return Promise.reject(error);
        },
      );
    },
    updateParticipant({ commit }, participant) {
      return ParticipantService.updateParticipant(participant).then(
        (response) => {
          commit('setParticipant', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
    uploadParticipant({ commit }, participant) {
      return ParticipantService.uploadParticipant(participant).then(
        (response) => {
          commit('setParticipant', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
  },
  mutations: {
    setParticipants(state, participants) {
      state.participants = participants;
    },
    setParticipant(state, user) {
      const currentUser = JSON.parse(localStorage.getItem('user'));

      if (currentUser.roles.includes('participant')) {
        const oldUser = JSON.parse(localStorage.getItem('user'));
        const newUser = user;
        console.log(newUser);
        oldUser.firstname = newUser.firstname;
        oldUser.lastname = newUser.lastname;
        oldUser.password = newUser.password;
        oldUser.verification = newUser.verification;
        oldUser.participant = newUser.participant;
        state.user = oldUser;
        console.log(oldUser);
        localStorage.setItem('user', JSON.stringify(oldUser));
      } else {
        state.participant = user;
      }
    },
  },
};
