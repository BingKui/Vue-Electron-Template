<template>
    <div class="v-home">
        <div class="title">测试数据正常性</div>
        <div class="content">
            <div class="home-tip">{{appTip}}</div>
        </div>
        <div class="title">右键菜单组件-基础版</div>
        <div class="content">
            <MouseRightBase :mouseData="mouseRightData" :mouseKey="123">
                <div class="test-block">测试右键菜单元素</div>
            </MouseRightBase>
        </div>
        <div class="title">滚动条容器组件</div>
        <div class="content">
            <ScrollBarContainer class="test-scroll-bar">
                <p v-for="item in testData" :key="item">{{item}}</p>
            </ScrollBarContainer>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { MouseRightBase, ScrollBarContainer } from '@components/base';

// mock
import { mouseRightData, testData } from '@mock/demo';

export default {
    name: 'Home',
    components: {
        MouseRightBase,
        ScrollBarContainer,
    },
    computed: {
        ...mapState({
            appTip: state => state.app.appTip,
        }),
    },
    data: function() {
        return {
            mouseRightData,
            testData,
        };
    },
    methods: {
        ...mapActions([
            'getAppInfo',
        ]),
    },
};
</script>

<style lang="less">
.v-home {
    .title {
        .font-size-lg();
        font-weight: @font-weight-bold;
        color: @gray-darker;
        .m-v(@gap);
        .p-l(@gap);
        border-left: 5px solid @primary;
    }
    .content {
        border: 1px solid @primary;
        border-radius: @border-radius;
        .p(@gap-md);
    }
    .test-block {
        width: 100%;
        height: 80px;
        background-color: @gray;
        border-radius: @border-radius;
        .flex-center();
    }
    .test-scroll-bar {
        width: 100%;
        height: 300px;
        background-color: @gray;
    }
}
</style>
