<template>
<div>
    <div class="singer">
        <div class="demo-image" v-for="(singer,index) in singersList" :key="index" @click="getSong(singer.name)">
            <el-image
            style="width: 150px; height: 150px"
            :src=singer.picturePath
            fit="fill"></el-image>
            <p class="title">{{singer.name}}</p>
        </div>
        
    </div>
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
import {mapMutations,mapGetters} from 'vuex'
import { request } from '../api/http'

export default {
    data() {
        return {
            singers:[]
        }
    },
    mounted(){
        this.getSingers()
    },
    methods:{
        getSingers(){
            const content={
                pageNum:1,
                pageSize:20
            }
            request("singer/singerList",content,"get").then((e)=>{
                this.setSingers(e)
                console.log(e)
            })
        },
        getSong(name){
        const content={
          pageNum:1,
          pageSize:15,
          name:name
        }
        this.setInputData(name)
        request("song/findSongByNameOrAuthor",content,"get").then((e)=>{
          this.setSearch(e)
          this.$router.push("/search")
        })
      },
      handleCurrentChange(val) {
            const content={
                pageNum:`${val}`,
                pageSize:20
            }
            request("singer/singerList",content,"get").then((e)=>{
                this.setSingers(e)
                console.log(e)
            })
        },
        ...mapMutations({
            setSingers:"setSingerList",
            setSearch:"setSearchList",
            setInputData:"setSearchInput"
        })
    },
    computed:{
        singersList(){
            return this.singerList.list
        },
        pages(){
            return this.singerList.pages*10
        },
        ...mapGetters([
            "singerList"
        ])
    }
}
</script>
<style scoped>
.singer{
    float: left;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
}
.demo-image{
    margin: 20px;
    cursor: pointer;
}
.pageControl{
    position: absolute;
    bottom: -10%;
    left: 42%;
    padding: 40px 0px 70px 0px;
}
</style>