import http from './http';
const { get, post } = http;
export default {
    async login(params) {
        return post('/api/login', params);
    },
    async logout(params) {
        return post('/api/logout', params);
    },
    async getMenu(params) {
        return post('/api/getMenu', params);
    },
    async getGoods() {
        return get('/api/getGoods');
    }
}