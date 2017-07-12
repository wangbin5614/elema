webpackJsonp([0,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(32)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(47),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-72003cc6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(27)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(42),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-259806c0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(34)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(49),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-77057a8a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(30)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(45),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-529bea2c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(50),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-77f564ec",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(53),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(31)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(46),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-58a36638",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(36)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(51),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-da604590",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(28)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(43),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4e08c12a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const ERR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = {
    data() {
        return {
            seller: {}
        };
    },
    created() {
        this.$http.get('./index.php?type=seller').then(res => {
            res = res.body;
            if (res.errno === ERR_OK) {
                this.seller = res.data;
            }
        });
    },
    components: {
        'v-header': __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default.a
    }
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        food: {
            type: Object
        }
    },
    methods: {
        getTop(e) {
            let offsetTop = e.offsetTop;
            if (e.offsetParent != null) {
                offsetTop += this.getTop(e.offsetParent);
            }
            return offsetTop;
        },
        getLeft(e) {
            let offsetLeft = e.offsetLeft;
            if (e.offsetParent != null) {
                offsetLeft += this.getLeft(e.offsetParent);
            }
            return offsetLeft;
        },
        addCart(event) {
            if (!event._constructed) {
                return;
            }
            this.$store.commit('changePosi', { left: this.getLeft(event.target), top: this.getTop(event.target) });
            if (!this.food.count) {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(this.food, 'count', 1);
            } else {
                this.food.count++;
            }
            this.$emit('cartAdd', event);
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

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cartcontrol_cartcontrol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cartcontrol_cartcontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_cartcontrol_cartcontrol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_split_split__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_split_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_split_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_ratingselect_ratingselect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_ratingselect_ratingselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_ratingselect_ratingselect__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        food: {
            type: Object
        }
    },
    data() {
        return {
            isShow: false,
            desc: {
                all: '全部',
                positive: '推荐',
                negative: '吐槽'
            }
        };
    },
    computed: {
        ratingsDetail() {
            if (this.scroll) {
                this.$nextTick(() => {
                    this.scroll.refresh();
                });
            }
            this.food.ratings.forEach(rating => {
                rating.rateTime = this._initTime(rating.rateTime);
            });
            if (this.$store.state.onlyContent) {
                if (this.$store.state.selectType === 1) {
                    return this.food.ratings.filter(rating => {
                        return rating.rateType === 1 && rating.text !== '';
                    });
                } else if (this.$store.state.selectType === 0) {
                    return this.food.ratings.filter(rating => {
                        return rating.rateType === 0 && rating.text !== '';
                    });
                } else {
                    return this.food.ratings.filter(rating => {
                        return rating.text !== '';
                    });
                }
            } else {
                if (this.$store.state.selectType === 1) {
                    return this.food.ratings.filter(rating => {
                        return rating.rateType === 1;
                    });
                } else if (this.$store.state.selectType === 0) {
                    return this.food.ratings.filter(rating => {
                        return rating.rateType === 0;
                    });
                } else {
                    return this.food.ratings.filter(rating => {
                        return this.food.ratings;
                    });
                }
            }
        }
    },
    methods: {
        _initTime(time) {
            let date = new Date(time);
            let month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
            let day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
            let hour = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
            let minute = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
            let second = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();
            return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        },
        show() {
            this.isShow = !this.isShow;
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.food, {
                        click: true
                    });
                } else {
                    this.scroll.refresh();
                }
            });
        },
        addCart(event) {
            if (!event._constructed) {
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1_vue___default.a.set(this.food, 'count', 1);
            this.$emit('foodCartAdd', event);
        },
        hideFood() {
            this.isShow = !this.isShow;
            this.$refs.ratingselect.initData();
        },
        _drop(event) {
            this.$emit('foodCartAdd', event);
        }
    },
    components: {
        'cartcontrol': __WEBPACK_IMPORTED_MODULE_2_components_cartcontrol_cartcontrol___default.a,
        'split': __WEBPACK_IMPORTED_MODULE_3_components_split_split___default.a,
        'ratingselect': __WEBPACK_IMPORTED_MODULE_4_components_ratingselect_ratingselect___default.a
    }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_shopcart_shopcart__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_shopcart_shopcart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_shopcart_shopcart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cartcontrol_cartcontrol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_cartcontrol_cartcontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_cartcontrol_cartcontrol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_food_food__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_food_food___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_food_food__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const ERROR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        seller: {
            type: Object
        }
    },
    data() {
        return {
            goods: [],
            listHeight: [],
            scrollY: 0,
            selectedFood: {}
        };
    },
    created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        this.$http.get('/index.php?type=goods').then(res => {
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
        },
        selectedFoods() {
            let foods = [];
            this.goods.forEach(goods => {
                goods.foods.forEach(food => {
                    if (food.count) {
                        foods.push(food);
                    }
                });
            });
            return foods;
        }
    },
    watch: {
        selectedFood(curVal, oldVal) {
            if (oldVal.name) {
                this.$store.commit('initState');
            }
        }
    },
    methods: {
        _initScroll() {
            this.menuScroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.menuWrapper, {
                click: true
            });
            this.foodsScroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.foodsWrapper, {
                click: true,
                //                   snap: true防止滑动太快左边菜单没及时反应过来就切换了路由，这样会导致报错
                snap: true,
                probeType: 3
            });
            this.foodsScroll.on('scroll', pos => {
                this.scrollY = Math.abs(Math.round(pos.y));
                let menuList = this.$refs.menuWrapper.getElementsByClassName('menu-item-hook');
                for (let i = 1; i < this.listHeight.length; i++) {
                    if (this.scrollY >= this.listHeight[i - 1] && this.scrollY < this.listHeight[i]) {
                        this.menuScroll.scrollToElement(menuList[i - 1], 800);
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
        },
        selectFood(food, event) {
            if (!event._constructed) {
                return;
            }
            this.selectedFood = food;
            setTimeout(() => {
                this.$refs.food.show();
            }, 100);
        },
        _drop(event) {
            this.$refs.shopCart.drop(event);
        }
    },
    components: {
        'shopcart': __WEBPACK_IMPORTED_MODULE_1_components_shopcart_shopcart___default.a,
        'cartcontrol': __WEBPACK_IMPORTED_MODULE_2_components_cartcontrol_cartcontrol___default.a,
        'food': __WEBPACK_IMPORTED_MODULE_3_components_food_food___default.a
    }
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_star_star__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_star_star__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_title_title__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_title_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_title_title__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        seller: {
            type: Object
        }
    },
    data() {
        return {
            detailShow: false
        };
    },
    created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
        'star': __WEBPACK_IMPORTED_MODULE_0_components_star_star___default.a,
        'titleBar': __WEBPACK_IMPORTED_MODULE_1_components_title_title___default.a
    }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_star_star__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_star_star__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_ratingselect_ratingselect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_ratingselect_ratingselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_ratingselect_ratingselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_split_split__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_split_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_split_split__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const ERROR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        seller: {
            type: Object
        }
    },
    data() {
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
        this.$http.get('/index.php?type=ratings').then(res => {
            res = res.body;
            if (res.errno === ERROR_OK) {
                this.ratings = res.data;
                this.ratingsArr = res.data;
                this.$nextTick(() => {
                    this.scroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.ratingsWrapper, {
                        click: true
                    });
                });
            }
        });
    },
    computed: {
        ratingsDetail() {
            if (this.scroll) {
                this.$nextTick(() => {
                    this.scroll.refresh();
                });
            }
            this.ratings.forEach(rating => {
                rating.rateTime = this._initTime(rating.rateTime);
            });
            if (this.$store.state.onlyContent) {
                if (this.$store.state.selectType === 1) {
                    return this.ratings.filter(rating => {
                        return rating.rateType === 1 && rating.text !== '';
                    });
                } else if (this.$store.state.selectType === 0) {
                    return this.ratings.filter(rating => {
                        return rating.rateType === 0 && rating.text !== '';
                    });
                } else {
                    return this.ratings.filter(rating => {
                        return rating.text !== '';
                    });
                }
            } else {
                if (this.$store.state.selectType === 1) {
                    return this.ratings.filter(rating => {
                        return rating.rateType === 1;
                    });
                } else if (this.$store.state.selectType === 0) {
                    return this.ratings.filter(rating => {
                        return rating.rateType === 0;
                    });
                } else {
                    return this.ratings.filter(rating => {
                        return this.ratings;
                    });
                }
            }
        }
    },
    methods: {
        _initTime(time) {
            let date = new Date(time);
            let month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
            let day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
            let hour = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
            let minute = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
            let second = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();
            return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        }
    },
    components: {
        'star': __WEBPACK_IMPORTED_MODULE_1_components_star_star___default.a,
        'ratingselect': __WEBPACK_IMPORTED_MODULE_2_components_ratingselect_ratingselect___default.a,
        'split': __WEBPACK_IMPORTED_MODULE_3_components_split_split___default.a
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const POSITIVE = 0;
const NEGATIVE = 1;
/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        ratings: {
            type: Array,
            dafault() {
                return [];
            }
        },
        desc: {
            type: Object,
            default() {
                return {
                    all: '全部',
                    positive: '满意',
                    negative: '不满意'
                };
            }
        }
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapState */])({
        onlyContent: 'onlyContent',
        selectType: 'selectType',
        positives() {
            return this.ratings.filter(rating => {
                return rating.rateType === POSITIVE;
            });
        },
        negatives() {
            return this.ratings.filter(rating => {
                return rating.rateType === NEGATIVE;
            });
        }
    }),
    methods: {
        initData() {
            this.VselectType = this.selectType;
        },
        select(index, event) {
            if (!event._constructed) {
                return;
            }
            this.$store.state.selectType = index;
        },
        toggleContent(event) {
            if (!event._constructed) {
                return;
            }
            this.$store.commit('toggleContent');
        }
    }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_star_star__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_star_star__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_split_split__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_split_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_split_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_shopcart_shopcart__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_shopcart_shopcart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_shopcart_shopcart__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
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
    },
    mounted() {
        setTimeout(() => {
            this._initSeller();
            this._initPics();
        }, 10);
    },
    methods: {
        _initPics() {
            if (this.seller.pics) {
                let picWidth = 120;
                let margin = 6;
                let width = (picWidth + margin) * this.seller.pics.length - margin;
                this.$refs.picList.style.width = width + 'px';
                if (!this.picScroll) {
                    this.picScroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.picScroll, {
                        scrollX: true,
                        eventPassthrough: 'vertical'
                    });
                } else {
                    this.picScroll.refresh();
                }
            }
        },
        _initSeller() {
            if (!this.sellerScroll) {
                this.sellerScroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.sellerScroll, {
                    click: true
                });
            } else {
                this.sellerScroll.refresh();
            }
        },
        collect(event) {
            if (!event._constructed) {
                return;
            }
            this.hasCollect = !this.hasCollect;
        }
    },
    components: {
        'star': __WEBPACK_IMPORTED_MODULE_1_components_star_star___default.a,
        'shopcart': __WEBPACK_IMPORTED_MODULE_3_components_shopcart_shopcart___default.a,
        'split': __WEBPACK_IMPORTED_MODULE_2_components_split_split___default.a
    }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_cartcontrol_cartcontrol__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_cartcontrol_cartcontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_cartcontrol_cartcontrol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_scroll__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_better_scroll__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        selectFoods: {
            type: Array,
            default() {
                return [];
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
    data() {
        return {
            fold: false,
            balls: [{
                show: false
            }, {
                show: false
            }, {
                show: false
            }, {
                show: false
            }, {
                show: false
            }],
            dropBalls: []
        };
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.selectFoods.forEach(food => {
                total += food.price * food.count;
            });
            return total;
        },
        totalCount() {
            let count = 0;
            this.selectFoods.forEach(food => {
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
        },
        listShow() {
            if (!this.totalCount) {
                this.fold = false;
                return false;
            }
            if (this.fold) {
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new __WEBPACK_IMPORTED_MODULE_2_better_scroll___default.a(this.$refs.listcontent, {
                            click: true
                        });
                    } else {
                        this.scroll.refresh();
                    }
                });
            }
            return this.fold;
        }
    },
    methods: {
        toggleList() {
            if (!this.totalCount) {
                return;
            }
            this.fold = !this.fold;
        },
        hideList() {
            this.fold = false;
        },
        cleanList() {
            this.selectFoods.forEach(food => {
                if (food.count) {
                    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(food, 'count');
                }
            });
        },
        drop(el) {
            for (let i = 0; i < this.balls.length; i++) {
                let ball = this.balls[i];
                if (!ball.show) {
                    ball.show = true;
                    ball.el = el.target;
                    this.dropBalls.push(ball);
                    return;
                }
            }
        },
        beforeEnter(el) {
            let count = this.balls.length;
            while (count--) {
                let ball = this.balls[count];
                if (ball.show) {
                    let rect = ball.el.getBoundingClientRect();
                    let x = rect.left - 32;
                    let y = -(window.innerHeight - rect.top - 22);
                    el.style.display = '';
                    el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                    el.style.transform = `translate3d(0,${y}px,0)`;
                    let inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                    inner.style.transform = `translate3d(${x}px,0,0)`;
                }
            }
        },
        enters(el, done) {
            /* eslint-disable no-unused-vars */
            let refresh = el.offsetHeight;
            this.$nextTick(() => {
                el.style.webkitTransform = 'translate3d(0,0,0)';
                el.style.transform = 'translate3d(0,0,0)';
                let inner = el.getElementsByClassName('inner-hook')[0];
                inner.style.webkitTransform = 'translate3d(0,0,0)';
                inner.style.transform = 'translate3d(0,0,0)';
                el.addEventListener('transitionend', done);
            });
        },
        afterEnter(el) {
            let ball = this.dropBalls.shift();
            if (ball) {
                ball.show = false;
                el.style.display = 'none';
            }
        }
    },
    components: {
        'cartcontrol': __WEBPACK_IMPORTED_MODULE_1_components_cartcontrol_cartcontrol___default.a
    }
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

