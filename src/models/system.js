import router from 'umi/router';
import API from './../api';
import Util from './../util';
const { handleLocalStorage } = Util;
export default {
    namespace: 'system',
    state: {
        collapsed: false
    },
    effects: {
        *login({ payload }, { call }) {
            const res = yield call(API.login, payload);
            if(res){
                const { token } = res.data;
                handleLocalStorage.setItem('_TOKEN', token).setItem('username', payload.username);
                router.push('/home');
            }
        },
        *logout(_, { call }) {
            yield call(API.logout);
            handleLocalStorage.removeItem('_TOKEN');
        }
    },
    reducers: {
        toggleMenu(state, { payload }) {
            return {
                ...state,
                collapsed: payload,
            };
        }
    },
    subscriptions: {}
}