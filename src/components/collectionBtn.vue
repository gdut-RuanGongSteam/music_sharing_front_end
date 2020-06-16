<<template>
    <div>
        <el-button  size="mini" title="收藏" class="el-icon-star-off " circle v-if="find" @click="collection()"></el-button>
        <el-button  size="mini" title="取消收藏" class="el-icon-star-on cancel" @click="cancelCollection()" circle v-else></el-button>
    </div>
</template>
<script>
import{ request } from '@/api/http'
import{getters, mapGetters} from 'vuex'
import personalCollection from '../mixin/personalCollection'
export default {
    mixins:[personalCollection],
    props:{
        find:{
            type:Boolean,
            default:false
        },
        collectionContent:{
            type:Array,
            default:()=>{}
        },
        rowIndex:{
            type:Number,
            default:0
        }
    },
    methods: {
        collection(){
            if(!this.getUser.id){
                this.$message.error('您尚未登录本系统，请先登录!')
                return
            }
            const content={
                userId:this.getUser.id,
                songId:this.collectionContent[this.rowIndex].id
            }
            request("song/collectSongByIds",content,"get").then((e)=>{
                if(e){
                    this.$message.success('收藏成功，已添加到我的收藏中！')
                    this.personalCollection(1)
                }else{
                    this.$message.warning('此歌已收藏在我的收藏中了！')
                }
            })
        },
        cancelCollection(){
            if(!this.getUser.id){
                this.$message.error('您尚未登录本系统，请先登录!')
                return
            }
            const content={
                userId:this.getUser.id,
                songId:this.collectionContent[this.rowIndex].id
            }
            request("song/cancelCollectSongByIds",content,"get").then((e)=>{
                if(e){
                    this.personalCollection(1)
                    this.$message.success('取消成功，已从我的收藏中移除！')
                }else{
                    this.$message.error('取消收藏失败！')
                }
            })
        },
    },
    computed:{
        ...mapGetters([
            "getUser"
        ])
    },
}
</script>
<style scoped>
.cancel{
    color: #f7ba2a;
    font-size: 15px;
}
</style>