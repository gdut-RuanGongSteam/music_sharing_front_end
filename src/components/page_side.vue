<template>
    <div class="page_side">
        <el-row class="tac" >
            <el-col :span="4">
                <el-menu
                    :default-active="$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router>
                    <div>
                        <el-avatar src="https://s1.ax1x.com/2020/05/06/YVUz7V.jpg" shape="circle" :size="120"></el-avatar>
                        <p style="color:white;">123456</p>
                    </div>
                    <hr/>
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">发现</span>
                    </el-menu-item>
                    <el-menu-item index="/personalCenter">
                        <i class="el-icon-s-custom"></i>
                        <span slot="title">个人中心</span>
                    </el-menu-item>
                    <el-menu-item index="/about/share">
                        <i class="el-icon-share"></i>
                        <span slot="title">上传分享</span>
                    </el-menu-item>
                    <el-menu-item index="/about/download" >
                        <i class="el-icon-download"></i>
                        <span slot="title">下载</span>
                    </el-menu-item>
                    <el-menu-item index="/about/setting">
                        <i class="el-icon-setting"></i>
                        <span slot="title">设置</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        alert(1)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
<style scoped>
.page_side{
    /* position:absolute; */
    background-color: #545c64;
    height: 100%;
    width: 100%;
    margin-right: 1%;
}
.el-col-4{
    width: 100%;
}
.el-menu{
    border-right: solid 0 #e6e6e6;
}
.el-menu-item{
    padding: 0 60px;
}
</style>
