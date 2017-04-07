<template>
    <div class="app">
        <v-header></v-header>
        <div class="tab">
            <div class="table-item">商品</div>
            <div class="table-item">评论</div>
            <div class="table-item">商家</div>
        </div>
        <div class="content">
            I am content
        </div>
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

<style lang="stylus" rel="stylesheet/stylus">
  .app
    .tab
      display:flex
      width:100%
</style>
