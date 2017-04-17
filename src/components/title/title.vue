<template>
    <div class="title-wrapper">
        <div class="line"></div>
        <div class="text">{{titleBar}}</div>
        <div class="line"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            titleBar: {
                type: String
            }
        }
    };
</script>

<style>
    .title-wrapper {
        display: flex;
        width: 80%;
        margin: 28px auto 24px auto;
    }

    .title-wrapper .line {
        flex: 1;
        position: relative;
        top: -6px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .title-wrapper .text {
        padding: 0 12px;
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
    }
</style>
