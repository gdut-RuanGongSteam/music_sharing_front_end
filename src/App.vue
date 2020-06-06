<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //除去浏览器滚动条
  scrollbar-width:none;//火狐的暂时没法去掉
  -ms-overflow-style: none;//兼容IE10+
  ::-webkit-scrollbar{//兼容chrome和safari
	  display: none;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
