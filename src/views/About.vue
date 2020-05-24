<template>
  <div class="about">
    <el-container>
      <el-container>
        <el-aside >
          <page-side/>
        </el-aside>
        <el-main>
          <div>
              <el-input></el-input>
          </div>
          <el-tabs type="border-card">
            <el-tab-pane label="最新">
              <div style=" height:490px;background-color:white;">
                <current/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="下载排行">
              <div style=" height:490px;background-color:white;">
                <current/>
              </div>
            </el-tab-pane>
            <el-tab-pane label="热门歌手">角色管理</el-tab-pane>
            <el-tab-pane label="标签">定时任务补偿</el-tab-pane>
            
          </el-tabs>
          <el-button @click="changePage()">test</el-button>
          <!-- <router-view></router-view> -->
        </el-main>
        <el-footer style="height:30px;backgrand-color:red;"></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import pageSide from'../components/page_side'
import current from'@/components/current'

export default {
  methods:{
    changePage(){
      this.$router.replace("personalCenter")
    }
  },
  components:{
    pageSide,
    current
  }
}
</script>
<style scoped>
.el-container {
  height: 100%;
}
.el-header{
  width: 100%;
  top:0;
  left: 0;
  height: 10%!important;
  position: absolute;

  background-color: #545c64;

}
.el-main{
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  height: 100%;
  /*background-color: #b3c0d1;*/
  color: #333;
}
.el-aside {
  display: block;
  position: absolute;
  width: 19% !important;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #545c64;
  overflow-y: scroll;
  padding-top: 5%;
}
</style>
