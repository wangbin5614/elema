<template>
    <div class="seller"  ref="sellerWrapper">
        <div class="seller-wrapper">
            <div class="seller-desc border-bottom-1px">
                <div class="seller-desc-top border-bottom-1px">
                    <div class="seller-name">
                        <div class="subtitle">{{seller.name}}</div>
                        <div class="seller-satr">
                            <star :size="36" :score="seller.score"></star>
                            <span class="seller-ratingCount">({{seller.ratingCount}})</span>
                            <span class="seller-sellCount">月售{{seller.sellCount}}单</span>
                        </div>
                    </div>
                    <div class="seller-collect">
                        <i class="icon-favorite" :class="{'red-icon-favorite':hasCollect}" @click="collect"></i>
                        <div v-show="hasCollect" class="collect-text">已收藏</div>
                        <div v-show="!hasCollect" class="collect-text">收藏</div>
                    </div>
                </div>
                <ul class="seller-desc-bottom">
                    <li class="border-right-1px">
                        <h3>起送价</h3>
                        <div>
                            <span class="stress">{{seller.minPrice}}</span>元
                        </div>
                    </li>
                    <li class="border-right-1px">
                        <h3>商家配送</h3>
                        <div>
                            <span class="stress">{{seller.deliveryPrice}}</span>元
                        </div>
                    </li>
                    <li>
                        <h3>平均配送时间</h3>
                        <div>
                            <span class="stress">{{seller.deliveryTime}}</span>分钟
                        </div>
                    </li>
                </ul>
            </div>
            <div class="split"></div>
            <div class="seller-bulletin">
                <h3 class="subtitle">公告与活动</h3>
                <div class="bulletin-text">{{seller.bulletin}}</div>
                <ul class="supports">
                    <li v-for="item in seller.supports" class="border-top-1px">
                        <i class="icon" :class="classMap[item.type]"></i>
                        <span class="supports-text">{{item.description}}</span>
                    </li>
                </ul>
            </div>
            <div class="split"></div>
            <div class="seller-pics">
                <h3 class="subtitle">商家实景</h3>
                <div class="pics-wrapper">
                    <ul>
                        <li v-for="item in seller.pics"><img :src="item" alt="" width="120" height="90"></li>
                    </ul>
                </div>
            </div>
            <div class="split"></div>
            <div class="seller-info">
                <h3 class="subtitle">商家信息</h3>
                <ul class="info-list">
                    <li v-for="item in seller.infos" class="border-top-1px">{{item}}</li>
                </ul>
            </div>
        </div>
        <shopcart></shopcart>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import star from 'components/star/star';
    import shopcart from 'components/shopcart/shopcart';
    export default{
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                hasCollect: false
            };
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
            this.$nextTick(() => {
                this.sellerScroll = new BScroll(this.$refs.sellerWrapper, {
                    click: true
                });
            });
        },
        methods: {
            collect() {
                this.hasCollect = !this.hasCollect;
            }
        },
        components: {
            'star': star,
            'shopcart': shopcart
        }
    };
</script>

<style scoped>

    .seller-desc-top {
        display: flex;
        justify-content: space-between;
        padding-bottom: 18px;
    }

    .seller-satr {
        font-size: 0;
        margin-top: 8px;
    }

    .seller-satr .star {
        display: inline-block;
        vertical-align: top;
    }

    .seller-ratingCount {
        font-size: 10px;
        line-height: 18px;
        margin: 0 12px 0 8px;
    }

    .seller-sellCount {
        font-size: 10px;
        line-height: 18px;
    }

    .seller-collect {
        width: 36px;
        text-align: center;
    }

    .icon-favorite {
        font-size: 24px;
        line-height: 24px;
        color: #ccc;
    }

    .red-icon-favorite {
        color: rgb(240, 20, 20);
    }

    .collect-text {
        font-size: 10px;
        color: rgb(77, 85, 93);
        line-height: 10px;
        margin-top: 4px;
    }

    .seller-desc-bottom {
        padding: 18px 0;
        display: flex;
    }

    .seller-desc-bottom li {
        flex: 1;
        text-align: center;
    }

    .seller-desc-bottom h3 {
        color: rgb(147, 153, 159);
        font-size: 10px;
        line-height: 10px;
        margin-bottom: 4px;
    }

    .seller-desc-bottom div {
        line-height: 24px;
        color: rgb(7, 17, 27);
        font-size: 10px;
    }

    .stress {
        font-size: 24px;
        font-weight: 200;
    }

    .split {
        height: 16px;
        background-color: #f3f5f7;
    }

    .seller-bulletin, .seller-desc, .seller-pics, .seller-info {
        padding: 18px 18px 0;
    }

    .subtitle {
        color: rgb(7, 17, 27);
        font-size: 14px;
        font-weight: 700;
    }

    .bulletin-text {
        padding: 8px 12px 16px;
        font-weight: 200;
        color: rgb(240, 20, 20);
        line-height: 24px;
        font-size: 12px;
    }

    .supports li {
        padding: 16px 12px;
    }

    .supports .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        background-size: 16px 16px;
        background-repeat: no-repeat;
        vertical-align: top;
    }

    .supports .decrease {
        background-image: url("decrease_1@2x.png");
    }

    .supports .discount {
        background-image: url("discount_1@2x.png");
    }

    .supports .guarantee {
        background-image: url("guarantee_1@2x.png");
    }

    .supports .invoice {
        background-image: url("invoice_1@2x.png");
    }

    .supports .special {
        background-image: url("special_1@2x.png");
    }

    .supports-text {
        font-size: 12px;
        font-weight: 200;
        color: rgb(7, 17, 27);
        line-height: 16px;
    }

    .pics-wrapper ul {
        display: flex;
    }

    .pics-wrapper li {
        margin: 12px 6px 0 0;
    }

    .pics-wrapper li:last-child {
        margin-right: 0;
    }

    .info-list {
        margin-top: 12px;
    }

    .info-list li {
        padding: 16px 12px;
        font-size: 12px;
        font-weight: 200;
        color: rgb(7, 17, 27);
        line-height: 16px;
    }
</style>
