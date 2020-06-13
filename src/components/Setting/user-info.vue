<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
    label-position="left"
  >
    <el-form-item label="头像" prop="imageUrl">
      <el-upload
        class="avatar-uploader"
        action="#"
        :accept="'image/*'"
        :http-request="uploadUserImage"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="用户名" prop="userName">
      <el-input class="inputSize" v-model="ruleForm.userName" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="gender">
      <el-radio-group class="radio-group" v-model="ruleForm.gender">
        <el-radio :label="1">女</el-radio>
        <el-radio :label="0">男</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <div class="btn-container">
        <el-button type="primary" @click="submitForm('ruleForm')">保存修改</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from "vuex";
import { request } from "../../api/http";
import { uploadImage } from "../../api/upload";

export default {
  name: "user-info",
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        userName: "",
        gender: 1
      },
      rules: {
        userName: { required: true, message: "请输入用户名", trigger: "blur" }
      }
    };
  },
  created() {
    this.imageUrl = this.imgUrl;
    this.ruleForm.userName = this.getUser.name;
    this.ruleForm.gender = this.getUser.gender ? 1 : 0;
  },
  methods: {
    uploadUserImage(file) {
      let content = new FormData();
      content.append("file", file.file);
      uploadImage(content).then(res => {
        this.imageUrl = `http://120.24.35.66:8080/files/pictures/${res.data}`;
        this.$message.success("上传图片成功");
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // let content = {
          //   ...this.ruleForm,
          //   phone: 0
          // };
          let content = new FormData();
          content.append('gender', this.ruleForm.gender);
          content.append('name', this.ruleForm.userName);
          content.append('phone', 0);
          request("user/updateMessage", content, "POST").then(res => {
            if (res) {
              this.$message.success("设置成功!")
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    ...mapGetters(["getUser"]),
    imgUrl() {
      if (this.getUser.head_picture) {
        return `http://120.24.35.66:8080/files/pictures/${this.getUser.head_picture}`;
      } else {
        return "https://s1.ax1x.com/2020/05/06/YVUz7V.jpg";
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/user-info.less";

.radio-group {
  height: 40px;
  display: flex;
  align-items: center;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
