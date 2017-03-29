<template>
  <div class="root">
    <header>
      <div class="order_head">
        <span class="icon icon-chevron-left icon-4x pull-left" style="color:white"></span>
        <b>订单</b>
      </div>
    </header>
    <main>
        <div>
            <img src="../assets/error-load.png" alt="">
            <span>登录后查看外卖订单</span>
            <button id="btn">立即登录</button>
        </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "orderform"
  }

</script>

<style scoped>
    header{
        width:100%;
        background-color: rgb(0, 150, 255);
        padding:10px;
    }
    .order_head{
        width:100%;
        height: auto;
        text-align: center;
    }
    .order_head b{
        color:#fff;
        font-size: 3em;
    }
    main{
        /*border:1px solid red;*/
        text-align: center;
        margin-top:30px;
    }
    main div span{
        display: block;
        font-size: 3em;
        color:gray;
    }
    #btn{
        width: 100px;
        border-radius: 2px;
        border:none;
        margin-top:5px;
        padding:10px;
        background-color:rgb(86,209,118);
        color:#fff;
        font-size: 2em;
    }
</style>
