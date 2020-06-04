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
        <div class="help" >
            <span style="float:left; color: #A9A9AB; font-size:12px;">记住我</span>
            <input class="tick" name="" type="checkbox" value="" checked="checked"> 
            <a href="http://localhost:8080/">
              <span style="float: right;color: #A9A9AB;font-size:12px;" cursor:pointer>忘记密码？</span>
            </a>
        </div>
        
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

<style scoped>
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
  .help{
    position:absolute;
    margin-top: 20px;
    width:100%;
  }
  .tick{
    position:absolute;
    left:35px;
    width:15px;
  }

 /* .login_style{
    width: 20%;
  }*/
</style>
