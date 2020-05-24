import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMusic:[],
    downloadRank:[],
    seachList:[],
    searchInput:""
  },
  mutations: {
    setCurrentMusicData(state,musicData){
      state.currentMusic = musicData
    },
    setownloadRankData(state,musicData){
      state.downloadRank = musicData
    },
    setSearchList(state,searchData){
      state.seachList=searchData
    }
  },
  getters:{
    currentMusicDate:(state)=>{return state.currentMusic},
    downloadRankData:(state)=>{return state.downloadRank},
    searchResult:(state)=>{return state.seachList},
    searchInputing:(state)=>{return state.searchInput}
  },
  actions: {
  },
  modules: {
  }
})
