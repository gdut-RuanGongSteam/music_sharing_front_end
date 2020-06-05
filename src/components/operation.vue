<template>
    <div class="operation">
      <el-button  size="mini" class="el-icon-caret-right" circle @click="playing()"></el-button>
      <el-button  size="mini" class="el-icon-download" circle></el-button>
      <el-button  size="mini" class="el-icon-plus" @click="addSong()" circle></el-button>
      <el-button  size="mini" class="el-icon-chat-dot-round" @click="turnToComment()" circle></el-button>
    </div>
</template>
<script>
import {mapMutations,mapGetters} from 'vuex'
export default {
  data() {
    return {
      playUrl:'',
      isPlay:false,
    }
  },
  props:{
    content:{
      type:Array,
      default:()=>{}
    },
    rowIndex:{
      type:Number,
      default:0
    }
  },
  methods:{
    // playing(){
    //   this.$emit("play")
    // },
    // createPlay(index){
    //         if(this.isPlay){
    //             document.body.removeChild(this.vedio)
    //             this.isPlay=false
    //         }
    //         this.vedio=document.createElement("audio")
    //         let baseSrc="http://120.24.35.66:8080/files/songs/"
    //         this.vedio.src=baseSrc+this.currentList[index].path
    //         // this.vedio.control
    //         console.log(this.vedio.src,index,this.currentList[index].path)
    //         document.body.appendChild(this.vedio)
    //         this.vedio.play()
    //         this.isPlay=true
    //         // document.body.removeChild(vedio)
    //     },
    playing(){
      const music={
        name: this.content[this.rowIndex].name,
        artist: this.content[this.rowIndex].author,
        url: 'http://120.24.35.66:8080/files/songs/'+this.content[this.rowIndex].path,
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: this.content[this.rowIndex].lyric,
      }
      if(this.getPlayList.length==0){
        this.setPlaying(music)
      }else{
        for(let i=0;i<this.getPlayList.length;i++){
          if(this.content[this.rowIndex].name===this.getPlayList[i].name){
            break
          }else if(i==this.getPlayList.length-1){
            this.setPlaying(music)
          }
        }
      }
      console.log("index:",this.rowIndex,this.getPlayList)
      this.setCurrentPlay({name:this.content[this.rowIndex].name,isPlay:true})
    },
    addSong(){
      const music={
        name: this.content[this.rowIndex].name,
        artist: this.content[this.rowIndex].author,
        url: 'http://120.24.35.66:8080/files/songs/'+this.content[this.rowIndex].path,
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: this.content[this.rowIndex].lyric,
      }
      this.setPlaying(music)
    },
    turnToComment() {
      this.$router.push({name: 'comment-page'});
    },
    ...mapMutations({
      setPlaying:"setPlayList",
      setCurrentPlay:"setCurrentPlayIndex"
    })
  },
  computed:{
    ...mapGetters([
      "getPlayList",
    ]),
  }
}
</script>
<style lang="less" scoped>
  .el-button--mini{
    font-size: 15px;
  }
</style>