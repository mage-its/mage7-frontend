import axios from 'axios';
import header from './header';

const API_URL = 'http://anavaugm.com:3000/api/payment/';

class PaymentService {
  getAllPayment() {
    return axios.get(API_URL + 'all', header());
  }
  getAllPaymentByParticipant(participantId) {
    return axios.get(API_URL + 'participant/' +participantId, header());
  }
  getPayment(id) {
    return axios.get(API_URL + id, header());
  }
  createPayment(payment) {
    return axios.post(API_URL, payment, header());
  }
}

export default new PaymentService();
