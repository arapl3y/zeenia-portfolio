import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  projectPosts: []
})

export const mutations = {
  SET_PROJECTS(state, data) {
    state.projectPosts = data
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getProjectPosts')
  },
  async getProjectPosts({ state, commit }) {
    const context = await require.context(
      '~/content/projects/',
      false,
      /\.json$/
    )

    const searchposts = await context.keys().map(key => ({
      ...context(key),
      _path: `/projects/${key.replace('.json', '').replace('./', '')}`
    }))

    commit('SET_PROJECTS', searchposts.reverse())
  }
}
