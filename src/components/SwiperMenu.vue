<!--swiper 内容-->

<template>
  <div class="root-swiper">
    <div class="swiper-items" :options="swiperOption">
      <a href="" v-for="s in items" calss="swiper-item">
        <figure class="swiper" >
          <img :src="'https://fuss10.elemecdn.com/'+s.image_url" alt="" style="width:100px;height:100px">
          <figcaption class="title">{{s.title}}</figcaption>
        </figure>
      </a>
      <!--分页-->
      <div class="pagination">
        <span class="swiper-pagination"></span>
        <span class="swiper-pagination"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'swipermenu',
    data() {
      return {
        items: []
      }
    },
    methods: {
      getSwiper() {
        this.$http.get("/eleapi/v2/index_entry?geohash=wtstbdt87jb&group_type=1&flags[]=F")
          .then(function (res) {
            // console.log(res)
            this.items = res.body
          })
      },
      swiperOption:{
          name:"goodsAwiper",
          direction:"horizontal",
          paginationVisible:true,
          paginationClickable :true,
          mousewheelControl : false,
      }
    },
    created() {
      this.getSwiper()
    }
  }

</script>

<style scoped>
    .swiper-items{
        border:1px solid red;
        /*display: flex;
        justify-content: space-around;
        flex-wrap: wrap;*/
    }
    .swiper-item{
        border:1px solid blue;
        /*width: 20vw;
        height: 20vh;*/
        font-size: 0;
    }
    .swiper{
        border:1px solid black;
        font-size: 2.5em;
        margin:0;
        text-align: center;
        /*width: 20vw;
        height: 20vh;*/
        display: inline-block;
        width:150px;
        height:150px;
        text-align:center; 
    }
</style>
