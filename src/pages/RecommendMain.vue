<template>
  <div class="root">
    <main-shop></main-shop>
    <div class="aside">
        <restaurantinfo v-for=" i in restaurantinfo" :infolist="i" key="info_list"></restaurantinfo>
    </div>
    <div class="main clearfix">
        <food-info v-for="f in foodinfo" :info="f" key="food_list"></food-info>
    </div>
  </div>
</template>

<script>
  import Mainshop from "../components/Mainshop"
  import RestaurantInfo from "../components/RestaurantInfo"
  import FoodInfo from "../components/FoodInfo"
  export default {
    name: 'recommendMain',
    components: {
      "main-shop": Mainshop,
      "restaurantinfo": RestaurantInfo,
      "food-info":FoodInfo
    },
    data(){
        return{
            restaurantinfo:[],
            foodinfo:[]
        }
    },
    methods: {
      getRestaurantInfo() {
        this.$http.get("/eleapi/shopping/v2/menu?restaurant_id=" + this.$route.params.shopid)
          .then(function (res) {
            // console.log(res)
            this.restaurantinfo = res.body
          })
      },
      getfoodInfo() {
        this.$http.get("/eleapi/shopping/v2/menu?restaurant_id=" + this.$route.params.shopid)
          .then(function (res) {
            console.log(res)
            this.foodinfo = res.body
          })
      }
    },
    created(){
        this.getRestaurantInfo()
        this.getfoodInfo()
    }
  }

</script>

<style scoped>
    .root{
        position:relative;
    }
    .aside{
        /*border:1px solid blue;*/
        max-width: 140px;
        height:500px;
        overflow-y:scroll; 
    }
    .main{
        border:1px solid blue;
        height:500px;
        width: 100%;
        /*background-color: #fff;*/
        position:absolute;
        top:210px;
        left:150px;
    }
</style>
