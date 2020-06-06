<template>
  <div class="my-share-container">
    <el-form
      :model="uploadData"
      :rules="rules"
      ref="uploadData"
      label-width="50px"
      label-position="left"
    >
      <el-form-item label="歌名" prop="name">
        <el-input class="inputSize" v-model="uploadData.name" placeholder="歌名"></el-input>
      </el-form-item>
      <el-form-item label="歌手" prop="author">
        <el-input class="inputSize" v-model="uploadData.author" placeholder="歌手"></el-input>
      </el-form-item>
      <el-form-item label="文件" prop="file">
        <el-upload
          drag
          action="#"
          accept=".mp3"
          :auto-upload="false"
          :on-change="fileChange"
          :limit="1"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传mp3文件</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <div class="btn-container">
          <el-button type="primary" :loading="loading" @click="submitData('uploadData')">提交上传</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import upload from "../api/upload";

export default {
  name: "my-sharing",
  data() {
    return {
      loading: false,
      uploadData: {
        name: "",
        author: "",
        file: {}
      },
      rules: {
        name: [{ required: true, message: "请输入歌手姓名", trigger: "blur" }],
        author: [
          { required: true, message: "请输入歌曲名称", trigger: "blur" }
        ],
        file: [
          {
            required: true,
            validator: this.validatefile,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    fileChange(file) {
      console.log(file.raw);
      this.uploadData.file = file.raw;

      return false; //屏蔽了action的默认上传
    },
    validatefile(rule, value, callback) {
      if (value instanceof File) {
        callback();
      } else {
        callback(new Error("必须上传歌曲"));
      }
    },
    submitData(formName) {
      this.$refs[formName].validate(valid => {
        this.loading = true;
        if (valid) {
          let content = new FormData();
          content.append("userId", this.user.id);
          content.append("name", this.uploadData["name"]);
          content.append("author", this.uploadData["author"]);
          content.append("file", this.uploadData["file"]);
          console.log('this.uploadData["file"]: ', this.uploadData["file"]);
          upload(content)
            .then(res => {
              this.loading = false;
              if (res) {
                this.$message.success("提交成功");
                this.initUpload();
              } else {
                this.$message.error("提交失败");
              }
            })
            .catch(e => {
              console.log("error", e);
            });
        }
      });
    },
    initUpload() {
      this.uploadData = {
        name: "",
        author: "",
        file: {}
      };
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/my-share.less";
</style>
