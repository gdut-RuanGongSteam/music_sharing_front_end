<template>
  <div class="about">
    <el-container>
      <el-container>
        <el-aside >
          <page-side/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>
          <pageFoot/>
        </el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import pageSide from'../components/page_side'
import pageFoot from '@/components/page_foot'

export default {
  methods:{
    changePage(){
      this.$router.replace("personalCenter")
    }
  },
  components:{
    pageSide,
    pageFoot
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
  width: 81%;
  height: 100%;
  /*background-color: #b3c0d1;*/
  color: #333;
}
.el-aside {
  display: block;
  position: absolute;
  width: 17% !important;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #545c64;
  overflow-y: scroll;
  padding-top: 3%;
}
.el-footer{
  position: absolute;
  width: 100%;
  height: 5%;
  background-color: black;
  bottom: 0;
  padding: 0;
}
</style>
