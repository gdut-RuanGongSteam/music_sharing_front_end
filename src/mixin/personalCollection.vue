<script>
import{ request } from '@/api/http'
import{getters, mapGetters, mapMutations} from 'vuex'

export default {
    methods: {
        personalCollection(index){
            const content={
                pageNum:index,
                pageSize:15,
                userId:this.getUser.id
            }
            request("song/getCollectSongByUserId",content,"get").then((e)=>{
                this.setMyCollection(e)
            })
        },
        ...mapMutations({
            setMyCollection:"setMyCollectionList"
        })
    },
    computed:{
        ...mapGetters([
            "getUser"
        ])
    },
}
</script>