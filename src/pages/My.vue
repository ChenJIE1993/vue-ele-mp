<!--我的-->

<template>
  <div class="root">
    <my-info></my-info>
  </div>
</template>

<script>
  import MyInfo from "../components/MyInfo"
  export default {
    name: 'my',
    components: {
      "my-info": MyInfo
    }
  }

</script>

<style scoped>

</style>