const LENGTH = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';
/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        size: {
            type: Number
        },
        score: {
            type: Number
        }
    },
    computed: {
        starType: function () {
            return 'star-' + this.size;
        },
        itemClasses: function () {
            let result = [];
            let score = Math.floor(this.score * 2) / 2;
            let hasDecimal = score % 1 !== 0;
            let intiger = Math.floor(this.score);
            for (let i = 0; i < intiger; i++) {
                result.push(CLS_ON);
            }
            if (hasDecimal) {
                result.push(CLS_HALF);
            }
            while (result.length < LENGTH) {
                result.push(CLS_OFF);
            }
            return result;
        }
    }
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        titleBar: {
            type: String
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(33)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(48),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-76d8bbec",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(29)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(44),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4e59b56a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(52),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e67a5e88",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "split border-bottom-1px border-top-1px"
  })
},staticRenderFns: []}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "sellerScroll",
    staticClass: "seller"
  }, [_c('div', {
    staticClass: "seller-wrapper"
  }, [_c('div', {
    staticClass: "seller-desc border-bottom-1px"
  }, [_c('div', {
    staticClass: "seller-desc-top border-bottom-1px"
  }, [_c('div', {
    staticClass: "seller-name"
  }, [_c('div', {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.seller.name))]), _vm._v(" "), _c('div', {
    staticClass: "seller-satr"
  }, [_c('star', {
    attrs: {
      "size": 36,
      "score": _vm.seller.score
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "seller-ratingCount"
  }, [_vm._v("(" + _vm._s(_vm.seller.ratingCount) + ")")]), _vm._v(" "), _c('span', {
    staticClass: "seller-sellCount"
  }, [_vm._v("月售" + _vm._s(_vm.seller.sellCount) + "单")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "seller-collect"
  }, [_c('i', {
    staticClass: "icon-favorite",
    class: {
      'red-icon-favorite': _vm.hasCollect
    },
    on: {
      "click": function($event) {
        _vm.collect($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.hasCollect),
      expression: "hasCollect"
    }],
    staticClass: "collect-text"
  }, [_vm._v("已收藏")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.hasCollect),
      expression: "!hasCollect"
    }],
    staticClass: "collect-text"
  }, [_vm._v("收藏")])])]), _vm._v(" "), _c('ul', {
    staticClass: "seller-desc-bottom"
  }, [_c('li', {
    staticClass: "border-right-1px"
  }, [_c('h3', [_vm._v("起送价")]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "stress"
  }, [_vm._v(_vm._s(_vm.seller.minPrice))]), _vm._v("元\n                    ")])]), _vm._v(" "), _c('li', {
    staticClass: "border-right-1px"
  }, [_c('h3', [_vm._v("商家配送")]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "stress"
  }, [_vm._v(_vm._s(_vm.seller.deliveryPrice))]), _vm._v("元\n                    ")])]), _vm._v(" "), _c('li', [_c('h3', [_vm._v("平均配送时间")]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "stress"
  }, [_vm._v(_vm._s(_vm.seller.deliveryTime))]), _vm._v("分钟\n                    ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "split border-bottom-1px border-top-1px"
  }), _vm._v(" "), _c('div', {
    staticClass: "seller-bulletin"
  }, [_c('h3', {
    staticClass: "subtitle"
  }, [_vm._v("公告与活动")]), _vm._v(" "), _c('div', {
    staticClass: "bulletin-text"
  }, [_vm._v(_vm._s(_vm.seller.bulletin))]), _vm._v(" "), _c('ul', {
    staticClass: "supports"
  }, _vm._l((_vm.seller.supports), function(item) {
    return _c('li', {
      staticClass: "border-top-1px"
    }, [_c('i', {
      staticClass: "icon",
      class: _vm.classMap[item.type]
    }), _vm._v(" "), _c('span', {
      staticClass: "supports-text"
    }, [_vm._v(_vm._s(item.description))])])
  }))]), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "seller-pics"
  }, [_c('h3', {
    staticClass: "subtitle"
  }, [_vm._v("商家实景")]), _vm._v(" "), _c('div', {
    ref: "picScroll",
    staticClass: "pics-wrapper"
  }, [_c('ul', {
    ref: "picList"
  }, _vm._l((_vm.seller.pics), function(item) {
    return _c('li', [_c('img', {
      attrs: {
        "src": item,
        "alt": "",
        "width": "120",
        "height": "90"
      }
    })])
  }))])]), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "seller-info"
  }, [_c('h3', {
    staticClass: "subtitle"
  }, [_vm._v("商家信息")]), _vm._v(" "), _c('ul', {
    staticClass: "info-list"
  }, _vm._l((_vm.seller.infos), function(item) {
    return _c('li', {
      staticClass: "border-top-1px"
    }, [_vm._v(_vm._s(item))])
  }))])], 1)])
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "content-wrapper"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "width": "64",
      "height": "64",
      "src": _vm.seller.avatar,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "brand"
  }, [_vm._v("11")]), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.seller.name))])]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("\n                " + _vm._s(_vm.seller.description) + "/" + _vm._s(_vm.seller.deliveryTime) + "分钟送达\n            ")]), _vm._v(" "), (_vm.seller.supports) ? _c('div', {
    staticClass: "support"
  }, [_c('span', {
    staticClass: "icon",
    class: _vm.classMap[_vm.seller.supports[0].type]
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.seller.supports[0].description))])]) : _vm._e()]), _vm._v(" "), (_vm.seller.supports) ? _c('div', {
    staticClass: "support-count",
    on: {
      "click": function($event) {
        _vm.detailShow = true
      }
    }
  }, [_c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.seller.supports.length) + "个")]), _vm._v(" "), _c('i', {
    staticClass: "icon-keyboard_arrow_right"
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "bulletin-wrapper",
    on: {
      "click": function($event) {
        _vm.detailShow = true
      }
    }
  }, [_c('span', {
    staticClass: "bulletin-title"
  }), _c('span', {
    staticClass: "bulletin-text"
  }, [_vm._v(_vm._s(_vm.seller.bulletin))]), _vm._v(" "), _c('i', {
    staticClass: "icon-keyboard_arrow_right"
  })]), _vm._v(" "), _c('div', {
    staticClass: "background"
  }, [_c('img', {
    attrs: {
      "src": _vm.seller.avatar,
      "alt": "",
      "width": "100%",
      "height": "100%"
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.detailShow),
      expression: "detailShow"
    }],
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "detail-wrapper clearfix"
  }, [_c('div', {
    staticClass: "detail-main"
  }, [_c('h1', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.seller.name))]), _vm._v(" "), _c('div', {
    staticClass: "star-wrapper"
  }, [_c('star', {
    attrs: {
      "size": 48,
      "score": _vm.seller.score
    }
  })], 1), _vm._v(" "), _c('titleBar', {
    attrs: {
      "titleBar": '优惠信息'
    }
  }), _vm._v(" "), (_vm.seller.supports) ? _c('ul', {
    staticClass: "supports"
  }, _vm._l((_vm.seller.supports), function(item) {
    return _c('li', {
      staticClass: "support-item"
    }, [_c('span', {
      staticClass: "icon",
      class: _vm.classMap[item.type]
    }), _vm._v(" "), _c('span', {
      staticClass: "text"
    }, [_vm._v(_vm._s(item.description))])])
  })) : _vm._e(), _vm._v(" "), _c('titleBar', {
    attrs: {
      "titleBar": '商家公告'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bulletin"
  }, [_c('p', [_vm._v(_vm._s(_vm.seller.bulletin))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail-close"
  }, [_c('i', {
    staticClass: "icon-close",
    on: {
      "click": function($event) {
        _vm.detailShow = false
      }
    }
  })])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ratingselect"
  }, [_c('div', {
    staticClass: "rating-type border-bottom-1px"
  }, [_c('span', {
    staticClass: "block positive",
    class: {
      'positive-active': _vm.selectType === 2
    },
    on: {
      "click": function($event) {
        _vm.select(2, $event)
      }
    }
  }, [_vm._v(_vm._s(_vm.desc.all)), _c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.ratings.length))])]), _vm._v(" "), _c('span', {
    staticClass: "block positive",
    class: {
      'positive-active': _vm.selectType === 0
    },
    on: {
      "click": function($event) {
        _vm.select(0, $event)
      }
    }
  }, [_vm._v(_vm._s(_vm.desc.positive)), _c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.positives.length))])]), _vm._v(" "), _c('span', {
    staticClass: "block negative",
    class: {
      'negative-active': _vm.selectType === 1
    },
    on: {
      "click": function($event) {
        _vm.select(1, $event)
      }
    }
  }, [_vm._v(_vm._s(_vm.desc.negative)), _c('span', {
    staticClass: "count"
  }, [_vm._v(_vm._s(_vm.negatives.length))])])]), _vm._v(" "), _c('div', {
    staticClass: "switch",
    on: {
      "click": function($event) {
        _vm.toggleContent($event)
      }
    }
  }, [_c('i', {
    staticClass: "icon-check_circle",
    class: {
      'on': _vm.onlyContent
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("只看有内容的评价")])])])
},staticRenderFns: []}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "goods"
  }, [_c('div', {
    ref: "menuWrapper",
    staticClass: "menu-wrapper"
  }, [_c('ul', _vm._l((_vm.goods), function(item, index) {
    return _c('li', {
      staticClass: "menu-item menu-item-hook",
      class: {
        'current': _vm.currentIndex === index
      },
      on: {
        "click": function($event) {
          _vm.selectMenu(index, $event)
        }
      }
    }, [_c('span', {
      staticClass: "text border-bottom-1px"
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.type > 0),
        expression: "item.type>0"
      }],
      staticClass: "icon",
      class: _vm.classMap[item.type]
    }), _vm._v(_vm._s(item.name))])])
  }))]), _vm._v(" "), _c('div', {
    ref: "foodsWrapper",
    staticClass: "foods-wrapper"
  }, [_c('ul', _vm._l((_vm.goods), function(item) {
    return _c('li', {
      staticClass: "food-list food-list-hook"
    }, [_c('h1', {
      staticClass: "subTitle"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('ul', _vm._l((item.foods), function(food) {
      return _c('li', {
        staticClass: "food-item border-bottom-1px",
        on: {
          "click": function($event) {
            _vm.selectFood(food, $event)
          }
        }
      }, [_c('div', {
        staticClass: "icon"
      }, [_c('img', {
        attrs: {
          "width": "57",
          "height": "57",
          "src": food.icon,
          "alt": ""
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "content"
      }, [_c('h2', {
        staticClass: "name"
      }, [_vm._v(_vm._s(food.name))]), _vm._v(" "), _c('p', {
        staticClass: "desc"
      }, [_vm._v(_vm._s(food.description))]), _vm._v(" "), _c('div', {
        staticClass: "extra"
      }, [_c('span', [_vm._v("月售" + _vm._s(food.sellCount) + "份")]), _c('span', [_vm._v("好评率" + _vm._s(food.rating) + "%")])]), _vm._v(" "), _c('div', {
        staticClass: "price"
      }, [_c('span', {
        staticClass: "now"
      }, [_vm._v("¥" + _vm._s(food.price))]), _c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (food.oldPrice),
          expression: "food.oldPrice"
        }],
        staticClass: "old"
      }, [_vm._v("¥" + _vm._s(food.oldPrice))])]), _vm._v(" "), _c('div', {
        ref: "cartButton",
        refInFor: true,
        staticClass: "cartcontrol-wrapper"
      }, [_c('cartcontrol', {
        attrs: {
          "food": food
        },
        on: {
          "cartAdd": _vm._drop
        }
      })], 1)])])
    }))])
  }))]), _vm._v(" "), _c('shopcart', {
    ref: "shopCart",
    attrs: {
      "select-foods": _vm.selectedFoods,
      "delivery-price": _vm.seller.deliveryPrice,
      "min-price": _vm.seller.minPrice
    }
  }), _vm._v(" "), (_vm.selectedFood.name) ? _c('food', {
    ref: "food",
    attrs: {
      "food": _vm.selectedFood
    },
    on: {
      "foodCartAdd": _vm._drop
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cartcontrol"
  }, [_c('transition', {
    attrs: {
      "name": "enter"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count>0"
    }],
    staticClass: "cart-decrease",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.decreaseCart($event)
      }
    }
  }, [_c('i', {
    staticClass: "icon-remove_circle_outline"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count > 0),
      expression: "food.count>0"
    }],
    staticClass: "cart-count"
  }, [_vm._v(_vm._s(_vm.food.count))]), _vm._v(" "), _c('div', {
    staticClass: "cart-add",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.addCart($event)
      }
    }
  }, [_c('i', {
    staticClass: "icon-add_circle"
  })])], 1)
},staticRenderFns: []}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    ref: "food",
    staticClass: "food"
  }, [_c('div', {
    staticClass: "food-content"
  }, [_c('div', {
    staticClass: "img-header"
  }, [_c('img', {
    attrs: {
      "src": _vm.food.image,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "back",
    on: {
      "click": _vm.hideFood
    }
  }, [_c('i', {
    staticClass: "icon-arrow_lift"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.food.name))]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('span', [_vm._v("月售" + _vm._s(_vm.food.sellCount) + "份")]), _vm._v(" "), _c('span', [_vm._v("好评率" + _vm._s(_vm.food.rating) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "price"
  }, [_c('span', {
    staticClass: "now"
  }, [_vm._v("¥" + _vm._s(_vm.food.price))]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.oldPrice),
      expression: "food.oldPrice"
    }],
    staticClass: "old"
  }, [_vm._v("¥" + _vm._s(_vm.food.oldPrice))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.food.count),
      expression: "food.count"
    }],
    staticClass: "cartcontrol-wrapper"
  }, [_c('cartcontrol', {
    attrs: {
      "food": _vm.food
    },
    on: {
      "cartAdd": _vm._drop
    }
  })], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.food.count),
      expression: "!food.count"
    }],
    staticClass: "buy",
    on: {
      "click": function($event) {
        _vm.addCart($event)
      }
    }
  }, [_vm._v("加入购物车")])])], 1), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('h1', [_vm._v("商品介绍")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.food.info))])]), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "rating"
  }, [_c('h1', [_vm._v("商品评价")]), _vm._v(" "), _c('ratingselect', {
    ref: "ratingselect",
    attrs: {
      "ratings": _vm.food.ratings,
      "desc": _vm.desc
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "rating-wrapper"
  }, [_c('ul', _vm._l((_vm.ratingsDetail), function(item) {
    return _c('li', {
      staticClass: "border-bottom-1px"
    }, [_c('div', {
      staticClass: "rate-time"
    }, [_vm._v(_vm._s(item.rateTime))]), _vm._v(" "), _c('div', {
      staticClass: "rate-text"
    }, [_c('i', {
      class: item.rateType === 0 ? 'icon-thumb_up' : 'icon-thumb_down'
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.text))])]), _vm._v(" "), _c('div', {
      staticClass: "user-info"
    }, [_c('span', [_vm._v(_vm._s(item.username))]), _vm._v(" "), _c('img', {
      attrs: {
        "width": "12",
        "height": "12",
        "src": item.avatar,
        "alt": ""
      }
    })])])
  }))])], 1)], 1)])])
},staticRenderFns: []}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star",
    class: _vm.starType
  }, _vm._l((_vm.itemClasses), function(itemClass) {
    return _c('span', {
      staticClass: "star-item",
      class: itemClass
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shopcart"
  }, [_c('div', {
    staticClass: "cart-content",
    on: {
      "click": _vm.toggleList
    }
  }, [_c('div', {
    staticClass: "cart-left",
    class: {
      'highlight': _vm.totalCount > 0
    }
  }, [_c('div', {
    staticClass: "logo-wrapper"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.totalCount > 0),
      expression: "totalCount>0"
    }],
    staticClass: "shopping-count"
  }, [_vm._v(_vm._s(_vm.totalCount))])]), _vm._v(" "), _c('div', {
    staticClass: "cart-price"
  }, [_vm._v("¥" + _vm._s(_vm.totalPrice))]), _vm._v(" "), _c('div', {
    staticClass: "cart-desc"
  }, [_vm._v("另需费送费¥" + _vm._s(_vm.deliveryPrice) + "元")])]), _vm._v(" "), _c('div', {
    staticClass: "cart-right",
    class: _vm.payClass
  }, [_vm._v(_vm._s(_vm.payDesc))])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fold"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listShow),
      expression: "listShow"
    }],
    staticClass: "shopcart-list"
  }, [_c('div', {
    staticClass: "list-header"
  }, [_c('h1', {
    staticClass: "list-title"
  }, [_vm._v("购物车")]), _vm._v(" "), _c('span', {
    staticClass: "list-clean",
    on: {
      "click": _vm.cleanList
    }
  }, [_vm._v("清空")])]), _vm._v(" "), _c('div', {
    ref: "listcontent",
    staticClass: "list-content"
  }, [_c('ul', _vm._l((_vm.selectFoods), function(food) {
    return _c('li', {
      staticClass: "list-food border-bottom-1px"
    }, [_c('span', {
      staticClass: "list-name"
    }, [_vm._v(_vm._s(food.name))]), _vm._v(" "), _c('span', {
      staticClass: "list-price"
    }, [_vm._v("¥" + _vm._s(food.price * food.count))]), _vm._v(" "), _c('div', {
      staticClass: "cartcontrol-wrapper"
    }, [_c('cartcontrol', {
      attrs: {
        "food": food
      }
    })], 1)])
  }))])])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.listShow),
      expression: "listShow"
    }],
    staticClass: "list-background",
    on: {
      "click": _vm.hideList
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ball-container"
  }, _vm._l((_vm.balls), function(ball, index) {
    return _c('transition', {
      key: ball,
      attrs: {
        "name": "drop"
      },
      on: {
        "before-enter": _vm.beforeEnter,
        "enter": _vm.enters,
        "after-enter": _vm.afterEnter
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (ball.show),
        expression: "ball.show"
      }],
      staticClass: "ball"
    }, [_c('div', {
      staticClass: "inner inner-hook"
    })])])
  }))], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo-img"
  }, [_c('i', {
    staticClass: "icon-shopping_cart"
  })])
}]}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "ratingsWrapper",
    staticClass: "ratings"
  }, [_c('div', {
    staticClass: "ratings-wrapper"
  }, [_c('div', {
    staticClass: "ratings-score"
  }, [_c('div', {
    staticClass: "score-left border-right-1px"
  }, [_c('div', {
    staticClass: "score-number"
  }, [_vm._v(_vm._s(_vm.seller.score))]), _vm._v(" "), _c('div', {
    staticClass: "score-title"
  }, [_vm._v("综合评分")]), _vm._v(" "), _c('div', {
    staticClass: "score-rank"
  }, [_vm._v("高于周边商家" + _vm._s(_vm.seller.rankRate) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "score-right"
  }, [_c('div', {
    staticClass: "score-wrapper"
  }, [_c('span', {
    staticClass: "score-subtitle"
  }, [_vm._v("服务态度")]), _vm._v(" "), _c('div', {
    staticClass: "score-star"
  }, [_c('star', {
    attrs: {
      "size": 36,
      "score": _vm.seller.serviceScore
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "score-number"
  }, [_vm._v(_vm._s(_vm.seller.serviceScore))])]), _vm._v(" "), _c('div', {
    staticClass: "score-wrapper"
  }, [_c('span', {
    staticClass: "score-subtitle"
  }, [_vm._v("商品评分")]), _vm._v(" "), _c('div', {
    staticClass: "score-star"
  }, [_c('star', {
    attrs: {
      "size": 36,
      "score": _vm.seller.foodScore
    }
  })], 1), _vm._v(" "), _c('span', {
    staticClass: "score-number"
  }, [_vm._v(_vm._s(_vm.seller.foodScore))])]), _vm._v(" "), _c('div', {
    staticClass: "score-wrapper"
  }, [_c('span', {
    staticClass: "score-subtitle"
  }, [_vm._v("送达时间")]), _vm._v(" "), _c('span', {
    staticClass: "delivery"
  }, [_vm._v(_vm._s(_vm.seller.deliveryTime) + "分钟")])])])]), _vm._v(" "), _c('split'), _vm._v(" "), _c('div', {
    staticClass: "rating-wrapper"
  }, [_c('ratingselect', {
    ref: "ratingselect",
    attrs: {
      "ratings": _vm.ratings,
      "desc": _vm.desc
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "rating-content"
  }, _vm._l((_vm.ratingsDetail), function(item) {
    return _c('li', {
      staticClass: "rating-item border-bottom-1px"
    }, [_c('div', {
      staticClass: "rating-avater"
    }, [_c('img', {
      attrs: {
        "width": "28",
        "height": "28",
        "src": item.avatar,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "rating-detail"
    }, [_c('div', {
      staticClass: "rating-name"
    }, [_vm._v(_vm._s(item.username))]), _vm._v(" "), _c('div', {
      staticClass: "rating-star"
    }, [_c('star', {
      attrs: {
        "size": 24,
        "score": item.score
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "rating-delivery"
    }, [_vm._v(_vm._s(item.deliveryTime) + "分钟送达")])], 1), _vm._v(" "), _c('div', {
      staticClass: "rating-text"
    }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), _c('div', {
      staticClass: "rating-foods"
    }, [_c('i', {
      class: item.rateType === 0 ? 'icon-thumb_up' : 'icon-thumb_down'
    }), _vm._v(" "), _vm._l((item.recommend), function(recommend) {
      return _c('span', {
        staticClass: "border-1px"
      }, [_vm._v(_vm._s(recommend))])
    })], 2)])])
  }))], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-wrapper"
  }, [_c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.titleBar))]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })])
},staticRenderFns: []}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('v-header', {
    attrs: {
      "seller": _vm.seller
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tab border-bottom-1px"
  }, [_c('div', {
    staticClass: "table-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/goods",
      "tag": "div"
    }
  }, [_vm._v("商品")])], 1), _vm._v(" "), _c('div', {
    staticClass: "table-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/ratings",
      "tag": "div"
    }
  }, [_vm._v("评论")])], 1), _vm._v(" "), _c('div', {
    staticClass: "table-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/seller",
      "tag": "div"
    }
  }, [_vm._v("商家")])], 1)]), _vm._v(" "), _c('keep-alive', [_c('router-view', {
    attrs: {
      "seller": _vm.seller
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_goods_goods__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_goods_goods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_goods_goods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_ratings_ratings__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_ratings_ratings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components_ratings_ratings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_seller_seller__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_seller_seller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_components_seller_seller__);








//  此处可直接写路径components是因为在build->webpack.base.confi.js中有设置 alias: {'components': resolve('src/components')};
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */]);

const routes = [{ path: '/', redirect: '/goods', component: __WEBPACK_IMPORTED_MODULE_5_components_goods_goods___default.a }, { path: '/goods', name: 'goods', component: __WEBPACK_IMPORTED_MODULE_5_components_goods_goods___default.a }, { path: '/ratings', name: 'ratings', component: __WEBPACK_IMPORTED_MODULE_6_components_ratings_ratings___default.a }, { path: '/seller', name: 'seller', component: __WEBPACK_IMPORTED_MODULE_7_components_seller_seller___default.a }];

const bool = false;
const ALL = 2;
const vuex = new __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */].Store({
    state: {
        onlyContent: bool,
        selectType: ALL,
        targetPosi: {
            left: 0,
            top: 0
        }
    },
    mutations: {
        initState(state) {
            state.onlyContent = bool;
            state.selectType = ALL;
        },
        changePosi(state, pos) {
            state.targetPosi.left = pos.left;
            state.targetPosi.top = pos.top;
        },
        toggleContent(state) {
            state.onlyContent = !state.onlyContent;
        }
    }
});

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    routes: routes,
    //  linkActiveClass设置高亮的class
    linkActiveClass: 'active-link'
});

router.beforeEach((to, from, next) => {
    vuex.commit('initState');
    next();
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    router: router,
    store: vuex,
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_4__App___default.a }
});

/***/ })
],[57]);
//# sourceMappingURL=app.354677c32de9dc75c7a7.js.map