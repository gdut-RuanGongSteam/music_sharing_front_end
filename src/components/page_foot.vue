<<template>
    <div class="player">
        <div class="demo-image">
            <el-image
            style="width: 50px; height: 50px"
            :src="url"
            fit="fill"></el-image>
            <ul>
              <li>q111</li>
              <li>111111111</li>
            </ul>
        </div>
        <el-button size="mini" icon="el-icon-alishangyiqu" circle></el-button>
        <el-button size="mini" icon="el-icon-aliicon_play" circle></el-button>
        <el-button size="mini" icon="el-icon-alixiayiqu" circle></el-button>
        <el-popover style="min-width:0;" placement="top-start" width="40" trigger="click">
              <div>
                <el-slider
                    v-model="value11"
                    vertical
                    height="150px">
                </el-slider>
              </div>
            <el-button slot="reference">click 激活</el-button>
        </el-popover>
        <div class="block">
            <span class="demonstration">自定义初始值</span>
            <el-slider v-model="value11"></el-slider>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        value11: 50
      }
    }
  }
</script>
<style>
.player{
    position: relative;
}
.demo-image{
    position: absolute;
    top:5px;
    left:10px;
}
.el-popover{
  min-width:0 !important;
}
.el-slider{
  width: 34% !important;
}
</style>