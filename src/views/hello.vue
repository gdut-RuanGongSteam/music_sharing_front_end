<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <aaa></aaa>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import aaa from '@/components/aaa.vue'

export default {
  name: 'hello',
  components: {
    HelloWorld,
    aaa
  }
}
</script>
<style> </style>