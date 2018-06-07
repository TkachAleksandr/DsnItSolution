import Vue from 'vue';
import VueRouter from 'vue-router';

import NotFound from '../components/NotFound.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            guest: true,
        },
    },

    // Must be the last entry in array.
    {
        path: '*',
        component: NotFound,
    },
];

export default new VueRouter({
    routes,
    mode: 'history',
    saveScrollPosition: false,
});
