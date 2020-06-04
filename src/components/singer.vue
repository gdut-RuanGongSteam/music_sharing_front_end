<template>
    <div class="singer">
        <div class="demo-image" v-for="(singer,index) in singersList" :key="index" @click="getSong(singer.name)">
            <el-image
            style="width: 150px; height: 150px"
            :src=singer.picturePath
            fit="fill"></el-image>
            <p class="title">{{singer.name}}</p>
        </div>
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
</style>