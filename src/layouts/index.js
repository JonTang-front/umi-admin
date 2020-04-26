import Redirect from 'umi/redirect';
import BaseLayout from './baseLayout';
import Util from './../util';

const { handleLocalStorage } = Util;
export default function(props){
    const token = handleLocalStorage.getItem('_TOKEN');
    if(props.location.pathname==='/login'){
        return props.children;
    }else{
        if(token){
            return <BaseLayout>{ props.children }</BaseLayout>
        }else{
            return <Redirect to="/login" />;
        }
    }
}