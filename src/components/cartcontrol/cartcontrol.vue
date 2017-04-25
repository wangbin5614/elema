<template>
    <div class="cartcontrol">
        <transition name="enter">
            <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart($event)">
                <i class="icon-remove_circle_outline"></i>
            </div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add" @click="addCart($event)">
            <i class="icon-add_circle"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    export default {
        props: {
            food: {
                type: Object
            }
        },
        methods: {
            addCart(event) {
                if (!event._constructed) {
                    return;
                }
                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                } else {
                    this.food.count++;
                }
            },
            decreaseCart(event) {
                if (!event._constructed) {
                    return;
                }
                if (this.food.count) {
                    this.food.count--;
                }
            }
        }
    };
</script>

<style>
    .cartcontrol {
        font-size: 0;
    }

    .cart-count {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        line-height: 36px;
        font-size: 10px;
        color: rgb(147, 153, 159);
    }

    .cart-decrease, .cart-add {
        display: inline-block;
        padding: 6px;
    }

    .cart-decrease .icon-remove_circle_outline, .cart-add .icon-add_circle {
        font-size: 24px;
        line-height: 24px;
        color: rgb(0, 160, 220);
    }

    .enter-enter-active, .enter-leave-active {
        transition: all .5s linear;
    }

    .enter-enter, .enter-leave-active {
        opacity: 0;
        transform: translate3d(24px, 0, 0) rotate(180deg);
    }
</style>
