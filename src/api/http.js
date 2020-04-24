import { message } from 'antd';
import Util from '../util';
const fetch = require('dva').fetch;

const { handleLocalStorage } = Util;
const token = handleLocalStorage.getItem('_TOKEN');

const _fetch = (fetch, timeout = 3000) => {
     return Promise.race([
        fetch,
        new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve({
                    code: 504,
                    message: "请求超时"
                });
            }, timeout);
        })
    ]);
}

export default {
    get(url, params) {
        if(params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        const getFetch = fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': token,//登录令牌
              'Accept': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            if(res.ok && res.status===200){
                return res.json();
            }else{
                return Promise.reject('fail');
            }
        });
        return _fetch(getFetch).then(result => {
                    if(result.code===200){
                        return result;
                    }else{
                        message.error(result.message);
                        return;
                    }
                }).catch(err => Promise.reject(err));
    },
    post(url, params) {
        const postFetch = fetch(url, {
            method: 'POST',
            headers: {
              'Authorization': token,//登录令牌
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(params),
            credentials: 'include'
        }).then(res => {
            if(res.ok && res.status===200){
                return res.json();
            }else{
                return Promise.reject('fail');
            }
        });
        return _fetch(postFetch).then(result => {
                    if(result.code===200){
                        return result;
                    }else{
                        message.error(result.message);
                        return;
                    }
                }).catch(err => Promise.reject(err));
    }
}