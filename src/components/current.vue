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
                <template slot-scope="scope">
                    <operate-pane @play="createPlay(scope.$index)"></operate-pane>
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
        createPlay(index){
            if(this.isPlay){
                document.body.removeChild(this.vedio)
                this.isPlay=false
            }
            this.vedio=document.createElement("audio")
            let baseSrc="http://120.24.35.66:8080/files/songs/"
            this.vedio.src=baseSrc+this.currentList[index].path
            // this.vedio.control
            console.log(this.vedio.src,index,this.currentList[index].path)
            document.body.appendChild(this.vedio)
            this.vedio.play()
            this.isPlay=true
            // document.body.removeChild(vedio)
        },
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
        operatePane
    }
}
</script>
<style scoped>
.pageControl{
    padding: 40px 0px 70px 0px;
}
</style>