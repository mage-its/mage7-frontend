import axios from "axios";
import header from "./header";

const API_URL = "http://anavaugm.com:3000/api/participant/";

class ParticipantService {
  getAllParticipant() {
    return axios.get(API_URL + "all", header());
  }
  getParticipant(id) {
    return axios.get(API_URL + id, header());
  }
  updateParticipant(participant) {
    return axios.put(API_URL + participant.id, participant, header());
  }
  uploadParticipant(participant) {
    return axios.put(API_URL + participant.id + '/upload', participant.document, header(true));
  }
}

export default new ParticipantService();
