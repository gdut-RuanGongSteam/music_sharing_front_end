<template>
	<el-card class="collection-card">
		<div slot="header" class="clearfix">
			<span class="title">我的分享</span>
		</div>
		<el-table
				ref="multipleTable"
				:data="tableData"
				tooltip-effect="dark"
				style="width: 100%">
			<el-table-column
					prop="song"
					label="歌名">
			</el-table-column>
			<el-table-column
					prop="singer"
					label="歌手">
			</el-table-column>
			<el-table-column
					prop="downloadNum"
					label="下载次数">
			</el-table-column>
			<el-table-column
					label="操作">
				<template >
					<el-button size="mini" type="info" icon="el-icon-caret-right" circle></el-button>
					<el-button size="mini" icon="el-icon-bottom" circle></el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="pagination-container">
			<el-pagination
					background
					layout="prev, pager, next"
					:total="1000">
			</el-pagination>
		</div>
	</el-card>
</template>

<script>
	export default {
		name: 'mySharing',
		data () {
			return {
				tableData: [{
					song: "屋顶",
					singer: "周杰伦",
					downloadNum: "999",
				}, {
					song: "十年",
					singer: "陈奕迅",
					downloadNum: "111111111",
				}]
			}
		},
		methods: {

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
