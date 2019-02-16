<template>
    <Scrolly :passive-scroll="true">
        <ScrollyViewport>
            <slot></slot>
        </ScrollyViewport>
        <ScrollyBar :axis="direction"/>
    </Scrolly>
</template>

<script>
import { Scrolly, ScrollyViewport, ScrollyBar } from 'vue-scrolly';
export default {
    name: 'ScrollBarContainer',
    components: {
        Scrolly,
        ScrollyViewport,
        ScrollyBar,
    },
    props: {
        direction: {
            type: String,
            default: 'y', // 滚动条的方向，x 或 y，默认为：y
        },
    },
};
</script>

<style lang="less" scoped>
.scrolly-bar {
    border-width: 2px;
    &.axis-y {
        width: 6px;
    }
}
</style>
