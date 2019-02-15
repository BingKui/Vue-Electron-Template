import Vue from 'vue';
import Tpl from './index.vue';
import store from '@store/index';
import router from '@router/index';
// import '@styles/main.less';

new Vue({
    router,
    store,
    render: h => h(Tpl),
}).$mount('#app');
