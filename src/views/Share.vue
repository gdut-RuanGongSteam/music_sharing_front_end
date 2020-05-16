<template>
    <div class="my-share-container">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm" label-position="left">
            <el-form-item label="歌名" prop="song">
                <el-input class="inputSize" v-model="ruleForm.userName" placeholder="歌名"></el-input>
            </el-form-item>
            <el-form-item label="歌手" prop="singer">
                <el-input class="inputSize" v-model="ruleForm.email" placeholder="歌手"></el-input>
            </el-form-item>
            <el-form-item label="文件" prop="file">
                <el-upload
                        class="upload-demo"
                        drag
                        action="#"
                        accept=".mp3"
                        :http-request="upload"
                        :limit="1"
                        multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传mp3文件</div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <div class="btn-container">
                    <el-button type="primary" @click="submitForm('ruleForm')">提交上传</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'my-sharing',
        data () {
            return {
                ruleForm: {
                    song: '',
                    singer: '',
                    file: {}
                },
                rules: {
                    song: { required: true, message: '请输入歌手姓名', trigger: 'blur' },
                    singer: { required: true, message: '请输入歌曲名称', trigger: 'blur' },
                    file: { required: true, message: '必须上传歌曲', trigger: 'blur' },
                }
            };
        },
        methods: {
            upload (file) {
                console.log(file.raw)
                let fd = new FormData();
                fd.append('file', file);    //传文件
                this.ruleForm.file = fd;
                return false//屏蔽了action的默认上传
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/style/my-share.less";
</style>
