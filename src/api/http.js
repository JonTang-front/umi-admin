import { message } from 'antd';
import Util from 'Util';
const fetch = require('dva').fetch;
const SuccessCode = 200;
const TimeoutCode = 504;
const { handleLocalStorage } = Util;
const token = handleLocalStorage.getItem('_TOKEN');

const _fetch = (fetch, timeout = 3000) => {
     return Promise.race([
        fetch,
        new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve({
                    code: TimeoutCode,
                    message: "请求超时"
                });
            }, timeout);
        })
    ]);
}

export default {
    get(url, params) {
/**
 * AbortController通过abort API 控制 AbortSignal 的状态，动态取消fetch请求。下同
 */
        const controller = new AbortController();
        const { signal } = controller;
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
            mode: 'cors',
            credentials: 'include',
            signal
        });
        return _fetch(getFetch).then(res => {
            if(res.ok && res.status===SuccessCode){
                return res.json();
            }else{
                if(res.status===TimeoutCode){
                    controller.abort();
                }
                return Promise.reject(res.message || res.statusText);
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    },
    post(url, params) {
        const controller = new AbortController();
        const { signal } = controller;
        const postFetch = fetch(url, {
            method: 'POST',
            headers: {
              'Authorization': token,//登录令牌
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(params),
            mode: 'cors',
            credentials: 'include',
            signal
        });
        return _fetch(postFetch).then(res => {
            if(res.ok && res.status===SuccessCode){
                return res.json();
            }else{
                if(res.status===TimeoutCode){
                    controller.abort();
                }
                return Promise.reject(res.message || res.statusText);
            }
        }).catch(err => {
            return Promise.reject(err);
        });
    }
}