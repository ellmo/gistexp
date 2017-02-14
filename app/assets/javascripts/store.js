const store = new Vuex.Store({
  state: {
    gists: {}
  },
  getters: {
    getGists(state){
      return state.gists;
    },
    getGistById: (state) => (id) => {
      return state.gists.find(gist => gist.id === id)
    }
  }
})
