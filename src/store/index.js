import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: 'zhangsan',
      nickname: '张三'
    }
  },
  getters: {},
  mutations: {
    updateUsername (state, payload) {
      // console.log(state)
      this.state.user.username = payload.uname
    },
    updateUsername2 (state, uname) {
      // console.log(state)
      this.state.user.username = uname
    }
  },
  actions: {
    updateUser (context, payload) {
      context.commit('updateUsername2', payload.uname)
    }
  },
  modules: {}
})
