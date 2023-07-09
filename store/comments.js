import { SET_SORT_COMMENTS, SORT_COMMENTS } from "./mutation-types";

export const state = () => ({
    comments: [],
    currentSort: 'id',
    currentSortDir: 'asc',
  })
  
  export const mutations = {
    setComments(state, comments) {
      state.comments = comments
    },
      
    }
  //   sortCommentsById(state, sortKey) {
  //     console.log('running mutation');
  //     const comments = this.state.comments;
  //     comments = Array(comments)
  //     comments.sort((a, b) => {
  //         let compare = 0;
  //         if (a[sortKey] > b[sortKey]) {
  //             compare = 1;
  //         } else if (b[sortKey] > a[sortKey]) {
  //             compare = -1;
  //         }
  //         return compare;
  //     });
  //     state.comments = comments;
  // },


  // [SET_SORT_COMMENTS](state, sortKey) {
  //   if(sortKey === state.currentSort) {
  //     state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc';
  //   }
  //   state.currentSort = sortKey;

  //     state.comments.sort((a,b) => {
  //       let modifier = 1;
  //       if(state.currentSortDir === 'desc') modifier = -1;
  //       if(a[state.currentSort] < b[state.currentSort]) return -1 * modifier;
  //       if(a[state.currentSort] > b[state.currentSort]) return modifier;
  //       return state.comments;
  //     });
  // },
  
  
  export const actions = {
    async fetch({commit}) {
      const comments = await this.$axios.$get('https://jsonplaceholder.typicode.com/comments')
      commit('setComments', comments)
    },
    async setsortcomments({commit}) {
      const comments = await this.$axios.$get('https://jsonplaceholder.typicode.com/comments')
      const sortedList = comments.sort((a, b) => a.name > b.name ? 1 : -1);
      commit('setComments', sortedList)
    },

    setSortComments ({ dispatch, commit }) {
      dispatch('SET_SORT_COMMENTS')
        commit('SET_SORT_COMMENTS')
      
  },
}

  export const getters = {
    comments: s => s.comments
  }
