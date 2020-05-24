<template>
    <el-card class="collection-card">
        <div slot="header" class="clearfix">
            <span class="title">我的消息</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            <Comment></Comment>
        </div>
    </el-card>
</template>

<script>
    import Comment from './comment'

    export default {
        name: 'myMessage',
        components: {
            Comment
        },
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
.collection-card{
    min-width: 700px;
}
.clearfix{
    text-align: left;
}
.title {
    font-size: 17px;
    font-weight: 600;
}
/deep/ .el-card__body {
    padding-top: 0;
}
</style>
