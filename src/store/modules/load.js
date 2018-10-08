const load = {
  state: {
     loading: false
  },
  mutations: {
     SHOWLOADING(state){
     	state.loading = true    
     },
     HIDELOADING(state){
      state.loading = false    
     }
  },
  actions: {
  	showloading({commit}){
       commit("SHOWLOADING")
    },
    hideloading({commit}){
       commit("HIDELOADING")
    }
  }
}
export default load;