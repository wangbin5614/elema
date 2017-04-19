<template>
    <div class="cartcontrol">
        <div class="cart-decrease" v-show="food.count>0">
            <i class="icon-remove_circle_outline"></i>
        </div>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add">
            <i class="icon-add_circle"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            food: {
                type: Object
            }
        },
        created() {
            console.log(this.food);
        }
    };
</script>

<style>
    .cartcontrol{
        font-size: 0;
    }
    .cart-count{
        display: inline-block;
    }
    .cart-decrease,.cart-add{
        display: inline-block;
        padding: 6px;
    }
    .cart-decrease .icon-remove_circle_outline,.cart-add .icon-add_circle{
        font-size: 24px;
        line-height: 24px;
        color: rgb(0,160,220);
    }
</style>
