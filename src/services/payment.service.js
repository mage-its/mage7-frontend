import axios from 'axios';
import header from './header';

const API_URL = process.env.VUE_APP_API_URL+'api/v1/';

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
    return axios.post(`${API_URL}/compe/pay`, payment.data, header(true));
  }
}

export default new PaymentService();
