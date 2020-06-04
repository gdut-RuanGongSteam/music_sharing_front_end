<template>
    <div class="homepage ">
      <h1  class="home ">来日方长何惧车遥马慢</h1>
      <el-button @click="changePage()" round>join us</el-button> 
   </div>
</template>

<script>
export default {
  methods:{
        changePage(){
            this.$router.replace("/login")
        },
    },
}
</script>

<style scoped>
  .homepage{
        margin:  auto;
        position:absolute;
        
        height:100%;
        width:100%;
        top:0;
        background-color: #018383;
        
    }
  .home{
    margin-top:200px;
    color:white;
  }
</style>
