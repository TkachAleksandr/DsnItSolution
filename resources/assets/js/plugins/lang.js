import Vue from 'vue';
import VueI18n from 'vue-i18n';

import ru from '../lang/ru/ru';

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'ru',
    messages: {
        ru,
    },
});
