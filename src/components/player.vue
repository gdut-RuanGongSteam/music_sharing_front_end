<template>
    <div>
      <aplayer :audio="$store.state.playList" :lrcType="3" ref="aplayer" fixed />
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      // audio: this.getPlayList
    };
  },
  mounted(){
    console.log(this.$refs.aplayer.currentSettings);
    console.log(this.$refs.aplayer.currentMusic);
  },
  methods:{
    ...mapMutations({
       setCurrentPlay:"setCurrentPlayIndex"
    })
  },
  computed:{
    ...mapGetters([
      "getCurrentPlayIndex",
      "getPlayList",
    ]),
    currentPlay(){
      return this.getCurrentPlayIndex.isPlay
    }
  },
  watch:{
    currentPlay:{
      handler(val){
        console.log(val)
        if(val){
          this.$refs.aplayer.switch(this.getCurrentPlayIndex.name)
          this.$refs.aplayer.play()
          this.setCurrentPlay({name:this.getCurrentPlayIndex.name,isPlay:false})
        }
      }
    }
  }
};
</script>