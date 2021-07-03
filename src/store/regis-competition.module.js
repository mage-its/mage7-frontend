import RegisCompetition from "../services/regis-competition.service";

export const regisCompetition = {
  namespaced: true,
  state: {
    regisCompetitions: [],
    regisCompetition: {},
  },
  actions: {
    registerOlim({ commit }, user) {
      return RegisCompetition.registerOlim(user).then(
        (response) => {
          commit("registerSuccess",response);
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
    registerGame({ commit }, user) {
      return RegisCompetition.registerGame(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
    registerApp({ commit }, user) {
      return RegisCompetition.registerApp(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
    registerIot({ commit }, user) {
      return RegisCompetition.registerIot(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  },
};
