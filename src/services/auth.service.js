import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL+'api/v1/auth/';

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
		return axios
			.post(`${API_URL}register`, user)
			.then((response) => {
				if (response.data.tokens) {
					localStorage.setItem('user', JSON.stringify(response.data));
				}
				return response.data;
			});
	}
	confirmEmail(id) {
		return axios.put(`${API_URL}confirm-email/${id}`);
	}
	findByEmail(email) {
		return axios.get(`${API_URL}find-by-email/${email}`);
	}
	requestChangePassword(email) {
		return axios
      .post(`${API_URL}forgot-password`, { email })
      .then((response) => response);
	}
  resetPassword({ password, token }) {
		return axios
      .post(`${API_URL}reset-password/?token=${token}`, { password })
      .then((response) => response);
	}
	changePassword(user) {
		return axios.put(`${API_URL}change-password/${user.id}`, user);
	}
}

export default new AuthService();
