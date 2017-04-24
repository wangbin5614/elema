<template>
    <div class="shopcart">
        <div class="cart-content">
            <div class="cart-left" :class="{'highlight':totalCount>0}">
                <div class="logo-wrapper">
                    <div class="logo-img">
                        <i class="icon-shopping_cart"></i>
                    </div>
                    <div v-show="totalCount>0" class="shopping-count">{{totalCount}}</div>
                </div>
                <div class="cart-price">¥{{totalPrice}}</div>
                <div class="cart-desc">另需费送费¥{{deliveryPrice}}元</div>
            </div>
            <div class="cart-right" :class="payClass">{{payDesc}}</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            selectFoods: {
                type: Array,
                default() {
                    return [{
                        price: 30,
                        count: 2
                    }];
                }
            },
            deliveryPrice: {
                type: Number,
                default: 0
            },
            minPrice: {
                type: Number,
                default: 0
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                this.selectFoods.forEach((food) => {
                    total += food.price * food.count;
                });
                return total;
            },
            totalCount() {
                let count = 0;
                this.selectFoods.forEach((food) => {
                    count += food.count;
                });
                return count;
            },
            payDesc() {
                if (this.totalPrice === 0) {
                    return `¥${this.minPrice}元起送`;
                } else if (this.totalPrice < this.minPrice) {
                    let diff = this.minPrice - this.totalPrice;
                    return `还差¥${diff}元起送`;
                } else {
                    return '去结算';
                }
            },
            payClass() {
                if (this.totalPrice >= this.minPrice) {
                    return 'enough-pay';
                } else {
                    return '';
                }
            }
        }
    };
</script>

<style>
    .shopcart {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 46px;
        z-index: 100;
    }

    .cart-content {
        display: flex;
        background-color: #141d27;
        font-size: 0;
    }

    .logo-wrapper {
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        border-radius: 50%;
        background-color: #141d27;
    }

    .logo-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #2b343c;
        text-align: center;
    }

    .logo-img .icon-shopping_cart {
        color: #80858a;
        line-height: 44px;
        font-size: 24px;
    }

    .shopping-count {
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        font-size: 9px;
        background-color: #f01414;
        color: #fff;
        border-radius: 16px;
        font-weight: 700;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    }

    .cart-left {
        flex: 1;
        font-size: 0;
    }

    .cart-price {
        display: inline-block;
        margin: 12px 0;
        padding-right: 12px;
        vertical-align: top;
        color: #919396;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

    .cart-desc {
        display: inline-block;
        font-size: 12px;
        vertical-align: top;
        color: rgba(255, 255, 255, 0.2);
        font-weight: 700;
        line-height: 48px;
        margin-left: 12px;
    }

    .highlight .logo-img {
        background-color: #00a0dc;
    }

    .highlight .icon-shopping_cart {
        color: #fff;
    }

    .highlight .cart-price {
        color: #fff;
    }

    .cart-right {
        flex: 0 0 100px;
        width: 100px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        color: rgba(255, 255, 255, 0.4);
        font-size: 12px;
        font-weight: 700;
        background-color: #2b333b;
    }

    .enough-pay {
        background-color: #00b43c;
        color: #fff;
    }
</style>
