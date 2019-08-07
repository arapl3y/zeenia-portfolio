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

    const posts = await context
      .keys()
      .map(key => ({
        ...context(key),
        _path: `/projects/${key.replace('.json', '').replace('./', '')}`
      }))
      // TODO: Refactor this
      .sort((a, b) => {
        if (a.order && b.order) {
          return a.order - b.order
        } else {
          return a.title.localeCompare(b.title)
        }
      })

    commit('SET_PROJECTS', posts)
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
  SET_PROJECTS(state, posts) {
    state.projectPosts = posts
  },
  SET_ABOUT(state, data) {
    state.aboutData = data
  }
}

export const getters = {
  getProjects(state) {
    return state.projectPosts
  },
  getProjectBySlug: state => slug => {
    return state.projectPosts.find(
      project => project._path.split('/')[2] === slug
    )
  },
  getOtherRandomProject: state => slug => {
    if (state.projectPosts.length === 1) {
      return state.projectPosts[0]
    }

    let random = Math.floor(Math.random() * state.projectPosts.length)

    // Keep finding a new random number until slugs don't match
    while (state.projectPosts[random]._path.split('/')[2] === slug) {
      random = Math.floor(Math.random() * state.projectPosts.length)
    }

    return state.projectPosts[random]
  }
}
