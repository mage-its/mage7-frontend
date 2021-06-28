import QuestionService from "../services/question.service";


export const question = {
  namespaced: true,
  state: {
    questions: [],
    question: {}
  },
  getters: {
    
  },
  actions: {
    getAllQuestion({ commit }) {
      return QuestionService.getAllQuestion().then(
        (response) => {
          commit("setQuestions", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAllQuestionByStage({ commit }, idStage) {
      return QuestionService.getAllQuestionByStage(idStage).then(
        (response) => {
          commit("setQuestions", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getQuestion({ commit }, id) {
      return QuestionService.getQuestion(id).then(
        (response) => {
          commit("setQuestion", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    createQuestion({ commit }, question) {
      return QuestionService.createQuestion(question).then(
        (response) => {
          commit("createQuestion", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    updateQuestion({ commit }, question) {
      return QuestionService.updateQuestion(question).then(
        (response) => {
          commit("updateQuestion", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setQuestions(state, questions) {
      state.questions = questions;
    },
    setQuestion(state, question) {
      state.question = question;
    },
    createQuestion() {
      
    },
    updateQuestion() {
      
    },
  },
};
