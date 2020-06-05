<template>
  <div class="edit-infos">
    <el-form
      v-loading="updating"
      label-width="100px"
      :model="password"
      :rules="rules"
      status-icon
      ref="modifypassword"
      label-position="left"
    >
      <el-form-item label="当前密码" prop="curpwd">
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content">
            输入当前账号密码以确认身份
            <br />其中密码包含大小字母、数字、标点符号中的三种
          </div>
          <el-input
            type="password"
            class="inputinfo"
            placeholder="请输入密码"
            v-model="password.curpwd"
            show-password
            maxlength="20"
          ></el-input>
        </el-tooltip>
      </el-form-item>
      <el-form-item label="新密码" prop="newpwd">
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content">
            ① 长度应为6-20个字符
            <br />② 必须包含大写字母、小写字母、数字、标点符号中的三种
          </div>
          <el-input
            type="password"
            class="inputinfo"
            placeholder="设置新的密码"
            v-model="password.newpwd"
            show-password
          ></el-input>
        </el-tooltip>
      </el-form-item>
      <el-progress
        :strokeWidth="20"
        :text-inside="true"
        :format="format"
        :percentage="pwdsecurity"
        :color="customColors"
      ></el-progress>
      <el-form-item label="重复密码" prop="newpwd2">
        <el-tooltip class="item" effect="dark" content="请重新输入一次新密码" placement="top">
          <el-input
            type="password"
            class="inputinfo"
            placeholder="请再次输入新密码"
            v-model="password.newpwd2"
            show-password
          ></el-input>
        </el-tooltip>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitChange('modifypassword')">
          <span v-if="updating">
            正在保存
            <i class="el-icon-loading"></i>
          </span>
          <span v-else>保存修改</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { request } from '../../api/http'

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      let level = 0;
      let containSpecial = RegExp(
        /[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/
      );
      if (value.length <= 0) {
        this.pwdsecurity = 0;
        callback(new Error("密码不能为空"));
        return;
      }
      if (value.length < 6) {
        callback(new Error("密码长度应不小于6位"));
        this.pwdsecurity = 20;
      } else if (value.length > 20) {
        callback(new Error("密码太长,应在6-20位范围内."));
        return;
      }
      if (value.length >= 10) level = 18;
      else level = value.length;
      if (/[a-z]/.test(value)) level += 20;
      if (/[A-Z]/.test(value)) level += 20;
      if (/[0-9]/.test(value)) level += 20;
      if (containSpecial.test(value)) level += 20;
      this.pwdsecurity = level >= 60 ? 100 : level;
      if (level < 60)
        callback(
          new Error(
            "*tips:密码需要包含大写字母、小写字母、数字、标点符号中的三种*"
          )
        );
      else callback();
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (value !== this.password.newpwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      password: {
        newpwd: "",
        newpwd2: "",
        curpwd: ""
      },
      updating: false,
      pwdsecurity: 0,
      customColors: [
        {
          color: "#f56c6c",
          percentage: 30
        },
        {
          color: "#e6a23c",
          percentage: 59
        },
        {
          color: "#5cb87a",
          percentage: 100
        }
      ],
      rules: {
        curpwd: [
          {
            required: true,
            message: "密码不能为空"
          }
        ],
        newpwd: [
          {
            required: true,
            validator: validatePass
          }
        ],
        newpwd2: [
          {
            required: true,
            validator: validatePass2,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    changeRoute(routeName) {
      this.$router.push({ name: routeName });
    },
    edit() {
      this.password.curpwd = "";
      this.password.newpwd = "";
      this.password.newpwd2 = "";
    },
    submitChange(name) {
      this.updating = true;
      this.$refs[name].validate(valid => {
        if (valid) {
            let content = {
                password: this.password.curpwd,
                newPassword: this.newPassword
            };
            request("user/updatePassword", content, "post").then((res)=>{
                console.log(res)
            })
        }
        this.updating = false;
      });
    },
    format(percentage) {
      if (percentage === 0) return "";
      if (percentage < 60) return "密码强度：弱";
      if (percentage < 80) return "密码强度：一般";
      if (percentage <= 100) return "密码强度：强";
    },
    errorMessage(content) {
      this.$message({
        showClose: true,
        message: content,
        duration: 1500,
        type: "error"
      });
    },
    successMessage(content) {
      this.$message({
        showClose: true,
        message: content,
        duration: 1500,
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
/deep/ .el-form-item__content {
  display: flex;
}

.inputinfo {
  max-width: 300px;
  min-width: 100px;
}

.el-progress {
  margin-top: 10px;
  width: 300px;
  position: relative;
  top: -12px;
  left: 100px;
}

.el-progress-bar__outer {
  height: 10px;
}

.el-progress-bar {
  padding-right: 0;
}

/deep/ .el-form-item__error {
  display: flex;
  position: static;
  margin-left: 6px;
  padding: 0;
  align-items: center;
}
</style>
