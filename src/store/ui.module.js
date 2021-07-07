import UIService from '../services/ui.service';

export const ui = {
  namespaced: true,
  state: {
    welcomeShow: 'welcome',
    sidebarShow: true,
    provinces: [],
    cities: [],
    subdistrict: [],
  },
  getters: {
    getProvinces(state) {
      return state.provinces;
    },
    getCities(state) {
      return state.cities;
    },
  },
  actions: {
    changeSidebarComponent({ commit }) {
      commit('changeSidebarComponent');
    },
    changeWelcomeComponent({ commit }, component) {
      commit('changeWelcomeComponent', component);
    },
    getProvinces({ commit }) {
      return UIService.getProvinces().then(
        (provinces) => {
          commit('setProvinces', provinces);
          return Promise.resolve(provinces);
        },
        error => Promise.reject(error),
      );
    },
    getCities({ commit, getters }, provinceName) {
      return UIService.getCities(provinceName, getters.getProvinces).then(
        (cities) => {
          commit('setCities', cities);
          return Promise.resolve(cities);
        },
        error => Promise.reject(error),
      );
    },
    getSubdistricts({ commit, getters }, cityName) {
      return UIService.getSubdistricts(cityName, getters.getCities).then(
        (subdistricts) => {
          commit('setSubdistricts', subdistricts);
          return Promise.resolve(subdistricts);
        },
        error => Promise.reject(error),
      );
    },
  },
  mutations: {
    changeSidebarComponent(state) {
      state.sidebarShow = !state.sidebarShow;
    },
    changeWelcomeComponent(state, component) {
      state.welcomeShow = component;
    },
    setProvinces(state, provinces) {
      state.provinces = provinces;
    },
    setCities(state, cities) {
      state.cities = cities;
    },
    setSubdistricts(state, subdistricts) {
      state.subdistricts = subdistricts;
    },
  },
};
