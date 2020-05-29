<template>
    <div class="login_container">
        <div class="login_box">
        <logining/>
        </div>
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
.login_container{
    background:url(../assets/image/login.jpg) no-repeat;
    background-size:cover;
    width: 100%;
    height: 100%;
    opacity: 0.9;/*设置透明度*/
    position: fixed;
}
.login_box{
    width:40%;
    height:60%;
    background-color:#fff;
    border-radius:10px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background:rgba(0,0,0,0.3);
}

</style>
