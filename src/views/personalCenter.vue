<template>
    <div>
        <mySharing></mySharing>
        <myCollection></myCollection>
        <myMessage></myMessage>
    </div>
</template>

<script>
import pageSide from'../components/page_side'
import mySharing from '../components/mySharing'
import myMessage from '../components/myMessage'
import myCollection from '../components/myCollection'

export default {
    components:{
        pageSide,
        mySharing,
        myMessage,
        myCollection
    }
}
</script>
<style scoped>

.el-container{
    height: 100%;
}
.el-main{
  position: absolute;
  margin: 0 auto;
  height: 100%;
  width: 83%;
  background-color: #b3c0d1;
  color: #333;
  overflow: auto;
}
.el-aside{
  display: block;
  /* position: relative; */
  /* overflow-y: scroll; */
  position: absolute;
  width: 17%!important;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #545c64;
  overflow-y: scroll;
  padding-top: 3%;
}
.el-card{
    margin: 50px 50px 30px 50px;
}
.el-main::-webkit-scrollbar{
	display: none;
}
</style>
