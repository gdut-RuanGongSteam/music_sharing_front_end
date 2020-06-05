<template>
    <div class="operation">
      <el-button  size="mini" class="el-icon-caret-right" circle @click="playing()"></el-button>
      <el-button  size="mini" class="el-icon-download" @click="downloading()" circle></el-button>
      <el-button  size="mini" class="el-icon-plus" @click="addSong()" circle></el-button>
      <el-button  size="mini" class="el-icon-chat-dot-round" @click="turnToComment()" circle></el-button>
    </div>
</template>
<script>
import {mapMutations,mapGetters} from 'vuex'
import axios from 'axios'
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
    downloading(){
      const contain={
        song:this.content[this.rowIndex].name,
        singer:this.content[this.rowIndex].author,
        userName:this.content[this.rowIndex].sharerName,
        progress:0
      }
      let index=this.getDownloadlist.length
      let downUrl="http://120.24.35.66:8080/music_system/song/downloaderOneSong/"+this.content[this.rowIndex].path
      let fileName=this.content[this.rowIndex].name+"-"+this.content[this.rowIndex].author
      this.setDownload({operate:"push",download:contain})
      this.download(downUrl,index,fileName)
      console.log("下载:",this.getDownloadlist)
    },
    download (downUrl,index,fileName) {
				let that = this;
				axios.get(downUrl, {
					responseType: 'blob',
					headers: {
						'Content-Type': 'audio/mpeg;charset=utf-8',
					},
					onDownloadProgress (progressEvent) {
						that.changeprogress({downIndex:index,event:progressEvent})
					}
				}).then((res)=>{
					console.log(res);
					if (!res) {
						return
					}
					let url = window.URL.createObjectURL(new Blob([res.data], {type: "audio/mpeg"}));
					let link = document.createElement('a');
					link.style.display = 'none';
					link.href = url;
					link.setAttribute('download', fileName);
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				})
			},
    turnToComment() {
      this.$router.push('comment-page');
    },
    ...mapMutations({
      setPlaying:"setPlayList",
      setCurrentPlay:"setCurrentPlayIndex",
      setDownload:"setDownloadList",
      changeprogress:"setChangeProgress"
    })
  },
  computed:{
    ...mapGetters([
      "getPlayList",
      "getDownloadlist"
    ]),
  }
}
</script>
<style lang="less" scoped>
  .el-button--mini{
    font-size: 15px;
  }
</style>