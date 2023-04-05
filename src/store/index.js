import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import example from './modules/example'
import ns from './modules/namespace'
import pod from './modules/pod'
import node from './modules/node'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    example,
    ns,
    pod,
    node
  },
  getters
})

export default store
