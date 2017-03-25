<template>
  <div id="app">
    <bottom-menu></bottom-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import BottomMenu from "./components/BottomMenu" 
export default {
  name: 'app',
  components:{
    "bottom-menu":BottomMenu
  }
}
</script>

<style>

</style>
