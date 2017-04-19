<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item,index) in goods" class="menu-item menu-item-hook"
                    :class="{'current':currentIndex===index}"
                    @click="selectMenu(index,$event)">
                    <span class="text border-1px"><span v-show="item.type>0" class="icon"
                                                        :class="classMap[item.type]"></span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foodsWrapper">
            <ul>
                <li v-for="item in goods" class="food-list food-list-hook">
                    <h1 class="subTitle">{{item.name}}</h1>
                    <ul>
                        <li v-for="food in item.foods" class="food-item border-1px">
                            <div class="icon">
                                <img width="57" height="57" :src="food.icon" alt="">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span>月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">¥{{food.price}}</span><span v-show="food.oldPrice" class="old">¥{{food.oldPrice}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    const ERROR_OK = 0;
    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                goods: [],
                listHeight: [],
                scrollY: 0
            };
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
            this.$http.get('/api/goods').then((res) => {
                res = res.body;
                if (res.errno === ERROR_OK) {
                    this.goods = res.data;
                    this.$nextTick(() => {
                        this._initScroll();
                        this._calculateHeight();
                    });
                }
            });
        },
        computed: {
            currentIndex() {
                for (let i = 1; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i - 1];
                    let height2 = this.listHeight[i];
                    if (this.scrollY >= height1 && this.scrollY < height2) {
                        return i - 1;
                    }
                }
                return 0;
            }
        },
        methods: {
            _initScroll() {
                this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                    click: true
                });
                this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
                    probeType: 3
                });
                this.foodsScroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y));
                    let menuList = this.$refs.menuWrapper.getElementsByClassName('menu-item-hook');
                    for (let i = 1; i < this.listHeight.length; i++) {
                        if (this.scrollY >= this.listHeight[i - 1] && this.scrollY < this.listHeight[i]) {
                            this.menuScroll.scrollToElement(menuList[i - 1], 500);
                            break;
                        }
                    }
                });
            },
            _calculateHeight() {
                let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
                let height = 0;
                this.listHeight.push(height);
                for (let i = 0; i < foodList.length; i++) {
                    let itemHeight = foodList[i].clientHeight;
                    height += itemHeight;
                    this.listHeight.push(height);
                }
            },
            selectMenu(index, event) {
                if (!event._constructed) {
                    return;
                }
                let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
                let el = foodList[index];
                this.foodsScroll.scrollToElement(el, 300);
            }
        }
    };
</script>

<style>
    .goods {
        display: flex;
        position: absolute;
        width: 100%;
        top: 176px;
        bottom: 46px;
        overflow: hidden;
    }

    .menu-wrapper {
        flex: 0 0 80px;
        width: 80px;
        background-color: #f3f5f7;
    }

    .foods-wrapper {
        flex: 1;
    }

    .menu-item {
        display: table;
        width: 56px;
        height: 54px;
        padding: 0 12px;
        font-size: 0;
        font-weight: 200;
    }

    .menu-wrapper .current {
        background-color: #fff;
        position: relative;
        margin-top: -1px;
        z-index:10;
    }

    .menu-wrapper .current .text {
        font-weight: 700;
    }

    .menu-wrapper .current .border-1px:after {
        display: none;
    }

    .menu-item .text {
        display: table-cell;
        vertical-align: middle;
        width: 56px;
        font-size: 12px;
        line-height: 14px;
    }

    .menu-item .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
    }

    .menu-item .decrease {
        background-image: url("decrease_3@2x.png");
    }

    .menu-item .discount {
        background-image: url("discount_3@2x.png");
    }

    .menu-item .guarantee {
        background-image: url("guarantee_3@2x.png");
    }

    .menu-item .invoice {
        background-image: url("invoice_3@2x.png");
    }

    .menu-item .special {
        background-image: url("special_3@2x.png");
    }

    .subTitle {
        height: 26px;
        line-height: 26px;
        font-size: 12px;
        padding-left: 12px;
        border-left: 2px solid #d9dde1;
        background-color: #f3f5f7;
        color: rgb(147, 153, 159);
    }

    .food-item {
        display: flex;
        padding: 18px 0;
        margin: 0 18px;
    }

    .food-item:last-child:after {
        display: none;
    }

    .food-item .icon {
        flex: 0 0 57px;
        margin-right: 10px;
    }

    .food-item .content {
        flex: 1;
    }

    .food-item .name {
        margin-top: 2px;
        font-size: 14px;
        color: rgb(7, 17, 27);
        line-height: 14px;
    }

    .content .extra {
        font-size: 10px;
        color: rgb(147, 153, 159);
        line-height: 10px;
        margin-top: 8px;
    }

    .content .desc {
        font-size: 10px;
        color: rgb(147, 153, 159);
        margin-top: 8px;
        line-height: 12px;
    }

    .content .extra span:first-child {
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
</style>
