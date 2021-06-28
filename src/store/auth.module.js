import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user, email: {} }
  : { status: { loggedIn: false }, user: null, email: {} };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (response) => {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
    confirmEmail({ commit }, id) {
      return AuthService.confirmEmail(id).then(
        (response) => {
          commit("confirmEmailSuccess", response.data.data);
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("confirmEmailFailure");
          return Promise.reject(error);
        }
      );
    },
    findByEmail({ commit }, email) {
      return AuthService.findByEmail(email).then(
        (response) => {
          commit("findByEmailSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("findByEmailFailure");
          return Promise.reject(error);
        }
      );
    },
    requestChangePassword({ commit }, email) {
      return AuthService.requestChangePassword(email).then(
        (response) => {
          commit("requestChangePasswordSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("requestChangePasswordFailure");
          return Promise.reject(error);
        }
      );
    },
    changePassword({ commit }, user) {
      return AuthService.changePassword(user).then(
        (response) => {
          commit("changePasswordSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("changePasswordFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    confirmEmailSuccess(state, user) {
      var oldUser = JSON.parse(localStorage.getItem('user'));
      const newUser = user;
      console.log(newUser);
      oldUser.firstname = newUser.firstname;
      oldUser.lastname = newUser.lastname;
      oldUser.password = newUser.password;
      oldUser.verification = newUser.verification;
      oldUser.participant = newUser.participant;
      state.user = oldUser;
      console.log(oldUser);
      localStorage.setItem("user", JSON.stringify(oldUser));
    },
    confirmEmailFailure() {},
    findByEmailSuccess(state) {
      state.email.status = 2;
    },
    findByEmailFailure(state) {
      state.email.status = 1;
    },
    requestChangePasswordSuccess() {},
    requestChangePasswordFailure() {},
    changePasswordSuccess() {},
    changePasswordFailure() {},
  },
};
