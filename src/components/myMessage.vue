<template>
    <el-card class="collection-card">
        <div slot="header" class="clearfix">
            <span class="title">我的消息</span>
        </div>
        <div v-for="(val,key,index) in myMessageList" :index=index :key=key>
            <Comment :commentList=val :pageNum=getMyMessage.pageNum></Comment>
        </div>
      <el-pagination
        background
        class="pageControl"
        @current-change="handleMyMessage"
        layout="prev, pager, next"
        :total="messagePage">
      </el-pagination>
    </el-card>
</template>

<script>
import Comment from './comment'
import {mapMutations,mapGetters} from 'vuex'
import { request } from '../api/http'
    export default {
        name: 'myMessage',
        components: {
            Comment
        },
        data () {
            return {
                
            }
        },
        mounted(){
            this.getMymessage()
        },
        methods: {
            getMymessage(){
                const content={
                    pageNum:1,
                    pageSize:15
                }
                request("/comment/getMyCommentList",content,"get").then((e)=>{
                    this.setMyMessage(e)
                })
            },
            handleMyMessage(val){
                 const content={
                    pageNum:`${val}`,
                    pageSize:15
                }
                request("/comment/getMyCommentList",content,"get").then((e)=>{
                    this.setMyMessage(e)
                })
            },
            ...mapMutations({
                setMyMessage:"setMyMessageData"
            })
        },
        computed:{
            ...mapGetters([
                "getMyMessage"
            ]),
            myMessageList(){
                return this.getMyMessage.list
            },
            messagePage(){
                return this.getMyMessage.pages*10
            }
        }
    }
</script>

<style scoped>
.collection-card{
    min-width: 700px;
}
.clearfix{
    text-align: left;
}
.title {
    font-size: 17px;
    font-weight: 600;
}
 .el-card__body {
    padding-top: 0;
}
</style>
