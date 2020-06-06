<template>
    <div>
        <a href="/login" class="box2" style="font-size:15px;color:white;text-decoration: none">登录</a>
        <a href="javascript:;" class="box1" style="font-size:15px;color:white;text-decoration: none">注册</a>
        <el-form ref="registerformRef" :model="registerform" :rules="registerformrules" label-width="80px" class="register_form">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerform.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"  clearable></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="postbox">
                <el-input v-model="registerform.postbox" prefix-icon="el-icon-user-solid" placeholder="请输入邮箱" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="registerform.pwd" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="pwd1">
                <el-input v-model="registerform.pwd1" prefix-icon="el-icon-lock" placeholder="请再次输入密码"  show-password></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verifyCode">
                <el-row :gutter="0">
                <el-col :span="10">
                    <el-input  v-model="registerform.verifyCode" placeholder="请输入验证码" clearable></el-input>     
                </el-col>
                <img :src="verify"/>
                <span class="verify" @click="changeVerify()">换一张</span>
                </el-row>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="enterRegister" icon="el-icon-s-promotion"  round style="font-size:12px;">起飞</el-button>
                <el-button type="info" @click="resetform" round style="font-size:12px;">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { request } from '../api/http'
import axios from 'axios'
export default {   
    data(){
        const checkEmail = (rule,value,callback)=>{
            //邮箱正则表达式
            const postbox =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
            if(postbox.test(value)){
                return callback();
            }
            callback(new Error("请输入合法邮箱"))
        };
        const validatepwd = (rule, value, callback) => {
            if (value.length <= 0) {
                callback(new Error("密码不能为空"));
            }
            if (value.length < 6) {
                callback(new Error("密码长度应不小于6位"));
            } 
            if (value.length > 20) {
                callback(new Error("密码太长,应在6-20位范围内."));
            }
            else {
                callback()
            }      
        };
        const validatepwd1 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('密码不能为空'));
            } else if (value !== this.registerform.pwd) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };    
        return{
            registerform:{
                username:'',
                postbox:'',
                pwd:'',
                pwd1:'',
                verifyCode:""
            },

            registerformrules:{
                username:[
                    {required:true, message:"请输入用户名", trigger: 'blur'}
                ],
                postbox:[
                    { required:true, message:"请输入邮箱", trigger: 'blur'},
                    {validator:checkEmail, trigger: 'blur'}
                ],
                pwd:[
                    {required:true, validator: validatepwd, trigger: 'blur'},                   
                ],
                pwd1:[                  
                    {required:true, validator: validatepwd1, trigger: 'blur'},                    
                ],
            },
            verify:{}
        }
        
    },
    mounted(){
        this.changeVerify()
    },
    methods:{
        changeVerify(){
            axios.defaults.withCredentials=true
            axios.get('http://120.24.35.66:8080/music_system/user/verifyCode',{
                params:{
                    // key:this.key                           //这里是请求接口书需要传的数据
                },
                    responseType: 'arraybuffer'   //这里是声明期望返回的数据类型
            }).then(response => {              //这里的第一次处理后台返回来的二进制留数据 转化为base64
                                                       //这里的data数据是后台返回来的，这里的key是params中的键值（byte）
                return 'data:image/png;base64,' + btoa(
                    new Uint8Array(response.data).reduce((data, key) => data + String.fromCharCode(key), '')
                )
            }).then( data =>{                   //这一次箭头函数是依赖于第一次.then函数处理的data值
                this.verify=data
            })
        },
        resetform(){
        this.$refs.registerformRef.resetFields();
        },
        // register(){
        //     this.$refs.registerformRef.validate(async(valid)=>{//async
        //     console.log("1234",valid)
        //     if(!valid) return; 
        //     const {data:result} =await this.$http.get("user/registered",this.registerform.username,this.registerform.postbox,this.registerform.pwd,this.registerform.verifyCode);//this.registerform
        //     console.log(result);
        //     if(!result.flag) return this.$message.error("注册失败");
        //     this.$message.error("注册成功");
        //     this.$router.push('/login');

            // 这是模仿的可能有语法错误
            //     this.axios({
            //         url:'http://120.24.35.66:8080/music_system/'+'user/registered',
            //         method:'post',
            //         data:{
            //             username:this.username,
            //             postbox:this.postbox,
            //             pwd:this.pwd
            //         }
            //     }).then(response=>{
            //         let _this=this;
            //         let flag=response.data.flag;
            //         let msg=response.data.msg;
            //         _this.$message({
            //             message:msg,
            //             onClose(){
            //                 if(flag){
            //                     //保持登录
            //                     sessionStorage.uesr_name=response.data.user.username
            //                     //跳转到登录界面
            //                     _this.$router.push('/login');
            //                 }
            //             }
            //         })
            //     }).catch(error=>{
            //         this.$message({
            //             message: error.response.data.result
            //         })
            //     })
            // });
            
        // }
        enterRegister(){
            this.$refs.registerformRef.validate(async(valid,object)=>{
                if(valid){
                    const content={
                        name:this.registerform.username,
                        mailbox:this.registerform.postbox,
                        password:this.registerform.pwd,
                        verifyCode:this.registerform.verifyCode
                    }
                    console.log(content)
                    request("user/registered",content,"get").then((e)=>{
                        console.log(e)
                        if(e.flag){
                            this.$router.push("/login")
                            this.$message({
                                message: e.msg[0],
                                type: 'success'
                            });
                        }else{
                            this.$message({
                                message: e.msg[0],
                                type: 'error'
                            });
                        }
                    })
                }else{
                    this.$message({
                        message: '注册失败，请重新注册！',
                        type: 'error'
                    });
                }
            })
        }
    }
}
</script>
<style>
.register_form .el-form-item__label {
  color: white;
}
</style>
<style scoped>
.btns{
  display:flex;/*弹性盒子*/
  justify-content:flex-end;/*居右对齐*/
    margin-top:50px;
    /*background-color:red;*/   
}
.register_form{
  position:absolute;
  width:80%;
  padding:0 10px;
  top:20%;
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
.verify{
    margin-left: 10px;
    cursor: pointer;
}
.verify:hover{
    color: blue;
    text-decoration: underline;
}
</style>