<template>
    <el-card class="collection-card">
        <div slot="header" class="clearfix">
            <span>我的收藏</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>
</template>
<style  scoped>
.collection-card{
    min-width: 700px;
}
.clearfix{
    text-align: left;
}
</style>