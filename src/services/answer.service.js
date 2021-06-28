import axios from "axios";
import header from "./header";

const API_URL = "http://anavaugm.com:3000/api/answer/";

class AnswerFormService {
  uploadAnswer(answer) {
    return axios.put(API_URL + answer.id, answer.data, header(true));
  }
}

export default new AnswerFormService();
