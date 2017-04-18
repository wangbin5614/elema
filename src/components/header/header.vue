<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand">11</span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="detailShow=true">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="detailShow=true">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" alt="" width="100%" height="100%">
        </div>
        <transition name="fade">
            <div v-show="detailShow" class="detail">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">{{seller.name}}</h1>
                        <div class="star-wrapper">
                            <star :size="48" :score="seller.score"></star>
                        </div>
                        <titleBar :titleBar="'优惠信息'"></titleBar>
                        <ul v-if="seller.supports" class="supports">
                            <li v-for="item in seller.supports" class="support-item">
                                <span class="icon" :class="classMap[item.type]"></span>
                                <span class="text">{{item.description}}</span>
                            </li>
                        </ul>
                        <titleBar :titleBar="'商家公告'"></titleBar>
                        <div class="bulletin">
                            <p>{{seller.bulletin}}</p>
                        </div>
                    </div>
                </div>
                <div class="detail-close">
                    <i class="icon-close" @click="detailShow=false"></i>
                </div>
            </div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from 'components/star/star';
    import title from 'components/title/title';
    export default {
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
            'star': star,
            'titleBar': title
        }
    };
</script>

<style>
    .header {
        color: #fff;
        background-color: rgba(7, 17, 27, 0.5);
        position: relative;
    }

    .content-wrapper {
        padding: 24px 12px 18px 24px;
        font-size: 0;
        position: relative;
    }

    .avatar {
        display: inline-block;
        font-size: 14px;
        margin-left: 14px;
        vertical-align: top;
    }

    .avatar img {
        border-radius: 2px;
    }

    .header .content {
        display: inline-block;
        margin-left: 14px;
    }

    .title {
        margin: 2px 0 8px;
    }

    .brand {
        display: inline-block;
        width: 30px;
        height: 18px;
        vertical-align: bottom;
        background-image: url("brand@2x.png");
        -webkit-background-size: 30px 18px;
        background-size: 30px 18px;
    }

    .title .name {
        margin-left: 6px;
        font-size: 16px;
        line-height: 18px;
        font-weight: bold;
    }

    .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
    }

    .support .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
    }

    .support .decrease {
        background-image: url("decrease_1@2x.png");
    }

    .support .discount {
        background-image: url("discount_1@2x.png");
    }

    .support .guarantee {
        background-image: url("guarantee_1@2x.png");
    }

    .support .invoice {
        background-image: url("invoice_1@2x.png");
    }

    .support .special {
        background-image: url("special_1@2x.png");
    }

    .support .text {
        font-size: 10px;
    }

    .support-count {
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    .support-count .count {
        font-size: 10px;
    }

    .support-count .icon-keyboard_arrow_right {
        font-size: 10px;
        vertical-align: sub;
        margin-left: 2px;
    }

    .bulletin-wrapper {
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: rgba(7, 17, 27, 0.2);
        position: relative;
    }

    .bulletin-title {
        display: inline-block;
        height: 12px;
        width: 22px;
        background-image: url("bulletin@2x.png");
        background-size: 22px 12px;
        vertical-align: top;
        margin-top: 8px;
    }

    .bulletin-text {
        font-size: 10px;
        margin: 0 4px;
        vertical-align: top;
    }

    .bulletin-wrapper .icon-keyboard_arrow_right {
        font-size: 10px;
        position: absolute;
        top: 8px;
        right: 12px;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
    }

    .detail {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        z-index: 10;
        background-color: rgba(7, 17, 27, 0.8);
        backdrop-filter: blur(10px);
    }

    .fade-enter-active, .fade-leave-active {
        opacity: 1;
        transition: all .3s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .detail-wrapper {
        width: 100%;
        min-height: 100%;
    }

    .detail-main {
        margin-top: 64px;
        padding-bottom: 64px;
    }

    .detail-close {
        position: relative;
        width: 32px;
        height: 32px;
        margin: -64px auto 0 auto;
        clear: both;
        font-size: 32px;
    }

    .detail-main .name {
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
    }

    .star-wrapper {
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
    }

    .detail .title {
        display: flex;
        width: 80%;
        margin: 28px auto 24px auto;
    }

    .detail .title .line {
        flex: 1;
        position: relative;
        top: -6px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .detail .title .text {
        padding: 0 12px;
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
    }

    .supports {
        width: 80%;
        margin: 0 auto;
    }

    .support-item {
        padding: 0 12px;
        margin-bottom: 12px;
        font-size: 0;
    }

    .support-item:last-child {
        margin-bottom: 0;
    }

    .support-item .text {
        font-size: 12px;
        font-weight: 200;
        color: rgb(255, 255, 255);
        line-height: 16px;
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
        background-image: url("decrease_2@2x.png");
    }

    .supports .discount {
        background-image: url("discount_2@2x.png");
    }

    .supports .guarantee {
        background-image: url("guarantee_2@2x.png");
    }

    .supports .invoice {
        background-image: url("invoice_2@2x.png");
    }

    .supports .special {
        background-image: url("special_2@2x.png");
    }

    .bulletin {
        width: 80%;
        margin: 0 auto;
    }

    .bulletin p {
        padding: 0 12px;
        font-size: 12px;
        font-weight: 200;
        color: rgb(255, 255, 255);
        line-height: 24px;
    }
</style>
