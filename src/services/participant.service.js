import axios from 'axios';
import header from './header';

const API_URL = 'https://mage-its.com/api/v1/users/';

class ParticipantService {
  getAllParticipant() {
    return axios.get(`${API_URL}all`, header());
  }
  getParticipant(id) {
    return axios.get(API_URL + id, header());
  }
  updateParticipant(participant) {
    return axios.put(API_URL + participant.id, participant, header());
  }
  uploadParticipant(participant) {
    return axios.put(`${API_URL + participant.id}/upload`, participant.document, header(true));
  }
  getProfile() {
    return axios.get(`${API_URL}profile`, header(true));
  }
}

export default new ParticipantService();
