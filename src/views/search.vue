<template>
    <div>
        <div class="search">
            <el-form label-width="3%" :model="userInput" status-icon ref="userInput" @submit.native.prevent>
			 	<el-form-item label=""  prop="inputData">
			 		<el-input type="inputData" v-model="userInput.inputData" placeholder="歌曲/歌手" prefix-icon="el-icon-search" style="width: 40%;" @keyup.enter.native="search()"></el-input>
			 	</el-form-item>
			</el-form>
        </div>
        <el-card>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%">
            <!-- @selection-change="handleSelectionChange"> -->
            <el-table-column
                prop="name"
                label="序号"
                type="index"
                width="70">
            </el-table-column>
            <!-- <el-table-column
                type="selection"
                width="70">
            </el-table-column> -->
            <el-table-column
                prop="name"
                label="歌曲"
                width="340">
            </el-table-column>
            <el-table-column
                prop="author"
                label="歌手"
                width="190">
            </el-table-column>
            <el-table-column
                prop="sharerName"
                label="分享者"
                width="190">
            </el-table-column>
            <el-table-column
                prop="name"
                label="操作"
                width="180">
                <template slot-scope="scope">
                    <operate-pane  :rowIndex=scope.$index :content=searchList ></operate-pane>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pageControl"
            background
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="pages">
        </el-pagination>
        </el-card>
    </div>
</template>
<script>
import operatePane from'@/components/operation'
import {mapMutations,mapGetters} from 'vuex'
import { request } from '../api/http'
export default {
    data() {
        return {
            userInput:{
					inputData:''
				},
            tableData:[],
            isPlay:false,
            vedio:Object
        }
    },
    mounted(){
        this.tableData=this.searchList
    },
    methods:{
        handleCurrentChange(val) {
            const content={
                pageNum:`${val}`,
                pageSize:15,
                name:this.getsearchInput
            }
            console.log(this.getsearchInput)
            request("song/findSongByNameOrAuthor",content,"get").then((e)=>{
                console.log(e)
                this.setSearch(e)
                this.tableData=this.searchList
            })
            console.log(`当前页: ${val}`);
        },
        search(){
            this.setInputData(this.userInput.inputData)
            const content={
                pageNum:1,
                pageSize:15,
                name:this.getsearchInput
            }
            request("song/findSongByNameOrAuthor",content,"get").then((e)=>{
                console.log(e,this.userInput.inputData)
                this.setSearch(e)
            })
        },
        ...mapMutations({
            setSearch:"setSearchList",
            setInputData:"setSearchInput"
        })
    },
    computed: {
        searchList(){
            return this.searchResult.list
        },
        pages(){
            return this.searchResult.pages*10
        },
        ...mapGetters([
            "searchResult",
            "getsearchInput"
        ])
    },
    watch:{
        searchList:{
            handler(val){
                this.tableData=val
            }
        }
    },
    components:{
        operatePane
    }
}
</script>
<style scoped>
.pageControl{
    padding: 40px 0px 70px 0px;
}
</style>