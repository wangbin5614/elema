<template>
    <transition name="move">
        <div class="food" v-show="isShow" ref="food">
            <div class="food-content">
                <div class="img-header">
                    <img :src="food.image" alt="">
                    <div class="back" @click="hideFood">
                        <i class="icon-arrow_lift"></i>
                    </div>
                </div>
                <div class="content">
                    <h1 class="title">{{food.name}}</h1>
                    <div class="detail">
                        <span>月售{{food.sellCount}}份</span>
                        <span>好评率{{food.rating}}%</span>
                    </div>
                    <div class="price">
                        <span class="now">¥{{food.price}}</span>
                        <span v-show="food.oldPrice" class="old">¥{{food.oldPrice}}</span>
                    </div>
                    <div class="cartcontrol-wrapper" v-show="food.count">
                        <cartcontrol :food="food"></cartcontrol>
                    </div>
                    <transition name="fade">
                        <div class="buy" v-show="!food.count" @click="addCart($event)">加入购物车</div>
                    </transition>
                </div>
                <split></split>
                <div class="info">
                    <h1>商品介绍{{selectType}}</h1>
                    <p>{{food.info}}</p>
                </div>
                <split></split>
                <div class="rating">
                    <h1>商品评价</h1>
                    <ratingselect ref="ratingselect" :ratings="food.ratings" :select-type="selectType" :desc="desc"
                                  :only-content="false"></ratingselect>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import Vue from 'vue';
    import cartcontrol from 'components/cartcontrol/cartcontrol';
    import split from 'components/split/split';
    import ratingselect from 'components/ratingselect/ratingselect';
    const ALL = 2;
    export default {
        props: {
            food: {
                type: Object
            }
        },
        data () {
            return {
                isShow: false,
                desc: {
                    all: '全部',
                    positive: '推荐',
                    negative: '吐槽'
                },
                selectType: ALL
            };
        },
        methods: {
            show () {
                this.isShow = !this.isShow;
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.food, {
                            click: true
                        });
                    } else {
                        this.scroll.refresh();
                    }
                });
            },
            addCart (event) {
                if (!event._constructed) {
                    return;
                }
                Vue.set(this.food, 'count', 1);
            },
            hideFood () {
                this.isShow = !this.isShow;
                this.$refs.ratingselect.initData();
            }
        },
        components: {
            'cartcontrol': cartcontrol,
            'split': split,
            'ratingselect': ratingselect
        }
    };
</script>

<style scoped>
    .food {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 46px;
        width: 100%;
        background-color: #fff;
        z-index: 30;
        transition: all 0.35s linear;
    }

    .move-enter-active, .move-leave-active {
        transform: translate3d(100%, 0, 0);
    }

    /*此处可设置移动端不同手机屏幕宽度的宽高相等的视口*/
    .img-header {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 100%;
        background-color: #ccc;
    }

    .img-header img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .back {
        position: absolute;
        top: 10px;
        left: 0;
    }

    .icon-arrow_lift {
        display: block;
        padding: 10px;
        font-size: 20px;
        color: #fff;
    }

    .content, .info {
        padding: 18px;
        position: relative;
    }

    .content h1, .info h1 {
        font-size: 14px;
        font-weight: 700;
        color: rgb(7, 17, 27);
        line-height: 14px;
        margin-bottom: 8px;
    }

    .detail {
        font-size: 0;
        height: 10px;
        margin-bottom: 18px;
    }

    .detail span {
        display: inline-block;
        font-size: 10px;
        line-height: 10px;
        color: rgb(147, 153, 153);
    }

    .detail span:first-child {
        margin-right: 12px;
    }

    .content .price {
        font-weight: 700;
        margin-top: 8px;
    }

    .price .now {
        margin-right: 8px;
        font-size: 14px;
        color: rgb(240, 20, 20);
        font-weight: 700;
    }

    .price .old {
        font-size: 10px;
        color: rgb(147, 153, 159);
        text-decoration: line-through;
        font-weight: 700;
    }

    .cartcontrol-wrapper {
        position: absolute;
        right: 12px;
        bottom: 12px;
    }

    .buy {
        position: absolute;
        right: 18px;
        bottom: 18px;
        z-index: 10;
        padding: 6px 12px;
        border-radius: 12px;
        box-sizing: border-box;
        font-size: 10px;
        color: #fff;
        background-color: rgb(0, 160, 220);
        transition: all .3s linear;
    }

    /*fade-enter刚开始进入，fade-enter-active进入阶段；fade-leave刚开始结束，fade-leave-active结束阶段，可把active类似看于每个阶段的结束状态*/
    .fade-leave-active {
        opacity: 0;
    }

    .info p {
        font-size: 12px;
        font-weight: 200;
        color: rgb(77, 85, 93);
        line-height: 24px;
        padding: 0 8px;
    }

    .rating {
        padding-top: 18px;
    }

    .rating h1 {
        margin-left: 18px;
        font-size: 14px;
        font-weight: 700;
        color: rgb(7, 17, 27);
        line-height: 14px;
    }
</style>
