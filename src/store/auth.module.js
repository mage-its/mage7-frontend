import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
let token;
const initialState = user ? {
 status: { loggedIn: true }, user, email: {}, token,
} : {
 status: { loggedIn: false }, user: null, email: {}, token,
};

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                (user) => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                (error) => {
                    commit('loginFailure');
                    return Promise.reject(error);
                },
            );
        },
        googleLogin({ commit }, idToken) {
            return AuthService.googleLogin(idToken).then(
                (user) => {
                    commit('loginSuccess', idToken);
                    return Promise.resolve(idToken);
                },
                (error) => {
                    commit('loginFailure');
                    return Promise.reject(error);
                },
            );
        },
        logout({ commit }) {
          return AuthService.logout().then(
            () => {
              commit('logoutSuccess');
              return Promise.resolve();
            },
            (error) => {
              commit('logoutFailure');
              return Promise.reject(error);
            },
          );
        },
        register({ commit }, user) {
            return AuthService.register(user).then(
                (response) => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('registerFailure');
                    return Promise.reject(error);
                },
            );
        },
        confirmEmail({ commit }, id) {
            return AuthService.confirmEmail(id).then(
                (response) => {
                    commit('confirmEmailSuccess', response.data.data);
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('confirmEmailFailure');
                    return Promise.reject(error);
                },
            );
        },
        findByEmail({ commit }, email) {
            return AuthService.findByEmail(email).then(
                (response) => {
                    commit('findByEmailSuccess');
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('findByEmailFailure');
                    return Promise.reject(error);
                },
            );
        },
        requestChangePassword({ commit }, email) {
            return AuthService.requestChangePassword(email).then(
                (response) => {
                    commit('requestChangePasswordSuccess');
                    return Promise.resolve(response);
                },
                (error) => {
                    commit('requestChangePasswordFailure');
                    return Promise.reject(error);
                },
            );
        },
        resetPassword({ commit }, payload) {
            return AuthService.resetPassword(payload).then(
                (response) => {
                    commit('resetPasswordSuccess');
                    return Promise.resolve(response);
                },
                (error) => {
                    commit('resetPasswordFailure');
                    return Promise.reject(error);
                },
            );
        },
        changePassword({ commit }, user) {
            return AuthService.changePassword(user).then(
                (response) => {
                    commit('changePasswordSuccess');
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit('changePasswordFailure');
                    return Promise.reject(error);
                },
            );
        },
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.token = user.token;
            state.user = user.user;
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
            const oldUser = JSON.parse(localStorage.getItem('user'));
            const newUser = user;
            oldUser.firstname = newUser.firstname;
            oldUser.lastname = newUser.lastname;
            oldUser.password = newUser.password;
            oldUser.verification = newUser.verification;
            oldUser.participant = newUser.participant;
            state.user = oldUser;
            localStorage.setItem('user', JSON.stringify(oldUser));
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
