<template>
	<div>
		<p class="title">下载中心</p>
		<hr/>
		<el-table
				ref="multipleTable"
				:data="tableData"
				tooltip-effect="dark"
				style="width: 100%">
			<el-table-column
					type="selection"
					width="55">
			</el-table-column>
			<el-table-column
					prop="song"
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
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'

	export default {
		name: "download",
		data () {
			return {
				tableData: [{
					song: "屋顶",
					singer: "周杰伦",
					userName: "郑靓",
					progress: 0,
				}, {
					song: "十年",
					singer: "陈奕迅",
					userName: "郑靓",
					progress: 100,
				}],
			}
		},
		mounted() {
			this.download();
		},
		methods: {
			download () {
				let that = this;
				axios.get(`http://120.24.35.66:8080/music_system/song/downloaderOneSong/d55d87cc-31eb-42c8-98ab-208c31e89ff8.mp3`, {
					responseType: 'blob',
					headers: {
						'Content-Type': 'audio/mpeg;charset=utf-8',
					},
					onDownloadProgress (progressEvent) {
						Vue.set(that.tableData[0], "progress", Math.round(progressEvent.loaded / progressEvent.total * 100));
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
					link.setAttribute('download', "");
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				})
			},
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
