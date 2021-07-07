import axios from 'axios';

const API_URL = 'https://mage-its.com/api/v1/auth/';

class AuthService {
  login(user) {
    return axios
      .post(`${API_URL}login`, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.tokens) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(`${API_URL}register`, user);
  }

  confirmEmail(id) {
    return axios.put(`${API_URL}confirm-email/${id}`);
  }

  findByEmail(email) {
    return axios.get(`${API_URL}find-by-email/${email}`);
  }

  requestChangePassword(email) {
    return axios.post(`${API_URL}request-change-password/${email}`);
  }

  changePassword(user) {
    return axios.put(`${API_URL}change-password/${user.id}`, user);
  }
}

export default new AuthService();
