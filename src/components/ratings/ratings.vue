<template>
    <div class="ratings" ref="ratingsWrapper">
        <div class="ratings-wrapper">
            <div class="ratings-score">
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
            <split></split>
            <div class="rating-wrapper">
                <ratingselect ref="ratingselect" :ratings="ratings" :desc="desc"></ratingselect>
                <ul class="rating-content">
                    <li class="rating-item border-bottom-1px" v-for="item in ratingsDetail">
                        <div class="rating-avater">
                            <img width="28" height="28" :src="item.avatar" alt="">
                        </div>
                        <div class="rating-detail">
                            <div class="rating-name">{{item.username}}</div>
                            <div class="rating-star">
                                <star :size="24" :score="item.score"></star>
                                <span class="rating-delivery">{{item.deliveryTime}}分钟送达</span>
                            </div>
                            <div class="rating-text">{{item.text}}</div>
                            <div class="rating-foods">
                                <i :class="item.rateType === 0?'icon-thumb_up':'icon-thumb_down'"></i>
                                <span v-for="recommend in item.recommend" class="border-1px">{{recommend}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import star from 'components/star/star';
    import ratingselect from 'components/ratingselect/ratingselect';
    import split from 'components/split/split';
    const ERROR_OK = 0;
    export default{
        props: {
            seller: {
                type: Object
            }
        },
        data () {
            return {
                ratings: [],
                desc: {
                    all: '全部',
                    positive: '满意',
                    negative: '不满意'
                }
            };
        },
        created() {
            this.$http.get('/api/ratings').then((res) => {
                res = res.body;
                if (res.errno === ERROR_OK) {
                    this.ratings = res.data;
                    this.ratingsArr = res.data;
                    this.$nextTick(() => {
                        this.scroll = new BScroll(this.$refs.ratingsWrapper, {
                            click: true
                        });
                    });
                }
            });
        },
        computed: {
            ratingsDetail () {
                if (this.scroll) {
                    this.$nextTick(() => {
                        this.scroll.refresh();
                    });
                }
                this.ratings.forEach((rating) => {
                    rating.rateTime = this._initTime(rating.rateTime);
                });
                if (this.$store.state.onlyContent) {
                    if (this.$store.state.selectType === 1) {
                        return this.ratings.filter((rating) => {
                            return (rating.rateType === 1 && rating.text !== '');
                        });
                    } else if (this.$store.state.selectType === 0) {
                        return this.ratings.filter((rating) => {
                            return (rating.rateType === 0 && rating.text !== '');
                        });
                    } else {
                        return this.ratings.filter((rating) => {
                            return rating.text !== '';
                        });
                    }
                } else {
                    if (this.$store.state.selectType === 1) {
                        return this.ratings.filter((rating) => {
                            return rating.rateType === 1;
                        });
                    } else if (this.$store.state.selectType === 0) {
                        return this.ratings.filter((rating) => {
                            return rating.rateType === 0;
                        });
                    } else {
                        return this.ratings.filter((rating) => {
                            return this.ratings;
                        });
                    }
                }
            }
        },
        methods: {
            _initTime (time) {
                let date = new Date(time);
                let month = (date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
                let day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
                let hour = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
                let minute = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
                let second = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();
                return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
            }
        },
        components: {
            'star': star,
            'ratingselect': ratingselect,
            'split': split
        }
    };
</script>

<style scoped>
    .ratings {
        width: 100%;
        background-color: #f3f5f7;
        position: absolute;
        top: 176px;
        bottom: 0;
        overflow: hidden;
    }

    .ratings-score {
        padding: 18px 0;
        display: flex;
        background-color: #ffffff;
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

    .rating-wrapper{
        background-color: #fff;
    }

    .rating-select {
        padding: 0 18px;
    }

    .rating-type {
        font-size: 0;
        padding: 18px 0;
    }

    .rating-type span {
        display: inline-block;
        margin-right: 8px;
        padding: 10px;
        border-radius: 4px;
        font-size: 12px;
    }

    .rating-type span:first-child {
        background-color: #00a0dc;
        color: #fff;
    }

    .rating-type span:nth-child(2) {
        background-color: #ccecf8;
        color: #5c636a;
    }

    .rating-type span:last-child {
        background-color: #e9ebec;
        color: #5c636a;
        margin-right: 0;
    }

    .switch-btn {
        padding: 15px 0;
    }

    .switch-btn span {
        display: inline-block;
        font-size: 12px;
        line-height: 20px;
        vertical-align: top;
        color: #a4a9ae;
    }

    .icon-check_circle {
        color: #b7bbbf;
        font-size: 20px;
    }

    .highlight .icon-check_circle {
        color: #00c850;
    }

    .rating-content {
        padding: 0 18px;
    }

    .rating-item {
        padding: 18px 0;
        display: flex;
    }

    .rating-avater {
        flex: 0 0 28px;
        width: 28px;
    }

    .rating-avater img {
        border-radius: 50%;
    }

    .rating-detail {
        flex: 1;
        margin-left: 12px;
    }

    .rating-name {
        font-size: 10px;
        color: rgb(7, 17, 27);
        line-height: 12px;
    }

    .rating-star {
        display: flex;
        justify-content: flex-start;
        margin: 6px 0 8px;
    }

    .rating-delivery {
        font-size: 10px;
        font-weight: 200;
        color: rgb(147, 153, 159);
        line-height: 12px;
        margin-left: 6px;
    }

    .rating-text {
        font-size: 12px;
        color: rgb(7, 17, 27);
        line-height: 18px;
        margin-bottom: 8px;
    }

    .rating-foods .icon-thumb_up {
        font-size: 12px;
        color: rgb(0, 160, 220);
        line-height: 16px;
    }

    .rating-foods .icon-thumb_down {
        font-size: 12px;
        color: rgb(147, 153, 159);
        line-height: 16px;
    }

    .rating-foods span {
        display: inline-block;
        padding: 0 6px;
        margin: 0 8px 4px 0;
        vertical-align: top;
        border-radius: 2px;
        font-size: 9px;
        line-height: 16px;
        color: rgb(147, 153, 159);
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
