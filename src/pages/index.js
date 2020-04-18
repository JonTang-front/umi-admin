import router from 'umi/router';
export default function(props) {
  localStorage.setItem('user', 'jontang');
  const user = localStorage.getItem('user');
  if(user){
    if(props.location.pathname==='/'){
      router.push('/admin/home');
    }else{
      router.push(props.location.pathname);
    }
  }else{
    router.push('/login');
  }
  return null;
}
