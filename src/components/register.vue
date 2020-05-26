<template>
    <div class="register">
        <div>
            <el-input class="input_style" placeholder="请输入用户名" v-model="user_name" clearable></el-input>
        </div>
        <div>
            <el-input class="input_style" placeholder="请输入邮箱" v-model="postbox" clearable></el-input>
        </div>
        <div>
            <el-input class="input_style" placeholder="请输入密码" v-model="pwd" show-password ></el-input>
        </div>
        <div>
            <el-input class="input_style" placeholder="请再次确定密码" v-model="pwd1" show-password ></el-input>
        </div>
        <el-row >
            <el-col :span="14">
                <div><el-input class="input_style" placeholder="请输入验证码" v-model="yzm" clearable ></el-input></div>
            </el-col>
            <img src="../assets/yanzhengma.png" style="float :right; margin-left:15px">
        </el-row>

        <a href="/login"><span style=" float:left;color: #A9A9AB;font-size:12px;margin-top:20px">&lt;返回上一步</span></a>
        <el-button type="view" @click="register" round style="width:45%;">起飞</el-button>

    </div>
</template>

<script>
    export default {      
    data(){
        return {
            user_name:'',
            postbox:'',
            pwd:'',
            pwd1:'',
            yzm:'',          
        }
    },
    methods:{
      register(){
        //  const { name, pwd, $router} = this
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
.register{
    position:absolute;
    width:80%;
    left:10%;    
}
/*.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 4px;
}*/
</style>