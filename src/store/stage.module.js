import StageService from '../services/stage.service';

export const stage = {
  namespaced: true,
  state: {
    stages: [],
    stage: {},
  },
  getters: {},
  actions: {
    getAllStage({ commit }) {
      return StageService.getAllStage().then(
        (response) => {
          commit('setStages', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
    getStage({ commit }, id) {
      return StageService.getStage(id).then(
        (response) => {
          commit('setStage', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
    addParticipantToStage({ commit }, stage) {
      return StageService.addParticipantToStage(stage).then(
        (response) => {
          commit('setStage', response.data.data);
          return Promise.resolve(response.data.data);
        },
        error => Promise.reject(error),
      );
    },
  },
  mutations: {
    setStages(state, stages) {
      state.stages = stages;
      localStorage.setItem(`stages${stages._id}`, JSON.stringify(state.stages));
    },
    setStage(state, stage) {
      state.stage = stage;
      const user = JSON.parse(localStorage.getItem('user'));
      if (user.roles.includes('participant')) {
        stage.participants = null;
        stage.answerForms = null;
        stage.participants = null;
        stage.questions = null;
      }
      localStorage.setItem(`stage${stage._id}`, JSON.stringify(state.stage));
    },
  },
};
