<template>
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
		<el-form-item label="头像" prop="imageUrl">
			<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
				<img v-if="imageUrl" :src="imageUrl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
		</el-form-item>
		<el-form-item label="用户名" prop="userName">
			<el-input class="inputSize" v-model="ruleForm.userName" placeholder="用户名"></el-input>
		</el-form-item>
		<el-form-item label="邮箱" prop="email">
			<el-input class="inputSize" v-model="ruleForm.email" placeholder="邮箱"></el-input>
		</el-form-item>
		<el-form-item>
			<div class="btn-container">
				<el-button type="primary" @click="submitForm('ruleForm')">保存修改</el-button>
<!--				<el-button @click="resetForm('ruleForm')">重置</el-button>-->
			</div>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		name: "user-info",
		data () {
			return {
				imageUrl: "",
				ruleForm: {
					userName: '',
					email: ''
				},
				rules: {}
			};
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/png';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../assets/style/user-info.less";
</style>
