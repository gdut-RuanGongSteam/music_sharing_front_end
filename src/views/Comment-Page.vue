<template>
  <el-tabs type="border-card">
    <el-tab-pane label="精彩评论">
      <Comment></Comment>
      <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    </el-tab-pane>
    <el-tab-pane label="最新评论">
      <Comment></Comment>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>  
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Comment from '../components/comment'

export default {
  name: 'comment-page',
  components: {
    Comment
  },
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>

</style>
