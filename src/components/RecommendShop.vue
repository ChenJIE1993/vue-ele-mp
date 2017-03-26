<template>
    <div class="recommendshop">
        <p>推荐商家</p>
        <img src="../assets/elm.svg" alt="">
        <p>
            <span>平平</span>
            <span>克莉丝汀</span>
        </p>
    </div>
</template>

<script>
    export default{
        name:'recommendshop',
        data(){
            return {
                shop:{}
            }
        },
        methods:{
            getShop(){
                this.$http.get("/eleapi/shopping/restaurants?latitude=31.96205&longitude=118.85778&offset=120&limit=20&extras[]=activities&terminal=h5")
                .then(function(res){
                    console.log(res);
                    this.shop = res.body
                })
            }
        },
        created(){
            this.getShop()
        }
    }
</script>

<style scoped>

</style>