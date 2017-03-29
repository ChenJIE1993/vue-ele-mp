<template>
    <div class="root">
        <oreder-form></oreder-form>
    </div>
</template>

<script>
    import OrderForm from "../components/OrderForm.vue"
    export default{
        name:'order',
        components:{
            "oreder-form":OrderForm
        }
    }
</script>

<style scoped>

</style>