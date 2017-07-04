import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
//  此处可直接写路径components是因为在build->webpack.base.confi.js中有设置 alias: {'components': resolve('src/components')};
Vue.use(VueRouter);
Vue.use(VueRource);

const routes = [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
];

const router = new VueRouter({
    routes: routes,
    //  linkActiveClass设置高亮的class
    linkActiveClass: 'active-link'
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');

//  设置默认进来的页面
router.push('/seller');
