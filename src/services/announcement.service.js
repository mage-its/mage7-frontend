import axios from 'axios';
import header from './header';

const API_URL = 'https://mage-its.com/api/announcement/';

class AnnouncementService {
  getAllAnnouncement() {
    return axios.get(`${API_URL}all`, header());
  }
  getGeneralAnnouncement() {
    return axios.get(`${API_URL}all/general`, header());
  }
  getAllAnnouncementByStage(stageId) {
    return axios.get(`${API_URL}stage/${stageId}`, header());
  }
  getAllAnnouncementByParticipant(participantId) {
    return axios.get(`${API_URL}participant/${participantId}`, header());
  }
  getAnnouncement(id) {
    return axios.get(API_URL + id, header());
  }
  createAnnouncement(announcement) {
    return axios.post(API_URL, announcement, header());
  }
}

export default new AnnouncementService();
