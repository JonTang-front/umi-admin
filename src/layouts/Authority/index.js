// import router from 'umi/router';
// import BaseLayout from './../BaseLayout';
// import Login from './../../pages/login';
// import Util from 'Util';

// const { handleLocalStorage } = Util;
// export default function(props){
//     const token = handleLocalStorage.getItem('_TOKEN');
//     if(token){
//         return (
//             <BaseLayout>
//                 { props.children }
//             </BaseLayout>
//         );
//     }else{
//         router.push('/login');
//         return (<Login/>);
//     }
// }

export default function(props){
    console.log('authority');
    return props.children;
}