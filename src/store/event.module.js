import EventService from "../services/event.service";

export const event = {
  namespaced: true,
  state: {
    events: [],
    event: {},
  },
  getters: {},
  actions: {
    selectEvent({ commit }, selectedEvent) {
      commit("selectEvent", selectedEvent);
    },
    getAllEvent({ commit }) {
      return EventService.getAllEvent().then(
        (response) => {
          commit("setEvents", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getEvent({ commit }, id) {
      return EventService.getEvent(id).then(
        (response) => {
          commit("setEvent", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    uploadEvent({ commit }, data) {
      return EventService.uploadEvent(data).then(
        (response) => {
          commit("addEvent", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    joinEvent({ commit }, data) {
      return EventService.joinEvent(data).then(
        (response) => {
          commit("addEvent", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    setEvent(state, event) {
      state.event = event;
    },
    selectEvent(state, selectedEvent) {
      if (state.event != null) {
        state.event = state.events[selectedEvent.item];

        localStorage.setItem("event", JSON.stringify(state.event));
      }
    },
    addEvent(state, user) {
      var oldUser = JSON.parse(localStorage.getItem("user"));
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
  },
};
