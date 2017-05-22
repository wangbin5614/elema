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
                        <i class="icon-favorite" :class="{'red-icon-favorite':hasCollect}"></i>
                        <div v-show="hasCollect" class="collect-text">已收藏</div>
                        <div v-show="!hasCollect" class="collect-text">收藏</div>
                    </div>
                </div>
                <div class="seller-desc-bottom"></div>
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
        components: {
            'star': star
        }
    };
</script>

<style scoped>
    .seller-desc{
        padding:0 18px;
    }
    .seller-desc-top{
        display: flex;
        justify-content: space-between;
        padding: 18px 0;
    }
    .seller-title{
        font-size: 14px;
        color: rgb(7,17,27);
        line-height: 14px;
        margin-bottom: 8px;
    }
    .seller-satr{
        font-size: 0;
    }
    .seller-satr .star{
        display: inline-block;
        vertical-align: top;
    }
    .seller-ratingCount{
        font-size: 10px;
        line-height: 18px;
        margin: 0 12px 0 8px;
    }
    .seller-sellCount{
        font-size: 10px;
        line-height: 18px;
    }
    .icon-favorite{
        font-size: 24px;
        line-height: 24px;
        color: #ccc;
    }
    .red-icon-favorite{
        color: rgb(240,20,20);
    }
    .seller-desc-bottom{
        padding: 18px 0;
    }
</style>
