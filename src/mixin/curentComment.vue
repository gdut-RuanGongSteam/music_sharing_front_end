<script>
import { request } from '@/api/http'
import {mapMutations,mapGetters} from 'vuex'

export default {
    methods: {
        currentComment(index,songId){
            // if(!this.getUser.id){
            //     this.$message.error('您尚未登录本系统，请先登录!')
            //     return
            // }
            const content={
                pageNum:index,
                pageSize:15,
                song_id:songId
            }
            request("/comment/getNewCommentList",content,"get").then((e)=>{
                this.setCurrentComment(e)
                console.log("currentComment",e)
            })
        },
        ...mapMutations({
            setCurrentComment:"setCurrentCommentList"
        })
    },
    computed: {
        ...mapGetters([
            "getUser"
        ])
    },
}
</script>