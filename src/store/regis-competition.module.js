import RegisCompetitionService from '../services/regis-competition.service';

export const regisCompetition = {
  namespaced: true,
  state: {
    regisCompetitions: [],
    regisCompetition: {},
  },
  actions: {
    registerOlim({ commit }, form) {
      return RegisCompetitionService.registerOlim(form).then(
        (response) => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    registerGame({ commit }, form) {
      return RegisCompetitionService.registerGame(form).then(
        (response) => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    registerApp({ commit }, form) {
      return RegisCompetitionService.registerApp(form).then(
        (response) => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
    registerIot({ commit }, form) {
      return RegisCompetitionService.registerIot(form).then(
        (response) => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
  },
};
