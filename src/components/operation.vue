<template>
    <ul class="horizontal-list">
        <li><i class="el-icon-video-play"></i></li>
        <li><i class="el-icon-download"></i></li>
        <li><i class="el-icon-plus"></i></li>
    </ul>
</template>
<style lang="less" scoped>
.horizontal-list{
    position: relative;  /*设置层级需定位 */
    height: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 2;
    list-style-type:none;
  }
  .horizontal-list li{
    margin-left: 25px;
    float: right;
  }
  .horizontal-list li i{
      font-size: 20px;
      color: black;
  }
</style>