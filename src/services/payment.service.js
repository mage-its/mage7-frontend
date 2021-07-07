import axios from 'axios';
import header from './header';

const API_URL = 'https://mage-its.com/api/v1/';

class PaymentService {
  getAllPayment() {
    return axios.get(`${API_URL}all`, header());
  }
  getAllPaymentByParticipant(participantId) {
    return axios.get(`${API_URL}participant/${participantId}`, header());
  }
  getPayment(id) {
    return axios.get(API_URL + id, header());
  }
  createPayment(payment) {
    return axios.post(`${API_URL}payment`, payment.data, header(true));
  }
}

export default new PaymentService();
