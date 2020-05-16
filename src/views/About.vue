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
      </el-container>
    </el-container>
  </div>
</template>
<script>
import pageSide from'../components/page_side'

export default {
  components:{
    pageSide
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
