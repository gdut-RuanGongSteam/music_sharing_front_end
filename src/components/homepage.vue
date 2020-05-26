<template>
    <div class="home">
      <h1 style= "color:white;">来日方长何惧车遥马慢</h1>
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

<style>
  .home{
    margin-top:200px;
  }
</style>
