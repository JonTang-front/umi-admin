import http from './http';
const { get, post } = http;
export default {
    async login(params) {
        return await post('/api/login', params);
    },
    async logout(params) {
        return await post('/api/logout', params);
    },
    async getMenu(params) {
        return await post('/api/getMenu', params);
    },
    async getGoods() {
        return await get('/api/getGoods');
    }
}