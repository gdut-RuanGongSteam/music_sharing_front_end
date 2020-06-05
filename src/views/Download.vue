<template>
	<div>
		<!-- <el-card> -->
		<p class="title">下载中心</p>
		<hr/>
		<el-table
				ref="multipleTable"
				:data="tableData"
				tooltip-effect="dark"
				style="width: 100%">
			<!-- <el-table-column
					type="selection"
					width="55">
			</el-table-column> -->
			<el-table-column
					prop="song"
					width="290"
					label="歌名">
			</el-table-column>
			<el-table-column
					prop="singer"
					label="歌手">
			</el-table-column>
			<el-table-column
					label="分享者">
				<template slot-scope="scope">
					<router-link :to="{ name: 'personalCenter'}">{{scope.row.userName}}</router-link>
				</template>
			</el-table-column>
			<el-table-column
					label="进度">
				<template slot-scope="scope">
					<el-progress
							v-if="scope.row.progress !== 100"
							:text-inside="true"
							:stroke-width="24"
							:percentage="scope.row.progress"
							status="success"></el-progress>
					<div v-else>下载完成</div>
				</template>
			</el-table-column>
		</el-table>
		<!-- </el-card> -->
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import {mapMutations,mapGetters,mapActions} from 'vuex'

	export default {
		name: "download",
		data () {
			return {
				tableData:[]
			}
		},
		mounted() {
			this.tableData=this.getDownloadlist
		},
		methods: {
			// download (url,fileName) {
			// 	let that = this;
			// 	axios.get(url, {
			// 		responseType: 'blob',
			// 		headers: {
			// 			'Content-Type': 'audio/mpeg;charset=utf-8',
			// 		},
			// 		onDownloadProgress (progressEvent) {
			// 			Vue.set(that.tableData[0], "progress", Math.round(progressEvent.loaded / progressEvent.total * 100));
			// 		}
			// 	}).then((res)=>{
			// 		console.log(res);
			// 		if (!res) {
			// 			return
			// 		}
			// 		let url = window.URL.createObjectURL(new Blob([res.data], {type: "audio/mpeg"}));
			// 		let link = document.createElement('a');
			// 		link.style.display = 'none';
			// 		link.href = url;
			// 		link.setAttribute('download', fileName);
			// 		document.body.appendChild(link);
			// 		link.click();
			// 		document.body.removeChild(link);
			// 	})
			// },
			...mapMutations({
				setDownload:"setDownloadList",
			}),
		},
		computed:{
			...mapGetters([
				"getDownloadlist",
			]),
			Downloadlist(){
				return this.getDownloadlist
			},
		},
		watch:{
			Downloadlist:{
				handler(val){
					this.tableData=val
				},
				deep:true
			}
		}
	}
</script>

<style scoped>
	hr {
		margin-block-end: 20px;
	}

	.title {
		color: #444;
		font-size: 25px;
		font-weight: 600;
		margin: 0 0 15px 15px;
		text-align: left;
	}

	a {
		color: #409EFF;
		text-decoration: none;
	}

	/*/deep/ th:nth-child(5) {*/
	/*	text-align: center;*/
	/*}*/
</style>
