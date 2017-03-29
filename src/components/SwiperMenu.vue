<!--swiper 内容-->

<template>
  <div class="swiper_root">
    <div  class="swiper">
      <div v-for="arr in fixedArray" key="item_array" class="swiper_arr">
        <carousel-item :items="arr"> </carousel-item>
      </div>
    </div>
  </div>
</template>

<script>
  import CarouselItem from "./CarouselItem";
  export default {
    name: 'swipermenu',
    props:["carouseIitems"],
    components:{
      CarouselItem,
    },
    computed:{
      fixedArray:function(){
        var bigArr = [];
        var smArr = [];
        for(var i = 0; i<this.carouseIitems.length;i++){
          smArr.push(this.carouseIitems[i]);
            if((i+1)%8==0 || this.carouseIitems.length -1){
              bigArr.push(smArr);
              smArr = []
            }
        }
        return bigArr
        console.log(bigArr)
      }
    }
  }

</script>

<style scoped>
  .swiper_root{
    background-color:#fff;
  }
  .swiper{
    width:100%;
    padding:10px 0;
    display: flex;
    flex-wrap: wrap;
    margin:0 15px;
  }
</style>
