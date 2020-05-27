<template>
    <div class="my-share-container">



        <el-form :model="uploadData" :rules="rules" ref="uploadData" label-width="50px" label-position="left">
            <el-form-item label="歌名" prop="song">
                <el-input class="inputSize" v-model="uploadData.name" placeholder="歌名"></el-input>
            </el-form-item>
            <el-form-item label="歌手" prop="singer">
                <el-input class="inputSize" v-model="uploadData.author" placeholder="歌手"></el-input>
            </el-form-item>
            <el-form-item label="文件" prop="file">
                <el-upload
                        drag
                        action="#"
                        accept=".mp3"
                        :auto-upload="false"
                        :on-change="fileChange"
                        :limit="1">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传mp3文件</div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <div class="btn-container">
                    <el-button type="primary" @click="submitData('uploadData')">提交上传</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import upload from '../api/upload'

    export default {
        name: 'my-sharing',
        data () {
            return {
                uploadData: {
                    name: '',
                    author: '',
                    file: {}
                },
                rules: {
                    name: [{ required: true, message: '请输入歌手姓名', trigger: 'blur' }],
                    author: [{ required: true, message: '请输入歌曲名称', trigger: 'blur' }],
                    file: [{ required: true, message: '必须上传歌曲', trigger: 'blur' }],
                }
            };
        },
        methods: {
            fileChange (file) {
                console.log(file.raw);
                this.uploadData.file = file.raw;

                return false   //屏蔽了action的默认上传
            },
            submitData (formName) {
                let content = new FormData();
                content.append('userId', "1")
                content.append('name', this.uploadData['name']);
                content.append('author', this.uploadData['author']);
                content.append('file', this.uploadData['file']);
                for (let [a, b] of content.entries()) {
                    console.log(a, b);
                }
                // let content = {
                //     ...this.uploadData,
                //     userId : "1"
                // }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        upload(content).then((res)=>{
                            console.log(res)
                        }).catch((e)=>{
                            console.log("error", e);
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/style/my-share.less";
</style>
