<!--我的内容-->

<template>
  <div class="root">
    <header>
      <div class="my">
        <span class="icon icon-chevron-left icon-4x " style="color:white"></span>
        <b>我的</b>
      </div>
      <div class="me">
        <img src="../assets/头像.png" alt="">
        <span>登录/注册</span>
        <div>
          <span class="icon-mobile-phone icon-5x" style="color:white"></span>
          <p>登录后享受更多特权</p>
        </div>
        <span class="icon icon-chevron-right icon-3x " style="color:white"></span>
      </div>
    </header>
    <section>
      <div class="special">
        <figure class="">
          <img src="../assets/余额.png" alt="" >
          <figcaption class="title">余额</figcaption>
        </figure>
        <figure class="">
          <img src="../assets/优惠.png" alt="" >
          <figcaption class="title">优惠</figcaption>
        </figure>
        <figure class="">
          <img src="../assets/积分.png" alt="" >
          <figcaption class="title">积分</figcaption>
        </figure>
      </div>
    </section>
    <main>
        <div class="box">
            <img src="../assets/我的订单.png" alt="">
            <span>我的订单</span>
            <span class="icon icon-chevron-right"></span>
        </div>
        <div class="box">
            <img src="../assets/积分商城.png" alt="">
            <span>积分商城</span>
            <span class="icon icon-chevron-right"></span>
        </div>
        <div class="box">
            <img src="../assets/皇冠.png" alt="">
            <span>饿了吗会员卡</span>
            <span class="icon icon-chevron-right"></span>
        </div>
        <div class="box">
            <img src="../assets/花.png" alt="">
            <span>服务中心</span>
            <span class="icon icon-chevron-right"></span>
        </div>
        <div class="box">
            <img src="../assets/icon平台饿了么.png" alt="">
            <span>我的下载饿了吗APP</span>
            <span class="icon icon-chevron-right"></span>
        </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "myinfo"
  }

</script>

<style scoped>
  header {
    background-color: rgb(0, 150, 255);
  }
  
  p {
    margin: 0;
    font-size: 3em;
  }
  
  .my {
    /*border:1px solid red;*/
    padding: 10px 0;
    text-align: center;
    height: 40px;
    width: 100%;
  }
  
  .my b {
    font-size: 4em;
    color: #fff;
    line-height: 40px;
  }
  
  .my span {
    float: left;
    margin-left: 20px;
    line-height: 40px;
  }
  
  .me {
    /*border:1px solid red;*/
    margin-top: 30px;
  }
  
  .me img {
    margin-left: 20px;
    width: 80px;
    height: 80px;
  }
  
  .me>span {
    font-size: 4em;
    color: #fff;
    position: relative;
    top: -55px;
    margin-left: 20px;
  }
  
  .me>div {
    /*border:1px solid blue;*/
    width: 200px;
    position: relative;
    top: -50px;
    left: 120px;
  }
  
  .me>div p {
    color: #fff;
    float: right;
    position: relative;
    top: 3px;
  }
  
  span.icon-chevron-right {
    float: right;
    position: relative;
    top: -90px;
    margin-right: 20px;
  }
  section{
    /*border-bottom:1px solid lightgray;*/
    width:100%;
    height:120px;
    text-align: center;
    position:relative;
  }
  .special{
    width:100%;
    border-bottom:1px solid lightgray;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top:0px;
    padding-top:10px;
  }
  figure{
      margin:0;
      width:33.333%
  }
  figure:nth-of-type(2){
      border-left: 1px solid lightgray;
      border-right: 1px solid lightgray;
  }
  figcaption{
      font-size: 2.5em;
      color:gray;
      padding-bottom:10px;
  }
  main{
      border:1px solid red;
  }
</style>
