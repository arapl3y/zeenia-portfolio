import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  projectPosts: [],
  aboutData: []
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getProjectPosts')
    await dispatch('getAboutData')
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
  },
  async getAboutData({ state, commit }) {
    const context = await require.context('~/content/about/', false, /\.json$/)

    const about = await context.keys().map(key => ({
      ...context(key),
      _path: `/projects/${key.replace('.json', '').replace('./', '')}`
    }))

    commit('SET_ABOUT', about.reverse())
  }
}

export const mutations = {
  SET_PROJECTS(state, data) {
    state.projectPosts = data
  },
  SET_ABOUT(state, data) {
    state.aboutData = data
  }
}

export const getters = {
  getProjectBySlug: state => slug => {
    return state.projectPosts.find(
      project => project._path.split('/')[2] === slug
    )
  },
  getRandomProject(state) {
    const random = Math.floor(Math.random() * state.projectPosts.length)

    return state.projectPosts[random]
  }
}
