<template>
    <div class="swiper_item">
        <div class="item" v-for="item in items" key="item_list">
            <img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt="">
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
    export default{
        name:"carouselItem",
        props:["items"]
    }
</script>

<style scoped>
    .swiper_item{
        width:25%;
        display: flex;
        padding:0 5px;
        
    }
    .item{
        width:80px;
        height: 80px;
        text-align: center;
    }
    img{
        width:60px;
        height:60px;
    }
</style>