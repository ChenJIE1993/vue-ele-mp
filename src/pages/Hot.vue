<!--首页-->

<template>
  <div class="root">
    <hot-head></hot-head>
    <swiper-menu :carouseIitems="carouseIitems"></swiper-menu>
    <div class="title"> 
      <h3>推荐商家</h3>
    </div>
    <router-link class="shop_list" v-for="s in shoplist" key="shop_list" :to="'recommendmain/'+s.id+'/'+s.name">
      <recommend-shop :shop="s" ></recommend-shop>
    </router-link>
    <div class="toTop" v-if='show'  @click="toTop">
      <a href=""></a><img src="../assets/火箭.png" alt="">
    </div>
  </div>
</template>

<script>
  import HotHead from "../components/HotHead"
  import SwiperMenu from "../components/SwiperMenu"
  import RecommendShop from "../components/RecommendShop"

  export default {
    name: 'hot',
    data() {
      return {
        carouseIitems: [],
        shoplist:[],
        isLoadingMore:false,
        show:true
      }
    },
    components: {
      "hot-head": HotHead,
      "swiper-menu": SwiperMenu,
      "recommend-shop": RecommendShop
    },
    methods: {
      getCarousel() {
        this.$http.get("/eleapi/v2/index_entry?geohash=wtstbdt87jb&group_type=1&flags[]=F")
          .then(function (res) {
            // console.log(res)
            this.carouseIitems = res.data
          })
      },
      getRecommendShop() {
        this.$http.get(
            "/eleapi/shopping/restaurants?latitude=31.96205&longitude=118.85778"
          )
          .then(function (res) {
            // console.log(res);
            this.shoplist = res.body
          })
      },
      didScroll(){
        var contentHeight = document.body.clientHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight = window.innerHeight;
        // console.log(contentHeight)
        // console.log(scrollTop)
        // console.log(windowHeight)

        if(windowHeight + scrollTop >= contentHeight-10){
          if(!this.isLoadingMore){
            this.loadMore();
          }
        }
      },
      loadMore(){
        this.isLoadingMore = true;
        this.$http.get("/eleapi/shopping/restaurants?latitude=31.96205&longitude=118.85778",{
          params:{offset:this.shoplist.length,limit:30,"extras[]": "activities",terminal: "h5"}
        }).then(function(res){
          this.shoplist = this.shoplist.concat(res.body);
          this.isLoadingMore = false;
        },function(){
          this.isLoadingMore =  false;
          alert("加载失败")
        })
      },
      toTop(e){
        
      }
    },
    created() {
      this.getCarousel()
      this.getRecommendShop()
      window.onscroll = this.didScroll
    },
    mounted(){
      
    }

  }

</script>

<style scoped>
  .title{
    width:100%;
    height: 40px;
    background-color: #fff;
    border-top:1px solid lightgray;
    border-bottom: 1px solid lightgray; 
    margin-top:10px;
  }
 .title h3{
   margin:0;
   margin-left: 20px;
   font-size: 3em;
   line-height: 40px;
 }
 .toTop{
   z-index: 100;
   position: fixed;
   bottom:100px;
   right:5px;
   width:40px;
   height:40px;
   border:1px solid gray;
   text-align: center;
   border-radius: 50%;
   cursor: pointer;
 }
</style>
