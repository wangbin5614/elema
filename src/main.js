import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRource from 'vue-resource';
import Vuex from 'vuex';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
//  此处可直接写路径components是因为在build->webpack.base.confi.js中有设置 alias: {'components': resolve('src/components')};
Vue.use(VueRouter);
Vue.use(VueRource);
Vue.use(Vuex);

const routes = [
    {path: '/', redirect: '/goods', component: goods},
    {path: '/goods', name: 'goods', component: goods},
    {path: '/ratings', name: 'ratings', component: ratings},
    {path: '/seller', name: 'seller', component: seller}
];

const router = new VueRouter({
    routes: routes,
    //  linkActiveClass设置高亮的class
    linkActiveClass: 'active-link'
});

const bool = false;
const ALL = 2;
const vuex = new Vuex.Store({
    state: {
        onlyContent: bool,
        selectType: ALL
    },
    mutations: {
        initState (state) {
            state.onlyContent = bool;
            state.selectType = ALL;
        },
        toggleContent (state) {
            state.onlyContent = !state.onlyContent;
        }
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    store: vuex,
    template: '<App/>',
    components: {App}
});
