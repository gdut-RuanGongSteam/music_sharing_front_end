<template>
    <div class="operation">
      <el-button  size="mini" class="el-icon-caret-right" circle @click="playing()"></el-button>
      <el-button  size="mini" class="el-icon-download" circle></el-button>
      <el-button  size="mini" class="el-icon-plus" circle></el-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      playUrl:''
    }
  },
  methods:{
    playing(){
      this.$emit("play")
    }
  }
}
</script>
<style lang="less" scoped>
  .el-button--mini{
    font-size: 15px;
  }
</style>