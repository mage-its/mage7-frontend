import AnswerFormService from "../services/answer-form.service";

export const answerForm = {
  namespaced: true,
  state: {
    answerForms: [],
    answerForm: {},
  },
  getters: {},
  actions: {
    getAllAnswerForm({ commit }) {
      return AnswerFormService.getAllAnswerForm().then(
        (response) => {
          commit("setAnswerForms", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAllAnswerFormByStage({ commit }, idStage) {
      return AnswerFormService.getAllAnswerFormByStage(idStage).then(
        (response) => {
          commit("setAnswerForms", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAnswerForm({ commit }, id) {
      return AnswerFormService.getAnswerForm(id).then(
        (response) => {
          commit("setAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAnswerFormByStage({ commit }, answerForm) {
      return AnswerFormService.getAllAnswerFormByStage(answerForm).then(
        (response) => {
          commit("setAnswerForms", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAnswerFormByParticipantAndStage({ commit }, answerForm) {
      return AnswerFormService.getAnswerFormByParticipantAndStage(
        answerForm
      ).then(
        (response) => {
          if (response.data.data != undefined) commit("setAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    createAnswerForm({ commit }, answerForm) {
      return AnswerFormService.createAnswerForm(answerForm).then(
        (response) => {
          commit("createAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    submitAnswerForm({ commit }, answerForm) {
      return AnswerFormService.submitAnswerForm(answerForm).then(
        (response) => {
          commit("submitAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    updateAnswerForm({ commit }, answerForm) {
      return AnswerFormService.updateAnswerForm(answerForm).then(
        (response) => {
          commit("updateAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    setAnswerFormScore({ commit }, answerForm) {
      return AnswerFormService.setAnswerFormScore(answerForm).then(
        (response) => {
          commit("updateAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    deleteAnswerForm({ commit }, answerForm) {
      return AnswerFormService.deleteAnswerForm(answerForm).then(
        (response) => {
          commit("updateAnswerForm", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setAnswerForms(state, answerForms) {
      state.answerForms = answerForms;
    },
    setAnswerForm(state, answerForm) {
      state.answerForm = answerForm;

      localStorage.setItem("answerForm2"+answerForm.stage, JSON.stringify(answerForm));
    },
    createAnswerForm() {},
    submitAnswerForm() {},
    updateAnswerForm() {},
  },
};
