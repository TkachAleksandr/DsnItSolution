import user from '../../../api/user';
import * as types from '../../mutation-type';

export const addNewUser = async (context, payload) => {
    const json = await user.addNewUser(payload.data);

    if (json.status === 200) {
        return json;
    }

    throw json;
};

export const getUser = async ({ commit }, payload) => {
    const json = await user.getUser(payload);

    if (json.status === 200) {
        commit(types.SURNAME, json.data.surname);
        commit(types.NAME, json.data.name);
        commit(types.MIDDLE_NAME, json.data.middle_name);
        commit(types.BIRTHDAY, json.data.birthday);
        commit(types.POSITION, json.data.position);
        commit(types.SALARY, json.data.salary);
        return json;
    }

    throw json;
};

export const saveEditUser = async (context, { id, data }) => {
    const json = await user.saveEditUser(id, data);

    if (json.status === 200) {
        return json;
    }

    throw json;
};

export const removeUser = async (context, payload) => {
    const json = await user.removeUser(payload);

    if (json.status === 200) {
        return json;
    }

    throw json;
};

export const importFile = async (context, payload) => {
    const json = await user.importFile(payload.data);

    if (json.status === 0) {
        throw json;
    }
};

export const exportFile = async ({ commit }) => {
    const json = await user.exportFile();

    if (json.status === 1) {
        commit(types.FILE, json.data);
        return json;
    }
    if (json.status === 0) {
        throw json;
    }
};

export default {
    addNewUser,
    getUser,
    saveEditUser,
    removeUser,
    importFile,
    exportFile,
};
