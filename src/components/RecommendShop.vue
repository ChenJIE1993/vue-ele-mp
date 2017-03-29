<template>
  <div class="recommendshop">
    <section>
      <!--<img :src="'https://fuss10.elemecdn.com/'+shop.image_path+'.jpeg'" alt="">-->
      <img :src="shop.image_path | formatImg " alt="">
      <div class="list_left">
        <p class="name">{{shop.name}}</p><br>
        <span class="order_num">{{shop.recent_order_num | formatOrder_num}}</span><br>
        <span class="minprice">{{shop.float_minimum_order_amount | formatPrice}} /</span>
        <span class="minprice">{{shop.piecewise_agent_fee.tips}}</span>
      </div>
      <div class="list_right">
        <span class="icon">{{shop.supports[0].icon_name}}</span>
        <span class="icon">{{shop.supports[1].icon_name}}</span><br>
        <span class="supname sup" style="color:dodgerblue">{{shop.supports[1].name}}</span>
        <span class="supname del" style="background-color:dodgerblue;color:white">{{shop.delivery_mode.text}}</span><br>
        <span class="distime" >{{shop.distance | formatDistance}} /</span>
        <span class="distime" style="color:dodgerblue">{{shop.order_lead_time}}分钟</span>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'recommendshop',
    props: ["shop"]

  }

</script>

<style scoped>
  .recommendshop {
    box-sizing: border-box;
    border-bottom: 1px solid lightgray;
    background-color: #fff;
    width: 100%;
    height: 100px;
    padding: 10px;
  }
  
  section {
    /*border: 1px solid blue;*/
    /*background: green;*/
    position: relative;
  }
  
  .list_left {
    /*border: 1px solid red;*/
    width: 150px;
    height:70px;
    position: absolute;
    top: 0;
    left: 70px;
    margin-left: 20px;
    
  }
  img{
    max-width:70px;
    max-height:70px;
    border-radius: 5px;
  }
  span {
    color: gray;
    font-size: 1.5em;
  }
  
  .name {
    display: block;
    width: 100px;
    margin: 0;
    padding: 0;
    font-size: 2.5em;
    font-weight: bold;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .order_num {
    position: relative;
    top: 0px;
    left: 70px;
  }
  .minprice{
    position: relative;
    top:10px;
  }
  .list_right{
    /*border: 1px solid red;*/
    width: 150px;
    height:70px;
    position: absolute;
    top: 0;
    right:0;
    margin-left: 20px;
  }
  .icon{
    padding:2px;
    border: 1px solid lightgray;
    background-color:#fff;
    margin-left: 5px;
    position: relative;
    left: 100px;
    top:5px;
  }
  .supname{
    border:1px solid dodgerblue;
    border-radius: 2px;
    padding:1px;
    position: relative;
    top:15px;
    left: 55px;
  }
  .distime{
    position: relative;
    top:20px;
    left: 55px;
  }
</style>
