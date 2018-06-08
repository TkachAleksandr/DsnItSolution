export default {
    async addNewUser(params) {
        const json = await window.axios.post('/api/user', params);

        return json.data;
    },
};
