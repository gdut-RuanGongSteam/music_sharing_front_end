<template>
    <div class="login_container">
        <div class="login_box">
        <registering/>
        </div>
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
.login_container{
    background:url(../assets/image/register.jpg) no-repeat;
    background-size:cover;
    width: 100%;
    height: 100%;
    opacity: 0.9;/*设置透明度*/
    position: fixed;
}
.login_box{
    width:35%;
    height:75%;
    background-color:#fff;
    border-radius:10px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background:rgba(0,0,0,0.4);
}

</style>
