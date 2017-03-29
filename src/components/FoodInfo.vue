<template>
  <div class="root_food">
    <div class="head">
      <span class="name">{{info.name}}</span>
      <p>{{info.description}}</p>
    </div>
    <div class="foodmain">
      <img :src="info.image_path | formatImg" alt="">
      <p>{{info.foods[0].name}}</p>
      <span>{{info.foods[0].tips}}</span>
      <span>{{info.foods[0].activity.image_text}}</span>
      <span>￥{{info.foods.specfoods.price}}</span>
      <del>{{info.foods.specfoods.original_price}}</del>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foodinfo',
    props: ["info"],
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
  .head p {
    color: gray;
    position: relative;
    top: -15px;
    left: 50px;
  }
  
  .foodmain {
    /*border: 1px solid red;*/
  }
  .head .name{
      font-size:3em;
      font-weight: bold;
      color:gray;
  }
  .head p{
      margin:0;
      position:relative;
      top:-18px;
  }
</style>
