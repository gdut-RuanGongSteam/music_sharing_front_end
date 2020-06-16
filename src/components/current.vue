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
                width="50">
            </el-table-column>
            <el-table-column
                prop=""
                label=""
                width="50">
                <template slot-scope="scope1">
                    <collection-button :rowIndex=scope1.$index :find="true" :collectionContent=currentList></collection-button>
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="歌曲"
                width="310">
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
                    <operate-pane  :rowIndex=scope.$index :content=currentList ></operate-pane>
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
    </div>
</template>
<script>
import operatePane from'@/components/operation'
import collectionButton from "@/components/collectionBtn"
import {mapMutations,mapGetters} from 'vuex'
import { request } from '../api/http'
export default {
    data() {
        return {
            tableData:[],
            isPlay:false,
            vedio:Object
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
                sortByDownloadNum:false
            }
            request("/song/songList",content,"get").then((e)=>{
                console.log(e)
                this.setCurrentData(e)
                this.tableData=this.currentList
            })
        },
        handleCurrentChange(val) {
            const content={
                pageNum:`${val}`,
                pageSize:15,
                sortByDownloadNum:false
            }
            request("/song/songList",content,"get").then((e)=>{
                console.log(e)
                this.setCurrentData(e)
                this.tableData=this.currentList
            })
            console.log(`当前页: ${val}`);
        },
        ...mapMutations({
            setCurrentData:"setCurrentMusicData"
        })
    },
    computed: {
        currentList(){
            return this.currentMusicDate.list
        },
        pages(){
            return this.currentMusicDate.pages*10
        },
        ...mapGetters([
            "currentMusicDate"
        ])
    },
    components:{
        operatePane,
        collectionButton
    }
}
</script>
<style scoped>
.pageControl{
    padding: 40px 0px 70px 0px;
}
</style>