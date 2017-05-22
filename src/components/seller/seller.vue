<template>
    <div class="seller">
        <div class="seller-wrapper">
            <div class="seller-desc border-bottom-1px">
                <div class="seller-desc-top border-bottom-1px">
                    <div class="seller-info">
                        <div class="seller-title">{{seller.name}}</div>
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
                <h3>公告与活动</h3>
                <div class="bulletin-text">{{seller.bulletin}}</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from 'components/star/star';
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
        methods: {
            collect() {
                this.hasCollect = !this.hasCollect;
            }
        },
        components: {
            'star': star
        }
    };
</script>

<style scoped>
    .seller-desc {
        padding: 0 18px;
    }

    .seller-desc-top {
        display: flex;
        justify-content: space-between;
        padding: 18px 0;
    }

    .seller-title {
        font-size: 14px;
        color: rgb(7, 17, 27);
        line-height: 14px;
        margin-bottom: 8px;
    }

    .seller-satr {
        font-size: 0;
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
    .seller-desc-bottom li{
        flex:1;
        text-align: center;
    }
    .seller-desc-bottom h3{
        color: rgb(147,153,159);
        font-size: 10px;
        line-height: 10px;
        margin-bottom: 4px;
    }
    .seller-desc-bottom div{
        line-height: 24px;
        color: rgb(7,17,27);
        font-size: 10px;
    }
    .stress{
        font-size: 24px;
        font-weight: 200;
    }
    .split{
        height:16px;
        background-color: #f3f5f7;
    }
    .seller-bulletin{
        padding: 18px 18px 0;
    }
    .seller-bulletin h3{
        color: rgb(7,17,27);
        font-size: 15px;
    }
    .bulletin-text{
        padding: 8px 12px 16px;
        font-weight: 200;
        color: rgb(240,20,20);
        line-height: 24px;
        font-size: 12px;
    }
</style>
