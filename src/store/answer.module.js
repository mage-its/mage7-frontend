import AnswerService from "../services/answer.service";

export const answer = {
  namespaced: true,
  state: {
    answer: {},
  },
  getters: {},
  actions: {
    uploadAnswer({ commit }, answer) {
      return AnswerService.uploadAnswer(answer).then(
        (response) => {
          commit("uploadAnswer", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    submitAnswer() {},
    uploadAnswer() {},
  },
};
