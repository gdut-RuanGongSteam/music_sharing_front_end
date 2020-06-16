<template>
    <div>
        <div class="block">
            <div class="headImg">
                <el-avatar shape="square" :size="110" :fit="fit" :src=userImg></el-avatar>
                <span class="PageName">{{user.name}}的主页</span>
            </div>
            <el-button @click="goBack()" class="backBtn" round>返回</el-button>
        </div>
        <hr/>
        <el-card class="collection-card">
		    <div slot="header" class="clearfix">
			    <span class="title">{{user.name}}的分享</span>
		    </div>
		    <el-table
				    ref="multipleTable"
				    :data="tableData"
				    tooltip-effect="dark"
				    style="width: 100%">
			    <el-table-column
					    prop="name"
					    label="歌曲">
			    </el-table-column>
			    <el-table-column
					    prop="author"
					    label="歌手">
			    </el-table-column>
			    <el-table-column
					    prop="downloaderNumber"
					    label="下载次数">
			    </el-table-column>
			    <el-table-column
					    label="操作">
				    <template slot-scope="scope">
                        <operate-pane  :rowIndex=scope.$index :content=currentList ></operate-pane>
                    </template>
			    </el-table-column>
		    </el-table>
		    <div class="pagination-container">
			    <el-pagination
           		    background
            	    @current-change="handleSharingChange"
            	    layout="prev, pager, next"
            	    :total="sharePage">
                </el-pagination>
		    </div>
	    </el-card>
        <el-card class="collection-card">
		    <div slot="header" class="clearfix">
			    <span class="title">{{user.name}}的收藏</span>
		    </div>
		    <el-table
				    ref="multipleTable"
				    :data="tableData1"
				    tooltip-effect="dark"
				    style="width: 100%">
			    <el-table-column
					    prop="name"
					    label="歌曲">
			    </el-table-column>
			    <el-table-column
					    prop="author"
					    label="歌手">
			    </el-table-column>
			    <el-table-column
                    prop="sharerName"
                    label="分享者"
                    width="190">
                </el-table-column>
			    <el-table-column
					    label="操作">
				    <template slot-scope="scope1">
                        <operate-pane  :rowIndex=scope1.$index :content=currentList ></operate-pane>
                    </template>
			    </el-table-column>
		    </el-table>
		    <div class="pagination-container">
			    <el-pagination
            	    class="pageControl"
           		    background
            	    @current-change="handleCollectionChange"
            	    layout="prev, pager, next"
            	    :total="collectPage">
                </el-pagination>
		    </div>
	    </el-card>
    </div>
</template>
<script>
import { request } from '../api/http'
import operatePane from'@/components/operation'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            tableData:[],
            tableData1:[],
            collection:{},
            sharing:{}
        }
    },
    mounted(){
        console.log("OtherUser???",this.user)
        this.getCollection(1,this.user.id)
        this.getSharing(1,this.user.name)
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        getCollection(index,uId){
            const content={
                pageNum:index,
                pageSize:15,
                userId:uId
            }
            request("song/getCollectSongByUserId",content,"get").then((e)=>{
                this.collection=e
                this.tableData1=e.list
            })
        },
        getSharing(index,name){
            const content={
                pageNum:index,
                pageSize:15,
                sharerName:name
            }
            request("song/getShareSongBySharerName",content,"get").then((e)=>{
                this.sharing=e
                this.tableData=e.list
            })
        },
        handleSharingChange(val){
            this.sharing(`${val}`,this.user.name)
        },
        handleCollectionChange(val){
            this. getCollection(`${val}`,this.user.id)
        }
    },
    computed:{
        ...mapGetters([
            "getOtherUser"
        ]),
        user(){
            return this.getOtherUser
        },
        sharePage(){
            return this.sharing.pages*10
        },
        collectPage(){
            return this.collection.pages*10
        },
        userImg(){
            if(this.user.head_picture){
                return "http://120.24.35.66:8080/files/pictures/"+this.user.head_picture
            }else{
                return "https://s1.ax1x.com/2020/05/06/YVUz7V.jpg"
            }
            
        }
    },
    components:{
        operatePane
    }
}
</script>
<style scoped>
.block{
    position: relative;
    height: 120px;
}
.headImg{
    position: absolute;
    left: 0;
}
.PageName{
    font-size: 20px;
    margin-left: 20px;
    font-weight: 550;
}
.backBtn{
    position: absolute;
    right: 0;
    bottom: 0;
}
.el-card{
    margin-top: 70px;
}
hr {
  height: 2px;
  background-color: #ec0f2d;
  border: none;
}
.pageControl{
    padding: 40px 0px 70px 0px;
}
</style>