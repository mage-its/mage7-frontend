import axios from "axios";

const API_URL = "http://anavaugm.com:3000/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "signup", user);
  }

  confirmEmail(id) {
    return axios.put(API_URL + "confirm-email/" + id);
  }

  findByEmail(email) {
    return axios.get(API_URL + "find-by-email/" + email);
  }

  requestChangePassword(email) {
    return axios.post(API_URL + "request-change-password/" + email);
  }

  changePassword(user) {
    return axios.put(API_URL + "change-password/" + user.id, user);
  }
}

export default new AuthService();
