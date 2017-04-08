<template>
    <div>
        <v-header></v-header>
        <div class="tab">
            <div class="table-item">
                <router-link to="/goods" tag="div">商品</router-link>
            </div>
            <div class="table-item">
                <router-link to="/ratings" tag="div">评论</router-link>
            </div>
            <div class="table-item">
                <router-link to="/seller" tag="div">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import header from './components/header/header.vue';
    export default{
        components: {
            'v-header': header
        }
    };
</script>

<style>
    .tab{
        display: flex;
        width:100%;
        height:40px;
        line-height: 40px;
        border-bottom: 1px solid #eeeeee;
    }
    .table-item{
        flex-grow:1;
        text-align: center;
    }
    .table-item div{
        font-size: 14px;
        color: rgb(77,85,93);
    }
    .table-item>.active-link{
        color: rgb(240,20,20);
    }
</style>
