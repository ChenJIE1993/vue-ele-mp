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
    <section class="root-mid">
      <div class="special">
        <figure class="">
          <a href=""><img src="../assets/余额.png" alt=""></a>
          <figcaption class="title">余额</figcaption>
        </figure>
        <figure class="">
          <a href=""><img src="../assets/优惠.png" alt=""></a>
          <figcaption class="title">优惠</figcaption>
        </figure>
        <figure class="">
          <a href=""><img src="../assets/积分.png" alt=""></a>
          <figcaption class="title">积分</figcaption>
        </figure>
      </div>
    </section>
    <main>
      <section class="profile profile-1">
        <a href="" class="box">
          <aside>
            <img src="../assets/我的订单.png" alt="">
          </aside>
          <div class="in-box">
            <p>我的订单</p>
            <span class="icon icon-chevron-right"></span>
          </div>
        </a>
        <a href="" class="box">
          <aside>
            <img src="../assets/积分商城.png" alt="">
          </aside>
          <div class="in-box">
            <p>积分商城</p>
            <span class="icon icon-chevron-right"></span>
          </div>
        </a>
        <a href="" class="box">
          <aside>
            <img src="../assets/皇冠.png" alt="">
          </aside>
          <div class="in-box" style="border:none;">
            <p>饿了吗会员卡</p>
            <span class="icon icon-chevron-right"></span>
          </div>
        </a>
      </section>

      <section class="profile profile-2">
        <a href="" class="box">
          <aside>
            <img src="../assets/花.png" alt="">
          </aside>
          <div class="in-box">
            <p>服务中心</p>
            <span class="icon icon-chevron-right"></span>
          </div>
        </a>
        <a href="" class="box">
          <aside>
            <img src="../assets/icon平台饿了么.png" alt="">
          </aside>
          <div class="in-box" style="border:none;">
            <p>下载饿了吗APP</p>
            <span class="icon icon-chevron-right"></span>
          </div>
        </a>
      </section>

    </main>
    <footer></footer>
  </div>
</template>

<script>
  export default {
    name: "myinfo"
  }

</script>

<style scoped>
  .root {
    overflow: hidden;
  }
  
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
    margin-top: 10px;
  }
  
  .me img {
    margin-left: 20px;
    width: 60px;
    height: 60px;
  }
  
  .me>span {
    font-size: 2.7em;
    color: #fff;
    position: relative;
    top: -40px;
    margin-left: 20px;
  }
  
  .me>div {
    /*border:1px solid blue;*/
    width: 200px;
    position: relative;
    top: -40px;
    left: 100px;
  }
  
  .me>div p {
    color: #fff;
    float: right;
    font-size: 2.5em;
    position: relative;
    top: 3px;
    left: -40px;
  }
  
  span.icon-chevron-right {
    float: right;
    position: relative;
    top: -90px;
    margin-right: 20px;
  }
  
  .root-mid {
    /*border-bottom:1px solid lightgray;*/
    width: 100%;
    height: 80px;
    text-align: center;
    position: relative;
  }
  
  .special {
    width: 100%;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0px;
  }
  
  figure {
    margin: 0;
    width: 33.333%
  }
  
  figure img {
    width: 30px;
    height: 30px;
    padding-top:10px;
  }
  
  figure:nth-of-type(2) {
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
  }
  
  figcaption {
    font-size: 2.5em;
    color: gray;
    padding-bottom: 10px;
  }
  
  main {
    width: 100%;
    height: 100%;
  }
  
  .box {
    display: block;
    margin: 0;
    padding: 10px;
    width: 100%;
    height: 30px;
  }
  
  .profile {
    border-top: .5px solid lightgrey;
    border-bottom: .5px solid lightgrey;
    background-color: #fff;
    margin-top: 10px;
  }
  
  aside {
    margin-left: 20px;
  }
  
  aside img {
    width: 16px;
    height: 16px;
    position: relative;
    top: 11px;
  }
  
  .in-box {
    /*overflow: hidden;*/
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    position: relative;
    top: -20px;
    margin-left: 50px;
    position: relative;
  }
  
  .in-box p {
    font-size: 2em;
    margin: 0;
  }
  
  .in-box span.icon {
    color: lightgray;
    font-size: 10px;
    position: absolute;
    right: 0;
    top: 10px;
  }

</style>
