
export const state = () => ({
    comments: [],
  })
  
  export const mutations = {
    setComments(state, comments) {
      state.comments = comments
    },     
    }
 
  export const actions = {
    async fetch({commit}) {
      const comments = await this.$axios.$get('https://jsonplaceholder.typicode.com/comments')
      commit('setComments', comments)
    },
    async setsortcomments({commit}) {
      const comments = await this.$axios.$get('https://jsonplaceholder.typicode.com/comments')
      const sortedList = comments.sort((a, b) => a.id < b.id ? 1 : -1);
      commit('setComments', sortedList)
    },
}

  export const getters = {
    comments: s => s.comments
  }
