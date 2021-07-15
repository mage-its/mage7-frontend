import axios from 'axios';
import header from './header';

const API_URL = process.env.VUE_APP_API_URL+'api/answer/';

class AnswerFormService {
  uploadAnswer(answer) {
    return axios.put(API_URL + answer.id, answer.data, header(true));
  }
}

export default new AnswerFormService();
