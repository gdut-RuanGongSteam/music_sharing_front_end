<template>
    <div class="singer">
        <div class="demo-image" v-for="(singer,index) in singersList" :key="index">
            <el-image
            style="width: 125px; height: 125px"
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
        ...mapMutations({
            setSingers:"setSingerList"
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
}
.demo-image{
    margin: 20px;
    cursor: pointer;
}
</style>