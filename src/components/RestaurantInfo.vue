<template>
    <div class="left_aside ">
        <aside class="clearfix isActive">
            <img :src="infolist.icon_url | formatImg"  alt="">
            <span>{{infolist.name}}</span>
        </aside>
    </div>
</template>

<script>
    export default{
        name:"restaurantinfo",
        props:['infolist']
    }
</script>

<style scoped>
    .left_aside{
        position: relative;
    }
    aside{
        /*border: 1px solid black;*/
        text-align: center;
        vertical-align: middle;
        padding:5px;
        height: 70px;
    }
    .isActive{
        background-color:#fff;
        border-left:cornflowerblue 5px solid;
    }
    aside span{
        display: block;
        font-size: 3em;
        color:gray;
        margin-top:20px;
    }
    aside img{
        float: left;
        width:15px;
        height:20px;
        margin-left:10px;
        position: relative;
        top:23px;
    }
    .head{
        position: absolute;
        top:0;
        left:100px;
    }
</style>