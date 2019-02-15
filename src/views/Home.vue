<template>
    <div>
        首页
        <div class="home-tip">{{appTip}}</div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Home',
    components: {},
    computed: {
        ...mapState({
            appTip: state => state.app.appTip,
        }),
    },
    methods: {
        ...mapActions([
            'getAppInfo',
        ]),
    },
};
</script>

<style lang="less">

</style>
