<template>
    <div>
        <el-container>
            <el-main>   
                <img class="theimg" src="../assets/image/zhuce3.png">
                <img class="secimg" src="../assets/image/zhuce2.png">
                <img class="firimg" src="../assets/image/zhuce1.png">
            </el-main>
            <el-aside >
                <el-header>
                    <a href="/login" class="box2" style="font-size:12px;color:white;text-decoration: none">登录</a>
                    <a href="/register" class="box1" style="font-size:12px;color:white;text-decoration: none">注册</a>
                </el-header>
                <registering></registering>
                <el-footer>
                
                </el-footer>
                
            </el-aside >    
        
        </el-container>
    </div>
</template>

<script>
    import registering from '@/components/register.vue'
    export default {
    components: {
        registering,
        
    },
}
</script>

<style scoped>
/*.theimg{top:60px; left:50%;width:500px;}
.secimg{top:60px; left:100px;width:500px;}
.firimg{top:180px; left:200px;width:500px;}
*/
.theimg{ top:90px; left:570px;width:500px;}
.secimg{top:90px; left:156px;width:500px;}
.firimg{top:290px; left:330px;width:500px;}

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
  
  display: block;
  position: absolute;
  width: 25%!important;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #005d6c;
  overflow-y: scroll;
  padding-top: 5%;
 
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
.box2{
        position:absolute;
        right:80px;
        top:0;
}
.box1{
        position:absolute;
        right:40px;
        top:0;
}
</style>