import user from '../../../api/user';

export const addNewUser = async (context, payload) => {
    const json = await user.addNewUser(payload.data);

    if (json.status === 200) {
        return json;
    }
    throw json;
};

export default {
    addNewUser,
};
