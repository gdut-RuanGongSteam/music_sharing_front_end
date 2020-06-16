<template>
	<div class="container">
		<div class="head-container">
			<img :src="userPiture" alt="head">
		</div>
		<div class="comment-container">
			<div class="reply">
				<span class="otherUser" @click="turnToPersonalCenter(commentList.user)">{{commentList.user.name}}</span>
				：<span>{{commentList.content}}</span>
			</div>
			<div class="comment" v-if="isExist">
				<span class="darr">
					<i class="bd">◆</i>
					<i class="bg">◆</i>
				</span>
				<span class="otherUser" @click="turnToPersonalCenter(commentList.father_user)">{{commentList.father_user.name}}</span>
				：<span>{{commentList.father_comment.content}}</span>
			</div>
			<div class="footer-container">
				<div class="date">{{time}}</div>
				<div>
					<a href="javascript:void(0)" class="reply-btn" @click="deleteComment()" v-if="isLoginUser">删除</a>
					<span class="sep" v-if="isLoginUser">|</span>
					<i :class="['el-icon-supportzan', {'praise':isPraise}]"  @click="praising()"></i>
					<span> ({{commentList.praise_number}})</span>
					<span class="sep">|</span>
					<a href="javascript:void(0)" class="reply-btn" @click="isShow()">回复</a>
				</div>
			</div>
			<div class="comment replying" v-if="status">
				<el-input v-model="commentData" maxlength="150"  autosize show-word-limit type="textarea"></el-input>
				<el-button type="primary" class="reply" size="small" @click="reply()">回复</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import { request } from '../api/http'
import bestComment from "../mixin/bestComment"
import currentComment from "../mixin/curentComment"
import { mapGetters, mapMutations } from 'vuex'

	export default {
		mixins:[bestComment,currentComment],
		name: "comment",
		props:{
			commentList:{
				type:Object,
      			default:()=>{}
			},
			pageNum:{
				type:Number,
				default:1
			}
		},
		data() {
			return {
				commentData:"",
				status:false,
			}
		},
		mounted(){
			this.commentData=''
		},
		methods:{
			isShow(){
				this.status=!this.status
			},
			reply(){
				const replyContent={
					comment_id:this.commentList.comment_id,
					content:this.commentData
				}
				request("/comment/addReply",replyContent,"get").then((e)=>{
					if(e){
						this.currentComment(this.pageNum,this.commentList.song_id)
						this.bestComment(this.pageNum,this.commentList.song_id)
						this.$message.success('回复成功！')
					}else{
						this.$message.error('回复失败！')
					}
				}),
				this.commentData=''
				this.status=false
			},
			deleteComment(){
				this.$confirm('确定删除该评论, 是否继续?', '提示', {	
          			confirmButtonText: '确定',
          			cancelButtonText: '取消',
          				type: 'warning'
        		}).then(() => {
					const content={
						comment_id:this.commentList.comment_id
					}
					request("/comment/deleteComment",content,"get").then((e)=>{
						if(e){
							this.currentComment(1,this.commentList.song_id)
							this.bestComment(1,this.commentList.song_id)
							request("/comment/getMyCommentList",{ pageNum:1, pageSize:15 },"get").then((e)=>{
                   				 this.setMyMessage(e)
                			})
							this.$message.success('删除成功！')
						}else{
							this.$message.error('删除失败！')
						}
					})
        		}).catch(() => {
          			this.$message({
            			type: 'info',
           		 		message: '已取消删除'
          			});          
       			});
			},
			praise(){
				const content={
					comment_id:this.commentList.comment_id
				}
				request("/comment/praise",content,"get").then((e)=>{
					if(e){
						this.currentComment(this.pageNum,this.commentList.song_id)
						this.bestComment(this.pageNum,this.commentList.song_id)
					}
				})
			},
			cancelPraise(){
				const content={
					comment_id:this.commentList.comment_id
				}
				request("/comment/unPraise",content,"get").then((e)=>{
					if(e){
						this.currentComment(this.pageNum,this.commentList.song_id)
						this.bestComment(this.pageNum,this.commentList.song_id)
					}
				})
			},
			praising(){
				if(!this.isPraise){
					this.praise()
				}else{
					this.cancelPraise()
				}
			},
			turnToPersonalCenter(userObj){
            	if(userObj.id==this.getUser.id){
                	this.$router.push("/personalCenter")
            	}else{
					window.sessionStorage.setItem("otehrUser",JSON.stringify(userObj));
					this.setOtherUser(JSON.parse(window.sessionStorage.getItem("otehrUser")))
                	this.$router.push("/otherUserCenter")
				}
			  },
			...mapMutations({
				setOtherUser:"setOtherUserData",
				setMyMessage:"setMyMessageData"
			})
		},
		computed: {
			...mapGetters([
				"getUser"
			]),
			userPiture(){
				if(this.commentList.user.head_picture){
                	return "http://120.24.35.66:8080/files/pictures/"+this.commentList.user.head_picture
            	}else{
               	 return "https://s1.ax1x.com/2020/05/06/YVUz7V.jpg"
            	}
			},
			time(){
				function addDateZero(num) {
		            return (num < 10 ? "0" + num : num);
		        }
		        let d = new Date(this.commentList.time);
		        let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds());
		        return formatdatetime;
			},
			isPraise(){
				if(this.commentList.praise_id!==null){
					return true
				}else{
					return false
				}
			},
			isLoginUser(){
				if(this.commentList.user_id===this.getUser.id){
					return true
				}else{
					return false
				}
			},
			isExist(){
				if(this.commentList.father_user==null){
					return false
				}else{
					return true
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	a {
		color: #0c73c2;
		text-decoration: none;
	}

	.container {
		display: flex;
		font-family: Arial, Helvetica, sans-serif;
		padding: 10px;
		border-bottom: 1px dotted #ccc;

		// 头像框
		.head-container {
			margin-right: 14px;

			img {
				width: 50px;
				height: 50px;
			}
		}

		.comment-container {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			font-size: 13px;
			width: 100%;
			.otherUser{
				cursor: pointer;
				color: #3087c9;
			}
			// 回复
			.reply {
				margin-bottom: 12px;
			}

			// 评论
			.comment {
				position: relative;
				width: calc(100% - 50px);
				padding: 10px 15px;
				background-color: #f4f4f4;
				text-align: left;
				border: 1px solid #dedede;

				.darr {
					position: absolute;
					top: -7px;
					left: 20px;
					font-size: 15px;
					line-height: 14px;
					/*border: 1px solid #dedede;*/

					i {
						font-style: normal;
						position: absolute;
						top: 0;
						left: 0;
					}

					.bg {
						color: #f4f4f4;
						top: 1px;
					}

					.bd {
						color: #dedede;
					}
				}
			}

			.footer-container {
				width: calc(100% - 20px);
				display: flex;
				justify-content: space-between;
				margin-top: 10px;

				.date {
					float: left;
					font-size: 12px;
					color: #999;
				}

				.el-icon-supportzan {
					cursor: pointer;
					color: #1b82f1;
					font-size: 14px;
				}
				.praise{
					color: red;
				}
				.sep {
					margin: 0 8px;
					color: #ccc;
				}

				.reply-btn {
					font-size: 13px;
					color: #666;

					&:hover {
						text-decoration: underline;
					}
				}
			}
			.replying{
				margin-top: 15px;
			}
			.reply{
				float:right;
				margin: 10px 0 0 10px;
			}
		}
	}
</style>
