<template>
  <div class="root">
    <section class="parts">
      <img :src="'https://fuss10.elemecdn.com/'+item.main_pic_hash+'.jpeg'" alt="">
      <p>{{item.title}}</p>
      <span>{{item.subtitle}}</span>
    </section>
  </div>



</template>

<script>
  export default {
    name: 'discovermenu',
    props: ["item"]

  }

</script>

<style scoped>
  .root {
    display: inline-block;
    width: 50%;
    /*margin-top:45px;*/
  }
  
  .parts {
    width: 100%;
    height: 100px;
    padding-top: 20px;
    background-color: #fff;
  }
  
  section:nth-of-type(1) {
    border-left: .5px solid lightgray;
  }
  
  section:nth-of-type(1) {
    border-bottom: .5px solid lightgray;
  }
  
  .parts img {
    max-width: 50px;
    max-height: 50px;
    float: right;
    margin-right: 20px;
    position: relative;
    top: 20px;
  }
  
  p {
    font-size: 3em;
    color: orange;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    line-height: 60px;
  }
  
  span {
    color: gray;
    font-size: 1.2em;
    position: relative;
    top: -10px;
    left: 20px;
  }

</style>
