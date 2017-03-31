<!--首页内容-->

<template>
    <div class="root">
        <header class="root-head">
            <div class="address">
                <!--<div class="clearfix"></div>-->
                <img src="../assets/dz.svg" alt="dizhi">
                <div class="adsname">   
                    <span class="addsname">{{address.name}}</span>
                    <!--<span class="icon icon-caret-down"></span>-->
                </div>
                <!--<span class="icon icon-caret-down"></span> -->
            </div>
            <div class="weather">
                <span>{{weather.temperature}} <b>℃</b></span><br>
                <span>{{weather.description}}</span>
                <img :src="'https://fuss10.elemecdn.com/'+weather.image_hash+'.png'" alt="duoyun">
            </div>
            <form>
                <input type="text" placeholder="搜索商家 商品">
            </form>
            
            <div class="hotsearch" >
                <ul>
                    <li v-for="h in hot">{{h.word}}</li>
                </ul>
            </div>
        </header>
        
    </div>
</template>

<script>
    export default{
        name:"hothead",
        data() {
            return{
                address:[],
                weather:[],
                hot:[]
            }
        },
        methods:{
            getAddres() {
                this.$http.get("/eleapi/v2/pois/wtstbdt87jb")
                .then(function(res){
                    // console.log(res)
                    this.address = res.body
                })
            },
            getWeather(){
                this.$http.get("/eleapi/bgs/weather/current?latitude=31.96205&longitude=118.85778")
                .then(function(res){
                    // console.log(res)
                    this.weather = res.body
                })
            },
            getHot(){
                this.$http.get("/eleapi/shopping/v3/hot_search_words?latitude=31.96205&longitude=118.85778")
                .then(function(res){
                    // console.log(res)
                    this.hot = res.body
                })
            }            
        },
        created(){
            this.getAddres()
            this.getWeather()
            this.getHot()
        }
    }
</script>

<style scoped>
    .root{
        /*border: 1px solid red;*/
        background-color:rgb(0,150,255);
    }
    .root-head{
        /*background-color: rebeccapurple;*/
        position:relative;
        text-align: center;
    }
    .address{
        /*border: 1px solid black;
        background-color: red;*/
        width:300px;
        height:50px;
        color:white;
        font-weight:bold;
        padding: 10px;
        margin-left: 20px;          
        position:relative;
    }
    .adsname{
        /*position:fixed;*/
        margin-left:10px;
        left:50px;
        width:40vw;
        height:50px;
        line-height: 50px;
        /*border: 1px solid red;*/
        text-overflow: ellipsis;
		overflow: hidden;
    }
    .addsname{
        font-size: 3.2em;
    }
    .address img{
        width:2em;
        height:2em;
        position:relative;
        top:15px;
        float:left;
    }
    .icon-caret-down{
        position: absolute;
        top:22px;
        left: 350px;
    }
    .weather{
        /*border: 1px solid black;
        background-color: blue;*/
        width: 120px;
        position: absolute;
        right:0;
        top:15px;        
        font-size: 2.5em;
        margin-right:10px;
        /*overflow: hidden;*/
        color: #fff;
    }
    .weather span{
        float: left;
    }
    .weather img{
        width:3em;
        height:3em;
        float:right;
        position:relative;
        top: -20px;
        left: -10px;
    }
    input{
        width: calc(100% - 100px);
        text-align: center;
        font-size: 3em;
        border-radius: 30px;
        border:none;
        padding: 10px;
        margin: 10px auto;
    }
    .hotsearch{
        font-size: 2em;
        color:white;
        /*border: 1px solid black; */
    }
    .hotsearch ul{
        display: flex;
        justify-content: space-around;
        margin: 0;
        padding:0;
        margin:0 auto;
        /*border:1px solid red;*/
        /*width:500px;*/
        height:60px;
        /*overflow-x: scroll;*/
        /*overflow-y: hidden;*/
    }
    .hotsearch ul li{
        /*display: inline-block;*/
        /*float: left;*/
        padding: 10px 4px;
        width: auto;
    }
</style>