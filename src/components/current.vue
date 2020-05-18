<template>
    <div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
                prop="name"
                label="序号"
                width="55">
            </el-table-column>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="歌曲"
                width="300">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="歌手"
                width="190">
            </el-table-column>
            <el-table-column
                prop="address"
                label="分享者"
                width="190">
            </el-table-column>
            <el-table-column
                prop="name"
                label="操作"
                width="130">
                <template >
                    <operate-pane></operate-pane>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import operatePane from'@/components/operation'

export default {
    data() {
        return {
            tableData:[21,21,121],
        }
    },
    components:{
        operatePane
    }
}
</script>