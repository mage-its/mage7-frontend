import UploadProposalService from "../services/upload-proposal.service";

export const uploadProposal = {
  namespaced: true,
  state: {
    uploadProposals: [],
    uploadProposal: {},
  },
  actions: {
    uploadProposalIotDev({ commit }, form) {
      return UploadProposalService.uploadProposalIotDev(form).then(
        (response) => {
          commit("uploadSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit("uploadFailure");
          return Promise.reject(error);
        }
      );
    },
    uploadProposalGameDev({ commit }, form) {
      return UploadProposalService.uploadProposalGameDev(form).then(
        (response) => {
          commit("uploadSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit("uploadFailure");
          return Promise.reject(error);
        }
      );
    },
    uploadProposalAppDev({ commit }, form) {
      return UploadProposalService.uploadProposalAppDev(form).then(
        (response) => {
          commit("uploadSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log(error.message);
          commit("uploadFailure");
          return Promise.reject(error);
        }
      );
    },
  },
};
