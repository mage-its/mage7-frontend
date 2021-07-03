import axios from "axios";
import header from "./header";

const API_URL = "http://52.149.214.161/api/v1/";

class RegisCompetitionService {
  
  registerOlim(user) {
    return axios.post(API_URL + "olim/daftar-olim", user, header(true));
  }
  registerGame(user) {
    return axios.post(API_URL + "gamedev/daftar-gamedev", user, header(true));
  }
  registerApp(user) {
    return axios.post(API_URL + "appdev/daftar-appdev", user, header(true));
  }
  registerIot(user) {
    return axios.post(API_URL + "iot/daftar-iot", user, header(true));
  }

}

export default new RegisCompetitionService();
