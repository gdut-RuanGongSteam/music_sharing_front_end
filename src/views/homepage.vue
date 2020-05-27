<template>
    <div>
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
