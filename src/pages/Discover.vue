<template>
  <div class="Root">
    <head-menu></head-menu>
    <discover-menu v-for="item in lists" :item="item" key="item_list"></discover-menu>
    <div class="img">
      <img src="../assets/bwc.png" alt="">
    </div>
    <div class="active-head">
      <div>
        <span class="icon icon-long-arrow-right pull-left "></span>
        <img src="../assets/闹钟.png" alt="">
        <p>限时好礼</p>
        <span class="icon icon-long-arrow-left pull-right"></span>
      </div>
      <p style="margin:-10px;color:gray">小积分换豪礼</p>
    </div>
    <discover-main v-for="g in gift" :gift="g" key="gift_list"></discover-main>
    <footer>
        <div>
            查看更多 >
        </div>
    </footer>
  </div>

</template>

<script>
  import DiscoverMenu from "../components/DiscoverMenu"
  import HeadMenu from "../components/HeadMenu"
  import DiscoverMain from "../components/DiscoverMain"
  export default {
    name: 'discover',
    data() {
      return {
        lists: [],
        gift: []
      }
    },
    components: {
      "discover-menu": DiscoverMenu,
      "head-menu": HeadMenu,
      "discover-main": DiscoverMain
    },
    methods: {
      getNav() {
        this.$http.get("/eleapi/member/v1/discover?platform=2&block_index=0")
          .then(function (res) {
            // console.log(res)
            this.lists = res.body[1]
          })
      },
      getGift() {
        this.$http.get("/eleapi/member/gifts/suggest")
          .then(function (res) {
            console.log(res)
            this.gift = res.body
          })
      }
    },
    created() {
      this.getNav()
      this.getGift()
    }
  }

</script>

<style scoped>
  .Root {
    margin-top: 45px;
    background-color:#fff;
  }
  
  .img {
    margin: 15px 0;
  }
  
  .img img {
    width: 100vw
  }
  
  .active-head {
    /*border: 1px solid black;*/
    text-align: center;
    background-color:#fff;
    padding:10px 0;
  }
  .active-head>div{
      width:200px;
      height:30px;
      /*border:1px solid blue;*/
      margin: 10px auto;
  }
  .active-head>div p {
    margin:0;
    display: inline;
    position: relative;
    top:-8px;
    font-size:3.5em;
    font-weight: bold;
  }
  .pull-left{
      line-height: 30px;
      margin-left: 30px;
  }
  .pull-right{
      line-height: 30px;
  }
  footer{
      margin-bottom: 200px;
      width:100%;
      background-color: #fff;
      text-align: center;
      margin-top:20px;
      padding:20px 0;
      font-size:2.5em;
      color:gray;
  }
</style>
