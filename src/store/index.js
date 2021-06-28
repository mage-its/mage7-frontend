import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module'
import { ui } from './ui.module'
import { participant } from './participant.module'
import { announcement } from './announcement.module'
import { payment } from './payment.module'
import { event } from './event.module'
import { stage } from './stage.module'
import { question } from './question.module'
import { answerForm } from './answer-form.module'
import { answer} from './answer.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    ui,
    participant,
    announcement,
    payment,
    event,
    stage,
    question,
    answerForm,
    answer
  }
})
