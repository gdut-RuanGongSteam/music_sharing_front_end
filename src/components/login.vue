<template>
  <div>
    <a href="javascript:;" class="box2" style="font-size:15px;color:white;text-decoration: none">登录</a>
    <a href="/register" class="box1" style="font-size:15px;color:white;text-decoration: none">注册</a>
    <el-form
      ref="loginformRef"
      :model="loginform"
      :rules="loginformrules"
      label-width="70px"
      class="login_form"
    >
      <el-form-item label="邮箱:" prop="postmax">
        <el-input
          v-model="loginform.postmax"
          prefix-icon="el-icon-user-solid"
          placeholder="请输入邮箱"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pwd">
        <el-input
          v-model="loginform.pwd"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
          show-password
        ></el-input>
        
      </el-form-item>
      <el-form-item class="btns">
        <el-button
          icon="el-icon-s-promotion"
          type="primary"
          @click="login"
          round
          style="font-size:12px;"
        >起飞</el-button>
        <el-button type="info" @click="resetform" round style="font-size:12px;">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { request } from '../api/http';
import {mapMutations} from 'vuex'

export default {
  data() {
    const checkEmail = (rule, value, callback) => {
      //邮箱正则表达式
      const postbox = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (postbox.test(value)) {
        return callback();
      }
      callback(new Error("请输入合法邮箱"));
    };

    return {
      loginform: {
        postmax: "",
        pwd: ""
      },

      loginformrules: {
        postmax: [
          { required: true, message: "请输入邮箱", trigger: "blur" }
          // {validator:checkEmail,  trigger: 'blur'}
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 10, message: "长度在5到10位之间", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
    resetform(){
      // console.log(this);
      this.$refs.loginformRef.resetFields();
    },       
    login(){
      this.$refs.loginformRef.validate(async valid=>{ //async
        if(!valid) return; 
        let loginFormData=new FormData();
        loginFormData.append("mailbox",this.loginform.postmax);
        loginFormData.append("password",this.loginform.pwd);
        console.log(loginFormData)
        const {data:result} =await this.$http.post("user/login",loginFormData);
        console.log(result);
        if(!result.flag) return this.$message.error(result.msg[0]);
        // this.$message.error("登陆成功");
          
        // window.sessionStorage.setItem("token",result.data.token);//保存token
        request("user/getLoginUser","","get").then((e)=>{
          console.log(e)
          if(!e.enabled){
            return this.$message.error("账号尚未激活，请前往邮箱激活你的账号!");
          }
          this.setUser(e)
          this.$router.push("/about/find");
          this.$message({
            message:"登陆成功！欢迎您，"+e.name,
            type:"success"
          })
        })
        // this.$router.push("/about/find");
      });   
    },
    ...mapMutations({
      setUser:"setUserData"
    })
  }
};
</script>
<style>
.login_form .el-form-item__label {
  color: white;
}
</style>
<style scoped>
.btns {
  display: flex; /*弹性盒子*/
  justify-content: flex-end; /*居右对齐*/
}
.login_form {
  position: absolute;
  width: 80%;
  padding: 0 10px;
  top: 30%;
  left: 5%;
  /*background-color:red;*/
}
.box2 {
  position: absolute;
  right: 80px;
  top: 0;
}
.box1 {
  position: absolute;
  right: 40px;
  top: 0;
}
</style>