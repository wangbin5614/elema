<template>
    <div class="ratings">
        <div class="ratings-score border-1px">
            <div class="score-left border-right-1px">
                <div class="score-number">{{seller.score}}</div>
                <div class="score-title">综合评分</div>
                <div class="score-rank">高于周边商家{{seller.rankRate}}%</div>
            </div>
            <div class="score-right">
                <div class="score-wrapper">
                    <span class="score-subtitle">服务态度</span>
                    <div class="score-star">
                        <star :size="36" :score="seller.serviceScore"></star>
                    </div>
                    <span class="score-number">{{seller.serviceScore}}</span>
                </div>
                <div class="score-wrapper">
                    <span class="score-subtitle">商品评分</span>
                    <div class="score-star">
                        <star :size="36" :score="seller.foodScore"></star>
                    </div>
                    <span class="score-number">{{seller.foodScore}}</span>
                </div>
                <div class="score-wrapper">
                    <span class="score-subtitle">送达时间</span>
                    <span class="delivery">{{seller.deliveryTime}}分钟</span>
                </div>
            </div>
        </div>
        <div class="rating-content">
            <div class="rating-select">
                <div class="rating-type">
                    <span>全部{{rateType}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from 'components/star/star';
    const ERROR_OK = 0;
    export default{
        props: {
            seller: {
                type: Object
            }
        },
        data () {
            return {
                ratings: []
            };
        },
        created() {
            this.$http.get('/api/ratings').then((res) => {
                res = res.body;
                if (res.errno === ERROR_OK) {
                    this.ratings = res.data;
                }
            });
        },
        computed: {
            rateType() {
                let arr = [];
                this.ratings.forEach((rating) => {
                    if (rating.rateType === 1) {
                        arr.push(9);
                    }
                });
                return arr;
            }
        },
        components: {
            'star': star
        }
    };
</script>

<style>
    .ratings {
        background-color: #f3f5f7;
    }

    .ratings-score {
        padding: 18px 0;
        margin-bottom: 16px;
        display: flex;
        background-color: #fff;
    }

    .score-left {
        flex: 0 0 138px;
        width: 138px;
        text-align: center;
    }

    .score-left .score-number {
        font-size: 24px;
        color: rgb(255, 153, 0);
        line-height: 28px;
        margin-bottom: 6px;
    }

    .score-title {
        font-size: 12px;
        color: rgb(7, 17, 27);
        line-height: 12px;
        margin-bottom: 8px;
    }

    .score-rank {
        font-size: 10px;
        color: #93999f;
        line-height: 10px;
    }

    .score-right {
        flex: 1;
        padding-left: 24px;
    }

    .score-wrapper {
        margin-bottom: 8px;
        font-size: 0;
    }

    .score-wrapper:last-child {
        margin-bottom: 0;
    }

    .score-subtitle {
        display: inline-block;
        vertical-align: top;
        font-size: 12px;
        color: rgb(7, 17, 27);
        line-height: 18px;
    }

    .score-star {
        display: inline-block;
        margin: 0 8px;
    }

    .score-wrapper .delivery {
        font-size: 12px;
        color: rgb(147, 153, 159);
        line-height: 18px;
        margin-left: 12px;
    }

    .score-right .score-number {
        display: inline-block;
        color: rgb(255, 153, 0);
        line-height: 18px;
        font-size: 12px;
        vertical-align: top;
    }

    @media only screen and (max-width: 320px) {
        .score-right {
            padding-left: 8px;
        }

        .score-star {
            margin: 0;
        }
    }
</style>
