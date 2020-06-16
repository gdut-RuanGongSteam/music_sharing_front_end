<template>
<el-card class="commentCard">
  <span style="font-size: 20px;float:left;">评论</span>
  <el-button style="float:right;" @click="goback()" round>返回</el-button>
  <hr/>
  <div class="container1">
    <div class="head-container">
		  <img :src="userImg" alt="head">
	  </div>
    <div class="comment">
      <span>{{getUser.name}}：</span>
		  <el-input v-model="userComment" placeholder="留下你的精彩评论吧！" maxlength="150" :autosize="{ minRows: 2, maxRows: 4}"  show-word-limit type="textarea"></el-input>
		  <el-button type="primary" class="reply" size="small" @click="comment()">评论</el-button>
	  </div>
  </div>
  <el-tabs type="border-card" class="showComment">
    <el-tab-pane label="精彩评论">
      <div v-for="(val,key,index) in bestCommentList" :index=index :key=key>
        <Comment :commentList=val :pageNum=getBestComment.pageNum></Comment>
      </div>
      <el-pagination
        background
        class="pageControl"
        @current-change="handleBestComment"
        layout="prev, pager, next"
        :total="bestpage">
      </el-pagination>
    </el-tab-pane>
    <el-tab-pane label="最新评论">
      <div v-for="(val,key,index) in currentCommentList" :index=index :key=key>
        <Comment :commentList=val :pageNum=getCurrentComment.pageNum></Comment>
      </div>
      <el-pagination
        background
        class="pageControl"
        @current-change="handleCurrentComment"
        layout="prev, pager, next"
        :total="currentpage">
      </el-pagination>  
    </el-tab-pane>
  </el-tabs>
</el-card>
</template>

<script>
import Comment from '../components/comment'
import { mapGetters } from 'vuex'
import { request } from '../api/http'
import bestComment from "../mixin/bestComment"
import currentComment from "../mixin/curentComment"

export default {
  mixins:[bestComment,currentComment],
  name: 'comment-page',
  components: {
    Comment
  },
  data() {
    return {
      userComment:"",
    };
  },
  mounted(){
    this.currentComment(1,this.getSongId)
    this.bestComment(1,this.getSongId)
  },
  methods: {
    comment(){
		  let reg="^[ ]+$"
		  let re =new RegExp(reg)
      if(re.test(this.userComment)||this.userComment==""){
        this.$message.error('请不要输入空数据！')
        return
      }
      if(this.getUser==null){
        this.$message.error('请登录后再评论！')
        return
      }
      const content={
        song_id:this.getSongId,
        content:this.userComment
      }
      request("/comment/addComment",content,"get").then((e)=>{
        if(e){
          this.currentComment(1,this.getSongId)
          this.bestComment(1,this.getSongId)
          this.$message.success('评论成功！')
        }else{
          this.$message.error('评论失败！')
        }
      })
      this.userComment=""
    },
    handleBestComment(val){
      this.bestComment(`${val}`,this.getSongId)
    },
    handleCurrentComment(val){
      this.currentComment(`${val}`,this.getSongId)
    },
    goback(){
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters([
      "getBestComment",
      "getUser",
      "getCurrentComment",
      "getSongId"
    ]),
    currentpage(){
      return this.getCurrentComment.pages*10
    },
    bestpage(){
      return this.getBestComment.pages*10
    },
    userImg(){
      return "http://120.24.35.66:8080/files/pictures/"+this.getUser.head_picture
    },
    currentCommentList(){
      return this.getCurrentComment.list
    },
    bestCommentList(){
      return this.getBestComment.list
    }
  },
  watch:{
    // currentCommentList:{
    //   handler(val){

    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
.pageControl{
    padding: 20px 0px 60px 0px;
}
.commentCard{
  height: 100%;
  overflow:auto;
}
.showComment{
  margin-top: 50px;
}
hr {
  height: 2px;
  background-color: #ec0f2d;
  border: none;
  margin-top: 50px;
}
.container1 {
		display: flex;
		font-family: Arial, Helvetica, sans-serif;
		padding: 10px;
		border-bottom: 0px dotted #ccc;
    .head-container {
      margin-right: 14px;

	    img {
		    width: 50px;
		    height: 50px;
	    }
    }
    .comment{
      position: relative;
	    width: calc(100% - 50px);
	    padding: 10px 15px;
	    background-color:white;
	    text-align: left;
	    border: 0px solid #dedede;
      height: 100px;
      .reply{
	      float:right;
	      margin: 10px 0 80px 0px;
      }
    }
  }
</style>
