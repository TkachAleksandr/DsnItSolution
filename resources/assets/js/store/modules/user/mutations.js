import * as types from '../../mutation-type';

export default {
    [types.SURNAME](state, payload) {
        state.surname = payload;
    },
    [types.NAME](state, payload) {
        state.name = payload;
    },
    [types.MIDDLE_NAME](state, payload) {
        state.middleName = payload;
    },
    [types.BIRTHDAY](state, payload) {
        state.birthday = payload;
    },
    [types.POSITION](state, payload) {
        state.position = payload;
    },
    [types.SALARY](state, payload) {
        state.salary = payload;
    },
    [types.FILE](state, payload) {
        state.file = payload;
    },
};
