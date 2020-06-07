import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMusic:[],//最新歌曲
    downloadRank:[],//下载热度
    seachList:[],//搜索歌曲列表
    searchInput:"",//搜索输入的字符
    singer:[],//歌手
    playList:[],//播放列表
    currentPlayIndex:{//当前播放歌曲名和状态
      name:"",
      isPlay:false
    },
    downloadList:[],//下载列表
    user:{}//用户基本信息
  },
  mutations: {
    setCurrentMusicData(state,musicData){
      state.currentMusic = musicData
    },
    setdownloadRankData(state,musicData){
      state.downloadRank = musicData
    },
    setSearchList(state,searchData){
      state.seachList=searchData
    },
    setSingerList(state,singers){
      state.singer=singers
      const baseUrl="http://120.24.35.66:8080/files/pictures/"
      for(let i=0;i<state.singer.list.length;i++){
        if(!state.singer.list[i].picturePath){
          let randomIndex = Math.floor(Math.random()*(5-1+1))+1
          switch(randomIndex){
            case 1:state.singer.list[i].picturePath="https://s1.ax1x.com/2020/06/06/t6sbBn.jpg"; break;
            case 2:state.singer.list[i].picturePath="https://s1.ax1x.com/2020/06/06/t66dzD.jpg"; break;
            case 3:state.singer.list[i].picturePath="https://s1.ax1x.com/2020/06/06/t66seA.jpg"; break;
            case 4:state.singer.list[i].picturePath="https://s1.ax1x.com/2020/06/06/t6ciY6.jpg"; break;
            case 5:state.singer.list[i].picturePath="https://s1.ax1x.com/2020/06/06/t6cElD.jpg"; break;
          }
        }else{
          state.singer.list[i].picturePath=baseUrl+state.singer.list[i].picturePath
        }
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
    },
    setDownloadList(state,{operate,download}){
      if(operate=="push"){
        state.downloadList.push(download)
      }else if(operate=="shift"){
        state.downloadList.shift()
      }
    },
    setChangeProgress (state,{downIndex,event}) {
      Vue.set(state.downloadList[downIndex], "progress", Math.round(event.loaded / event.total * 100))
    },
    setUserData(state,loginUser){
      state.user=loginUser
    }
  },
  getters:{
    currentMusicDate:(state)=>{return state.currentMusic},
    downloadRankData:(state)=>{return state.downloadRank},
    searchResult:(state)=>{return state.seachList},
    getsearchInput:(state)=>{return state.searchInput},
    singerList:(state)=>{return state.singer},
    getPlayList:(state)=>{return state.playList},
    getCurrentPlayIndex:(state)=>{return state.currentPlayIndex},
    getDownloadlist:(state)=>{return state.downloadList},
    getUser:(state)=>{return state.user}
  },
  actions: {},
  modules: {
  }
})
