<template>
    <div>
        <el-container>
            <el-main>
                <img class="theimg" src="../assets/login3.png">
                <img class="secimg" src="../assets/login2.png">
                <img class="firimg" src="../assets/login1.png">
            </el-main>
            <el-aside >
                <el-header>
                    <a href="javascript:;" class="box2" style="font-size:12px;color:white;text-decoration: none">登录</a>
                    <a href="/register" class="box1" style="font-size:12px;color:white;text-decoration: none">注册</a>
                </el-header>
                 <logining></logining>
                <el-footer>
                     <div class="help" >
                        <span>记住我<input class="tick" name="" type="checkbox" value="" checked="checked"></span>
                        <a href="http://localhost:8080/">
                            <span style="float: right;color: #A9A9AB;font-size:13px;" cursor:pointer>忘记密码？</span>
                        </a>
                    </div>
                </el-footer>
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
}
.el-main{
     background-color: #018383;
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
.el-header{
    position:absolute;
    top:0;
    width:100%;
    /*background-color:red;*/
}

::-webkit-scrollbar{/*取消滚动条*/
	display: none;
}

.help{
    position:absolute;
    left:0;
    margin-top: 250px;
    width:100%;
    /*background-color:red;*/
  }
.help span{
    float:left;
    color: #A9A9AB;
    font-size:13px;
    padding:20px;
    /*background-color:green;*/
}
.tick{
    position:absolute;
    float:left;
    width:13px;
  }
</style>
