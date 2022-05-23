import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:[]
  },
  mutations: {
    mutationFunction(state: any, payload){
      console.log('mutation:[Step3]',{payload})
      state.user.push(payload); 
    },
    changeStatus(state:any, index){
      // console.log(state.checked[index])
      //vue,set(object, index, newValue)
      Vue.set(state.user, state.user[index], !state.user[index].checked)
    }
  },
  actions: {
    addNewUser({commit}, payload){
      console.log('action:[Step2]',{payload});
      commit('mutationFunction', payload);
    },
    changeStatus({commit}, payload){
      commit('changeStatus', payload)
    }
  },
  modules: {},
});
