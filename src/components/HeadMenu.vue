<template>
  <header>
    <div class="order_head">
      <span class="icon icon-chevron-left icon-4x pull-left" style="color:white"></span>
      <b>发现</b>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'head'
  }

</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(0, 150, 255);
    padding: 10px;
    z-index: 100;
  }
  
  .order_head {
    width: 100%;
    height: auto;
    text-align: center;
  }
  
  .order_head b {
    color: #fff;
    font-size: 3em;
  }
</style>
