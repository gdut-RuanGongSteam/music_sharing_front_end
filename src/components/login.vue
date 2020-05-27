<template>
    <div class="login">
        <div>
            <el-input class="input_style" placeholder="请输入用户名" v-model="name" clearable ></el-input>
            <span v-if="error.name" class="err-msg">{{error.name}}</span>
        </div>
        <div>
            <el-input class="input_style" placeholder="请输入密码" v-model="pwd" show-password ></el-input>
            <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
        </div>
        <el-button type="view" @click="login" round style="font-size:12px;">起飞</el-button>
              
      </div>  
    
</template>

<script>
  export default {
    name: "Login",
    data(){
      return {
        name: '',
        pwd : '',
        error : {
          name: '',
          pwd : ''
        }
      }
    },
    methods:{
      login(){
        const { name, pwd, $router} = this
        this.$router.push({
          name: "/",
          params: {
            username: this.name
          }
        });
      },
      
    },
    
           
}
</script>

<style>
  .login{
    position:absolute;
    width:80%;
    
    margin-top: 100px;
    left:10%;
  }
  .input_style{
    width:100px ;
    margin-bottom: 10px;
    position:absolute;
    
  }
  

 /* .login_style{
    width: 20%;
  }*/
</style>
