<script>
import { request } from '@/api/http'
import {mapMutations,mapGetters} from 'vuex'

export default {
    methods: {
        bestComment(index,songId){
            // if(!this.getUser.id){
            //     this.$message.error('您尚未登录本系统，请先登录!')
            //     return
            // }
            const content={
                pageNum:index,
                pageSize:15,
                song_id:songId
            }
            request("/comment/getCommentList",content,"get").then((e)=>{
                this.setBestComment(e)
                console.log("bestComment",e)
            })
        },
        ...mapMutations({
            setBestComment:"setBestCommentList"
        })
    },
    computed: {
        ...mapGetters([
            "getUser"
        ])
    },
}
</script>