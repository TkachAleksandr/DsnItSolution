import Vue from 'vue';

import './bootstrap';
import router from './router';
import store from './store';
import i18n from './plugins/lang';
import toasted from './plugins/toasted';
import './plugins/toasted';
import './plugins/swal';

import App from './components/App.vue';

new Vue({
    router,
    store,
    i18n,
    el: '#app',
    template: '<App/>',
    components: { App },
});