<!--首页-->

<template>
    <div class="root">
        <hot-head></hot-head>
        <swiper-menu></swiper-menu>
        <recommend-shop></recommend-shop>
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
                
            }
        },
        components: {
            "hot-head": HotHead,
            "swiper-menu":SwiperMenu,
            "recommend-shop":RecommendShop
            
        },
        
    }

</script>

<style scoped>

</style>