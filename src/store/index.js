import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMusic:[],
    downloadRank:[],
    seachList:[],
    searchInput:"",
    singer:[],
    playList:[],
    currentPlayIndex:{
      name:"",
      isPlay:false
    }
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
    },
    setSingerList(state,singers){
      state.singer=singers
      const baseUrl="http://120.24.35.66:8080/files/pictures/"
      for(let i=0;i<state.singer.list.length;i++){
        state.singer.list[i].picturePath=baseUrl+state.singer.list[i].picturePath
      }
    },
    setSearchInput(state,inputData){
      state.searchInput=inputData
    },
    setPlayList(state,music){
      state.playList.push(music)
    },
    setCurrentPlayIndex(state,content){
      state.currentPlayIndex.name=content.name
      state.currentPlayIndex.isPlay=content.isPlay
    }
  },
  getters:{
    currentMusicDate:(state)=>{return state.currentMusic},
    downloadRankData:(state)=>{return state.downloadRank},
    searchResult:(state)=>{return state.seachList},
    getsearchInput:(state)=>{return state.searchInput},
    singerList:(state)=>{return state.singer},
    getPlayList(state){return state.playList},
    getCurrentPlayIndex(state){return state.currentPlayIndex}
  },
  actions: {
  },
  modules: {
  }
})
