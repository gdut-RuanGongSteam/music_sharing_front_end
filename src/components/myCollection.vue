<template>
	<el-card class="collection-card">
		<div slot="header" class="clearfix">
			<span class="title">我的收藏</span>
		</div>
		<el-table
				ref="multipleTable"
				:data="tableData"
				tooltip-effect="dark"
				style="width: 100%">
            <el-table-column
                prop=""
                label=""
                width="50">
                <template slot-scope="scope1">
                    <collection-button :rowIndex=scope1.$index :find="false" :collectionContent=currentList></collection-button>
                </template>
            </el-table-column>
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
				<template slot-scope="scope">
                    <operate-pane  :rowIndex=scope.$index :content=currentList ></operate-pane>
                </template>
			</el-table-column>
		</el-table>
		<div class="pagination-container">
			<el-pagination
            	class="pageControl"
           		background
            	@current-change="handleCurrentChange"
            	layout="prev, pager, next"
            	:total="pages">
        </el-pagination>
		</div>
	</el-card>
</template>

<script>
import operatePane from'@/components/operation'
import collectionButton from "@/components/collectionBtn"
import {mapMutations,mapGetters} from 'vuex'
import { request } from '../api/http'

	export default {
		name: 'mySharing',
		data () {
			return {
				tableData: []
			}
		},
		mounted(){
        	this.getSongs()
    	},
		methods: {
			getSongs(){
            	const content={
                	pageNum:1,
                	pageSize:15,
                	userId:this.user.id
            	}
            	request("song/getCollectSongByUserId",content,"get").then((e)=>{
                	console.log(e)
                	this.setMyCollection(e)
                	this.tableData=this.currentList
           	 	})
        	},
        	handleCurrentChange(val) {
            	const content={
                	pageNum:`${val}`,
                	pageSize:15,
                	userId:this.user.id
            	}
            	request("song/getCollectSongByUserId",content,"get").then((e)=>{
                	console.log(e)
                	this.setMyCollection(e)
                	this.tableData=this.currentList
            	})
           	 	console.log(`当前页: ${val}`);
			},
			...mapMutations({
				setMyCollection:"setMyCollectionList",
			})
		},
		computed: {
			...mapGetters([
				"getUser",
				"getMyCollection"
			]),
			currentList(){
           	 return this.getMyCollection.list
        	},
			pages(){
				return this.getMyCollection.pages*10
			},
			user(){
				return JSON.parse(window.sessionStorage.getItem("user"))
			}
		},
		components:{
            operatePane,
            collectionButton
        },
        watch:{
            currentList:{
                handler(val){
                    this.tableData=this.currentList
                },
                deep:true
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
	.pagination-container {
		margin-top: 20px;
	}
</style>
