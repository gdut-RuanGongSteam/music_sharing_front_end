<template>
    <div>
        <el-container>
            <el-main>
                <my-collection></my-collection>
                <my-sharing></my-sharing>
                <my-message></my-message>
            </el-main>
            <el-aside >
                <page-side/>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import pageSide from'../components/page_side'
import myCollection from '../components/myCollection'
import mySharing from '../components/mySharing'
import myMessage from '../components/myMessage'

export default {
    components:{
        pageSide,
        myCollection,
        myMessage,
        mySharing
    }
}
</script>
<style scoped>
el-container{
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
.el-aside {
  display: block;
  /* position: relative; */
  /* overflow-y: scroll; */
  display: block;
  position: absolute;
  width: 17%!important;
  right: 0;
  top: 0px;
  bottom: 0;
  background-color: #545c64;
  overflow-y: scroll;
  padding-top: 5%;
  /* width: 20%; */
}
.el-card{
    margin: 50px 50px 100px 50px;
}
::-webkit-scrollbar{
	display: none;
}
</style>