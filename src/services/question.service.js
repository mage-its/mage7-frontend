import axios from 'axios';
import header from './header';

const API_URL = 'http://anavaugm.com:3000/api/question/';

class QuestionService {
  getAllQuestion() {
    return axios.get(API_URL + 'all', header());
  }
  getAllQuestionByStage(idStage) {
    return axios.get(API_URL + 'stage/' + idStage, header());
  }
  getQuestion(id) {
    return axios.get(API_URL + id, header());
  }
  createQuestion(question) {
    return axios.post(API_URL,question, header());
  }
  updateQuestion(question) {
    return axios.put(API_URL + question._id,question, header());
  }
}

export default new QuestionService();
