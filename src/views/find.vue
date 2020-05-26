<template>
    <div>
          <div class="search">
            <el-form label-width="3%" :model="userInput" status-icon ref="userInput" @submit.native.prevent>
			 		 		  <el-form-item label=""  prop="inputData">
			 		 		    <el-input type="inputData" v-model="userInput.inputData" placeholder="歌曲/歌手" prefix-icon="el-icon-search" style="width: 40%;" @keyup.enter.native="search()"></el-input>
			 		 		  </el-form-item>
			 		  </el-form>
          </div>
          <el-tabs type="border-card" class="tab">
            <el-tab-pane label="最新">
              <div style=" height:520px;background-color:white;">
                <current/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="下载排行">
              <div style=" height:520px;background-color:white;">
                <dowmloadRank/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="热门歌手">
              <div style=" height:520px;background-color:white;">
                <singer/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="标签">定时任务补偿</el-tab-pane>
            
          </el-tabs>
    </div>
</template>
<script>
import current from'@/components/current'
import singer from'@/components/singer'
import dowmloadRank from'@/components/dowmloadRanking'
import {mapMutations,mapGetters} from 'vuex'
import { request } from '../api/http'

export default {
    data() {
      return {
        userInput:{
					inputData:''
				}
      }
    },
    methods:{
      search(){
        const content={
          pageNum:1,
          pageSize:15,
          name:this.userInput.inputData
        }
        request("song/findSongByNameOrAuthor",content,"get").then((e)=>{
          console.log(e,this.userInput.inputData)
          this.setSearch(e)
          this.$router.push("/search")
        })
      },
      ...mapMutations({
        setSearch:"setSearchList"
      })
    },
    computed:{

    },
    components:{
        current,
        dowmloadRank,
        singer
    }
}
</script>
<style>
.el-tabs--border-card>.el-tabs__content,.el-tabs__content{
  overflow: auto;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  font-size: 30px;
  padding-bottom: 15px;
}
.el-tabs__item{
  padding: 0px 30px;
  height: 45px;
}
.el-tabs__nav-scroll {
  height: 44px;
}
.search{
  flex-direction: row-reverse;
  flex-wrap:nowrap;
}
</style>