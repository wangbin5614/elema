<template>
    <div class="food" v-show="isShow" @click="isShow=!isShow">
       aa
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            food: {
                type: Object
            }
        },
        data () {
            return {
                isShow: false
            };
        },
        methods: {
            show () {
                this.isShow = !this.isShow;
            }
        }
    };
</script>

<style scoped>
    .food{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height:100vh;
        background-color: #ccc;
        z-index:1000;
    }
</style>
