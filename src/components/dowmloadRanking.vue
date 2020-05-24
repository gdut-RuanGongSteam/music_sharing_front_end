<template>
    <div>
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
                prop="address"
                label="分享者"
                width="190">
            </el-table-column>
            <el-table-column
                prop="name"
                label="操作"
                width="160">
                <template >
                    <operate-pane></operate-pane>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pageControl"
            background
            layout="prev, pager, next"
            :total="pages">
        </el-pagination>
    </div>
</template>
<script>
import operatePane from'@/components/operation'
import {mapMutations,mapGetters} from 'vuex'
import { request } from '../api/http'
export default {
    data() {
        return {
            tableData:[]
        }
    },
    mounted(){
        this.getSongs()
    },
    methods:{
        getSongs(){
            const content={
                pageNum:1,
                pageSize:15,
                sortByDownloadNum:true
            }
            request("/song/songList",content,"get").then((e)=>{
                console.log(e,this.sort)
                this.setownloadRank(e)
                this.tableData=this.downloadRankList
            })
        },
        ...mapMutations({
            setownloadRank:"setownloadRankData"
        })
    },
    computed: {
        downloadRankList(){
            return this.downloadRankData.list
        },
        pages(){
            return this.downloadRankData.pages*10
        },
        ...mapGetters([
            "downloadRankData"
        ])
    },
    components:{
        operatePane
    }
}
</script>
<style scoped>
.pageControl{
    padding: 40px 0px 40px 0px;
}
</style>