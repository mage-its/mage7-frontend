import axios from 'axios';
import header from './header';

const API_URL = 'https://mage-its.com/api/event/';

class EventService {
  getAllEvent() {
    return axios.get(`${API_URL}all`, header());
  }
  getEvent(id) {
    return axios.get(API_URL + id, header());
  }
  uploadEvent(data) {
    return axios.put(`${API_URL + data.id}/upload/${data.participantId}`, data.document, header(true));
  }
  joinEvent(data) {
    return axios.put(`${API_URL + data.id}/add`, data, header());
  }
}

export default new EventService();
