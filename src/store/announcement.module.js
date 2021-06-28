import AnnouncementService from "../services/announcement.service";

export const announcement = {
  namespaced: true,
  state: {
    announcements: [],
    participantAnnouncements: [],
    stageAnnouncements: [],
    announcement: {}
  },
  getters: {
    
  },
  actions: {
    getAllAnnouncement({ commit }) {
      return AnnouncementService.getAllAnnouncement().then(
        (response) => {
          commit("setAnnouncements", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getGeneralAnnouncement({ commit }) {
      return AnnouncementService.getGeneralAnnouncement().then(
        (response) => {
          commit("setAnnouncements", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAllAnnouncementByStage({ commit }, stageId) {
      return AnnouncementService.getAllAnnouncementByStage(stageId).then(
        (response) => {
          commit("setStageAnnouncements", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAllAnnouncementByParticipant({ commit }, participantId) {
      return AnnouncementService.getAllAnnouncementByParticipant(participantId).then(
        (response) => {
          commit("setParticipantAnnouncements", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    getAnnouncement({ commit }, id) {
      return AnnouncementService.getAnnouncement(id).then(
        (response) => {
          commit("setAnnouncement", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    createAnnouncement({ commit },announcement) {
      return AnnouncementService.createAnnouncement(announcement).then(
        (response) => {
          commit("createAnnouncement", response.data.data);
          return Promise.resolve(response.data.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    setAnnouncements(state, announcements) {
      state.announcements = announcements;
    },
    setStageAnnouncements(state, announcements) {
      state.participantAnnouncements = announcements;
    },
    setParticipantAnnouncements(state, announcements) {
      state.participantAnnouncements = announcements;
    },
    setAnnouncement(state, announcement) {
      state.announcement = announcement;
    },
    createAnnouncement() {

    }
  },
};
  