<template>
    <div class="homepage">
        <home></home>                                  
        <a href="/login" class="box2" style="font-size:12px;color:white;text-decoration: none">登录</a>
        <a href="register" class="box1" style="font-size:12px;color:white;text-decoration: none">注册</a>
           
    </div>
</template>

<script>
import home from '@/components/homepage.vue'
export default {
    components:{
        home,
    },
}
</script>

<style> 
    .homepage{
        margin:  auto;
        position:absolute;
        
        height:100%;
        width:100%;
        top:0;
        background-color: #018383;
        
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