<template>
    <div>
        <v-header :seller="seller"></v-header>
        <div class="tab border-bottom-1px">
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
        <keep-alive>
            <router-view :seller="seller"></router-view>
        </keep-alive>
    </div>
</template>

<script type="text/ecmascript-6">
    import header from './components/header/header.vue';
    const ERR_OK = 0;
    export default{
        data() {
            return {
                seller: {}
            };
        },
        created() {
            this.$http.get('/api/seller').then((res) => {
                res = res.body;
                if (res.errno === ERR_OK) {
                    this.seller = res.data;
                }
            });
        },
        components: {
            'v-header': header
        }
    };
</script>

<style>
    .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }

    .table-item {
        flex-grow: 1;
        text-align: center;
    }

    .table-item div {
        font-size: 14px;
        color: rgb(77, 85, 93);
    }

    .table-item > .active-link {
        color: rgb(240, 20, 20);
    }

</style>
