import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    user:null,
    currentUser:null,
    currentTheme:false,
    currentStep:null
  },
  mutations: {
    current_user(state: any, payload){
      // console.log('mutation:[Step3]',{payload})
      state.user = null;
      state.user=payload; 
    },
    changeStatus(state:any, index){
      // console.log(state.checked[index])
      //vue.set(object/array, index, newValue)
      Vue.set(state.user, state.user[index], !state.user[index].checked)
    },
    changedThemeMutation(state:any, value){
      state.currentTheme = value
    },
    isCurrentStep(state:any, value){
      state.currentStep = value;
    },
    checkLoggedInUser(state:any, value){
      state.currentUser = value
    }
  },
  actions: {
    addNewUser({commit}, payload){
      // console.log('action:[Step2]',{payload});
      commit('current_user', payload);
    },
    LoggedInUser({commit}, payload){
      commit('checkLoggedInUser', payload)
    },
    changeStatus({commit}, payload){
      commit('changeStatus', payload)
    },
    changedTheme({commit}, payload){
      commit('changedThemeMutation', payload)
    },
    updatedCurrentStep({commit}, payload){
      commit('isCurrentStep', payload)
    }
  },
  getters: {
    currentTheme: (state: any) => state.currentTheme,
    currentStep: (state:any) => state.currentStep
  },
  modules: {},
  plugins:[vuexLocal.plugin]
});
