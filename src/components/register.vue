<template>
    <div class="register">
        <div>
            <el-input class="input_style" placeholder="请输入用户名" v-model="information.user_name" clearable></el-input>
        </div>
        <div>
            <el-input class="input_style" placeholder="请输入邮箱" v-model="information.postbox" clearable></el-input>
        </div>
        <div>
            <el-input class="input_style" placeholder="请输入密码" v-model="information.pwd" show-password maxlength="10" show-password ></el-input>
        </div>
        <div>
            <el-input class="input_style" placeholder="请再次确定密码" v-model="information.pwd1" show-password ></el-input>
        </div>
        <el-row >
            <el-col :span="12">
                <div><el-input class="input_style" placeholder="请输入验证码" v-model="information.yzm" clearable ></el-input></div>
            </el-col>
            <img src="../assets/image/yanzhengma.png" style="float :right; margin-left:15px">
        </el-row>
        <div style="margin-top:10px">
            <a href="/login"><span style=" float:left;color: #A9A9AB;font-size:12px;margin-top:20px">&lt;返回上一步</span></a>
            <el-button type="view" @click="register('information')" round style="width:45%;">起飞</el-button>
        </div>
    </div>
</template>

<script>
    export default {
    data(){
        const validatePass = (rule, value, callback) => {
            // let level = 0;
            // let containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);
            if (value.length <= 0) {
                this.pwdsecurity = 0;
                callback(new Error("密码不能为空"));
                return;
            }
        }
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error("密码不能为空"))
            } else if (value !== this.password.newpwd) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        var checkRegCode = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('验证码不能为空'));
            }
            setTimeout(() => {
            if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
            } else {
                if (value < 1000 || value>999999) {
                callback(new Error('验证码必须为4-6位数字'));
                } else {
                callback();
                }
            }
            }, 2000);
        };
        return {
            information:{
            user_name:'',
            postbox:'',
            pwd:'',
            pwd1:'',
            yzm:''
            },
         
         zhuce:false,

         rules :{
             user_name:[{
                required: true,
                message: "用户名不能为空",
             }],
             postbox:[{
                required: true,
                message: "邮箱不能为空",
             }],
             pwd:[{
                required: true,
                validator: validatePass,
                trigger: 'blur',
             }],
             pwd1:[{
                required: true,
                validator: validatePass2,
                trigger: 'blur',
             }],
             yzm:[{
                 required: true,
                 validator:checkRegCode,
                 trigger: 'blur',
             }]
         }         
        }  
    },
    methods:{
      register(inform){
        //  const { name, pwd, $router} = this
        // this.$router.push({
        //   name: "/",
        //   params: {
        //     username: this.name
        //   }
        // });
        this.zhuce=true;
        this.$refs[inform].validate((valid)=>{
            if(valid){
                alert('已上交！');
            }
            else {
                console.log('提交错误！');
                return false;
            }
        });
      },

    },
}
</script>

<style >
.register{
    position:absolute;
    width:80%;
    left:10%;
}
.input_style{
    width:100px ;
    margin-bottom: 10px;
    position:absolute;
    
  }
/*.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 4px;
}*/
</style>
