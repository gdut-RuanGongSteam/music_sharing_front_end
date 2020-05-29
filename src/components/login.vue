<template>
  <div>
        <a href="javascript:;" class="box2" style="font-size:15px;color:white;text-decoration: none">登录</a>
        <a href="/register" class="box1" style="font-size:15px;color:white;text-decoration: none">注册</a>
    <el-form ref="loginformRef" :model="loginform" :rules="loginformrules" label-width="70px" class="login_form">

      <el-form-item label="邮箱:" prop="postmax">
        <el-input v-model="loginform.postmax" prefix-icon="el-icon-user-solid" placeholder="请输入邮箱"  clearable></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pwd">
        <el-input v-model="loginform.pwd" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button icon="el-icon-s-promotion" type="primary" @click="login" round style="font-size:12px;">起飞</el-button>
        <el-button type="info" @click="resetform" round style="font-size:12px;">重置</el-button>
      </el-form-item>

    </el-form>
  </div>   
    
</template>

<script>
  export default {
    data(){

      // var validateName = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入用户名'));
      //   } 
      //   setTimeout(() => {
      //     if (this.ruleForm.name !== '我服了') {
      //       callback(new Error('名字不正确!'));
      //     }
      //     callback();
      //   }, 1000);
      // };


      //  var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   } 
      //   setTimeout(() => {
      //     if (this.ruleForm.pass !== '123456') {
      //       callback(new Error('密码不正确!'));
      //     }
      //     callback();
      //   }, 1000);
      // },


      return {
        loginform : {
          postmax: '',
          pwd : ''
        },

        loginformrules:{
          postmax:[
            { required:true, message:"请输入邮箱", trigger: 'blur'},
            {min:10,max:15, message:"长度在10到15位之间", trigger: 'blur'}
          ],
          pwd:[
            {required:true, message:"请输入密码", trigger: 'blur'},
            {min:6,max:10, message:"长度在6到10位之间", trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      resetform(){
        // console.log(this);
        this.$refs.loginformRef.resetFields();
      },

        
      login(){
        this.$refs.loginformRef.validate((valid)=>{
          if(valid){
            // const result = this.$http.post("login",this.loginform);
            //console.log(result);
            alert('登陆成功');
            //自定义跳转 ->首页
            let indexHref = '/about/find';
            window.location.href = indexHref;
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });   
      },
      
    }
           
}
</script>

<style scoped>
.btns{
  display:flex;/*弹性盒子*/
  justify-content:flex-end;/*居右对齐*/

}
.login_form{
  position:absolute;
  width:80%;
  padding:0 10px;
  top:30%;
  left:5%;
  /*background-color:red;*/
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
