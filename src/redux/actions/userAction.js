export const setUserToken = (token) => {
    return {
        type: 'SET_USER_TOKEN',
        payload: token
    };
};

export const clearUserToken = () => {
    return {
        type: 'CLEAR_USER_TOKEN',
    };
};

export const setLoaderState = (state) => {
    return {
        type: 'SET_LOADER_STATE',
        payload: state
    };
};
 