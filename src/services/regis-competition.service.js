import axios from 'axios';
import header from './header';

const API_URL = process.env.VUE_APP_API_URL+'api/v1/';

class RegisCompetitionService {
  registerOlim(form) {
    return axios.post(`${API_URL}olim/daftar-olim`, form.data, header(true));
  }
  registerGame(form) {
    return axios.post(`${API_URL}gamedev/daftar-gamedev`, form.data, header(true));
  }
  registerApp(form) {
    return axios.post(`${API_URL}appdev/daftar-appdev`, form.data, header(true));
  }
  registerIot(form) {
    return axios.post(`${API_URL}iotdev/daftar-iotdev`, form.data, header(true));
  }
}

export default new RegisCompetitionService();
