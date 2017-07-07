<template>
    <div class="ratingselect">
        <div class="rating-type border-bottom-1px">
            <span class="block positive" @click="select(2,$event)"
                  :class="{'positive-active':VselectType===2}">{{desc.all}}<span class="count">11</span></span>
            <span class="block positive" @click="select(0,$event)"
                  :class="{'positive-active':VselectType===0}">{{desc.positive}}<span class="count">8</span></span>
            <span class="block negative" @click="select(1,$event)"
                  :class="{'negative-active':VselectType===1}">{{desc.negative}}<span class="count">3</span></span>
        </div>
        <div class="switch" @click="toggleContent($event)">
            <i class="icon-check_circle" :class="{'on':VonlyContent}" ></i>
            <span class="text">只看有内容的评价{{count}}</span>
        </div>
        <div class="rating-content">
            <ul>
                <li v-for="item in ratings">{{item.username}}</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    //    const POSITIVE = 0;
    //    const NEGATIVE = 1;
    const ALL = 2;
    export default {
        props: {
            ratings: {
                type: Array,
                dafault() {
                    return [];
                }
            },
            selectType: {
                type: Number,
                default: ALL
            },
            onlyContent: {
                type: Boolean,
                default: false
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
        data() {
            return {
                VselectType: this.selectType,
                VonlyContent: this.onlyContent
            };
        },
        computed: {
            count () {
                return this.$store.state.count;
            }
        },
        methods: {
            initData () {
                this.VselectType = this.selectType;
                this.VonlyContent = this.onlyContent;
            },
            select (index, event) {
                if (!event._constructed) {
                    return;
                }
                this.VselectType = index;
            },
            toggleContent (event) {
                if (!event._constructed) {
                    return;
                }
                this.VonlyContent = !this.VonlyContent;
            }
        }
    };
</script>

<style scoped>
    .ratingselect {

    }

    .rating-type {
        margin: 0 18px;
        padding: 18px 0;
        font-size: 0;
    }

    .rating-type .block {
        display: inline-block;
        margin-right: 8px;
        padding: 8px 12px;
        font-size: 12px;
        border-radius: 1px;
        color: rgb(77, 85, 93);
    }

    .rating-type .block:last-child {
        margin-right: 0;
    }

    .block .count {
        font-size: 8px;
        margin-left: 2px;
        line-height: 16px;
    }

    .rating-type .positive {
        background-color: rgba(0, 160, 220, 0.2);
    }

    .rating-type .negative {
        background-color: rgba(77, 85, 93, 0.2);
    }

    .rating-type .positive-active {
        background: rgb(0, 160, 220);
        color: #fff;
    }

    .rating-type .negative-active {
        background: rgb(77, 85, 93);
        color: #fff;
    }

    .switch {
        padding: 12px 0 12px 18px;
        font-size: 0;
        line-height: 24px;
        color: rgb(147, 153, 159);
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }

    .switch i {
        font-size: 24px;
        margin-right: 4px;
        display: inline-block;
        vertical-align: top;
    }

    .switch .text {
        display: inline-block;
        font-size: 12px;
        vertical-align: top;
    }

    .switch .on {
        color: #00c850;
    }
</style>
