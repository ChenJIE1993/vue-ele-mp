<template>
    <div class="giftmain">
        <div >
            <span class="discount">{{gift.corner_marker}}</span>
            <img :src="'https://fuss10.elemecdn.com/'+gift.image_hash+'.jpeg'" alt="">
            <div>
                <div class="name">
                    <p class="fond-name">{{gift.title}}</p>
                </div>
                <div class="fond-info clearfix">
                    <div class="food-price">
                        <span class="price ">{{gift.points_required}}积分</span>
                        <del class="original-price">￥{{gift.original_price}}</del>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
    export default{
        name:'discovermain',
        props:['gift']
    }
</script>

<style scoped>
    .giftmain{
        margin-top:20px;
        display: inline-block;
        width:33.333%;
        background-color:#fff;
        /*border:1px solid red;*/
        position: relative;
    }
    img{
        max-width:100px;
        max-height: 100px;
        position: relative;
        left:20px;
        top:30px;
    }
    .discount{
        margin-top:20px;
        width:60px;
        position: absolute;
        left:10px;
        background-color:rgb(65,61,60);
        padding:5px;
        text-align: center;
        color:white;
        z-index: 10;
    }
    .fond-name{
        width:100px;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow: hidden;
        font-size: 2em;
        margin-left:10px;
        margin-top:30px;
    }
    .food-price{
        position:relative;
        top:10px;
        margin-left:10px;
        /*margin-top:15px;*/
    }
    .price{
        display: inline-block;
        width:50px;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow: hidden;
        color:orange;
        font-size: 2em;
    }
    .original-price{
        font-size: .5em;
        color:gray;
    }
</style>