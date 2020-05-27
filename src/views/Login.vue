<template>
    <div class="homepage">
        <el-container>
            <el-main>
                <img class="theimg" src="../assets/login3.png">
                <img class="secimg" src="../assets/login2.png">
                <img class="firimg" src="../assets/login1.png">
            </el-main>
            <el-aside >
                <logining></logining>

                <a href="javascript:;" class="box2" style="font-size:12px;color:white;text-decoration: none">登录</a>
                <a href="/register" class="box1" style="font-size:12px;color:white;text-decoration: none">注册</a>
            </el-aside >

        </el-container>
    </div>
</template>

<script>
    import logining from '@/components/login.vue'
    export default {
    components: {
        logining,

    },
}
</script>

<style scoped>
.theimg{top:10%; left:50%;width:500px;position:absolute}
.secimg{top:10%; left:15%;width:500px;position:absolute}
.firimg{top:30%; left:35%;width:500px;position:absolute}

.el-container{
     height: 100%;
     position:relative;
}
.el-main{
    /* background-color: #018383;*/
    position:absolute;
    width: 75%!important;
    top: 0;
    bottom: 0;
    left:0;
    overflow-y: scroll;
}
.el-main img{
  position: absolute;
}

.el-aside{
   /*display: block;*/
  /* position: relative; */
  /* overflow-y: scroll; */
  display: block;
  position: absolute;
  width: 25%!important;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #005d6c;
  overflow-y: scroll;
  padding-top: 5%;
  /* width: 20%; */
}
/*.el-card{
    margin: 50px 50px 100px 50px;
}*/

::-webkit-scrollbar{/*取消滚动条*/
	display: none;
}
</style>
