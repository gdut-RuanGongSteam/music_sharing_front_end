<template>
    <div class="homepage">
        <el-container>
            <el-main>   
                <img class="theimg" src="../assets/zhuce3.png">
                <img class="secimg" src="../assets/zhuce2.png">
                <img class="firimg" src="../assets/zhuce1.png">
            </el-main>
            <el-aside >
                <registering></registering>
            
                <a href="/login" class="box2" style="font-size:12px;color:white;text-decoration: none">登录</a>
                <a href="/register" class="box1" style="font-size:12px;color:white;text-decoration: none">注册</a>
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

<style>

</style>