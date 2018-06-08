import Vue from 'vue';
import VueI18n from 'vue-i18n';

import ua from '../lang/ua/ua';

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'ua',
    messages: {
        ua,
    },
});
