export default {

    async addNewUser(params) {
        const json = await window.axios.post('/api/user', params);

        return json;
    },

    async getUser(id) {
        const json = await window.axios.get(`/api/user/${id}`);

        return json;
    },

    async saveEditUser(id, params) {
        const json = await window.axios.put(`/api/user/${id}`, params);

        return json;
    },
};
