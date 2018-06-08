import Vue from 'vue';

import './bootstrap';
import router from './router';
import store from './store';
import i18n from './plugins/lang';
import toasted from './plugins/toasted';

import App from './components/App.vue';

new Vue({
    router,
    store,
    i18n,
    toasted,
    el: '#app',
    template: '<App/>',
    components: { App },
});