<template>
    <div>
        <p class="title">账号管理</p>
        <hr/>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label">个人资料</span>
                <userInfo></userInfo>
            </el-tab-pane>
            <el-tab-pane label="修改密码">
                <modifyPassword></modifyPassword>
            </el-tab-pane>
<!--            <el-tab-pane label="账号关联">账号关联</el-tab-pane>-->
        </el-tabs>
    </div>
</template>

<script>
    import userInfo from '../components/Setting/user-info'
    import modifyPassword from '../components/Setting/modify-password'

    export default {
        data() {
            return {
            };
        },
        components: {
            userInfo,
            modifyPassword
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    hr {
        margin-block-end: 20px;
    }

    .title {
        color: #444;
        font-size: 25px;
        font-weight: 600;
        margin: 0 0 15px 15px;
        text-align: left;
    }
</style>
