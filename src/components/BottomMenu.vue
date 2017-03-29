
<!--底部选项卡组件-->

<template>
    <div class="root">
        <div class="bottom">
            <div class="menu">
                <ul>
                    <router-link to="/">
                        <li>
                            <img src="../assets/elm.svg" alt="waimai">
                            <span>外卖</span>
                        </li>
                    </router-link>
                    <router-link to="/discover">
                        <li>
                            <img src="../assets/fx.svg" alt="faxian">
                            <span>发现</span>
                        </li>
                    </router-link>
                    <router-link to="/order">
                        <li>
                            <img src="../assets/dd.svg" alt="dingdan">
                            <span>订单</span>
                        </li>
                    </router-link>
                    <router-link to="/my">
                        <li>
                            <img src="../assets/wd.svg" alt="wode">
                            <span>我的</span>
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"bootomMenu"
    }
</script>

<style scoped>
    .root{
        /*border:1px solid red;*/
        position: fixed;
        bottom: 0;
        left:0;
        width: 100%;
        height: 70px;
        background-color:#fff;
        z-index: 100;
    }
    /*.menu{
        margin:15px 0;
    }*/
    ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        padding: 0 40px;
        /*margin: 15px 0;*/
    }
    ul li{
        width: 40px;
        text-align: center;
        font-size: 16px;
    }
</style>
