<template>
  <div class="root_mainshop">
    <header>
      <div class="tophead clearfix">
        <span class="icon icon-chevron-left icon-4x pull-left" style="color:white;margin-left:20px;"></span>
      </div>
      <div class="headmidden">
        <img :src="mainlist.image_path | formatImg" alt="">
        <div class="insetmidden clearfix">
          <p>{{mainlist.name}}</p>
          <span>商家配送 /</span>
          <span>{{mainlist.order_lead_time}}分钟送达 /</span>
          <span>{{mainlist.piecewise_agent_fee.tips}}</span><br>
          <span>公告 : 欢迎光临，用餐高峰期请提前下单，谢谢</span>
          <span class="icon icon-chevron-right icon-3x pull-right" style="color:white;"></span>
        </div>
      </div>
      <div class="headfoot">
        <span style="background-color:limegreen;padding:2px;">{{mainlist.activities[0].icon_name}}</span>
        <span style="margin-left:2px;">{{mainlist.activities[0].tips}}&nbsp;&nbsp;(APP专享)</span>
        <span >2个活动</span>
      </div>
    </header>
    <main>
      <div class="navtitle clearfix">
        <span>商品</span>
        <span>评价</span>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "mainshop",
    data() {
      return {
        mainlist: [],
        restaurantinfo: []
      }
    },
    created: function () {
      this.$http.get("/eleapi/shopping/restaurant/" +
          this.$route.params.shopid +
          '?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=31.96205&longitude=118.85778'
        )
        .then(function (res) {
          // console.log(res)
          this.mainlist = res.body
        }.bind(this));
      
    }
  }

</script>

<style scoped>
  header {
    background-color: brown;
    height: 150px;
  }
  
  .tophead {
    /*border:1px solid black;*/
    padding: 8px 0;
  }
  
  .headmidden {
    /*border:1px solid black;*/
    /*height: 110px;*/
    position: relative;
  }
  
  .headmidden img {
    max-width: 70px;
    max-height: 70px;
    /*border: 1px solid #fff;*/
    border-radius: 5px;
    margin-left: 15px;
  }
  
  .insetmidden {
    /*border: 1px solid blue;*/
    /*width: 380px;*/
    position: absolute;
    top: 0;
    left: 90px;
  }
  
  .insetmidden p {
    color: #fff;
    font-size: 3em;
    font-weight: bold;
    margin: 0 0 8px 5px;
  }
  
  .insetmidden span {
    color: #fff;
    margin-left: 5px;
  }
  
  .headfoot {
    /*border:1px solid yellow;*/
    position: relative;
    top: 0px;
    left: 20px;
    padding: 5px 0;
  }
  
  .headfoot {
    color: #fff;
  }
  main{
    
  }
  .navtitle {
    width:100%;
    background-color: #fff;
    border-bottom: 1px solid lightgray;
  }
  
  .navtitle {
    text-align: center;
    font-size: 3em;
    padding:10px 0;;
  }
.navtitle span{
  padding:0 50px;
}
</style>
