/**
 * title: 测试
 * Routes: 
 *  - ./src/layouts/Authority
 */
import router from 'umi/router';
import BaseLayout from './baseLayout';
import Login from './../pages/login';
import Util from './../util';

const { handleLocalStorage } = Util;
export default function(props){
    console.log('layouts/index');
    const token = handleLocalStorage.getItem('_TOKEN');
    if(props.location.pathname==='/login'){
        return props.children;
    }else{
        if(token){
            return (
                <BaseLayout>
                    { props.children }
                </BaseLayout>
            );
        }else{
            router.push('/login');
            return (<Login/>);
        }
    }
}