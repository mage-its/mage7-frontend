import axios from 'axios';
import header from './header';

const API_URL = 'https://mage-its.com/api/v1/';

class UploadProposalService {
  uploadProposalIotDev(form) {
    return axios.post(`${API_URL}iotdev/upload-proposal`, form.data, header(true));
  }
  uploadProposalGameDev(form) {
    return axios.post(`${API_URL}gamedev/upload-proposal`, form.data, header(true));
  }
  uploadProposalAppDev(form) {
    return axios.post(`${API_URL}appdev/upload-proposal`, form.data, header(true));
  }
}

export default new UploadProposalService();
