import { useState, useEffect } from 'react';
import router from 'umi/router';
import { Layout, Icon, Avatar, Popover, Menu, Modal } from 'antd';
import Util from './../../util';
import style from './index.less';

const { Header } = Layout;
const { Item, Divider } = Menu;
const { handleLocalStorage } = Util;
export default function(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [username, setUsername] = useState(null);
    useEffect(() => {
        setCollapsed(props.collapsed);
        const user = handleLocalStorage.get('user');
        if(user){
            setUsername(JSON.parse(user).username)
        }
    })
    const toggle = () => {

    }

    const logout = () => {
        handleLocalStorage.removeItem('user');
        router.push('/login');
    }

    const menuClick = ({key}) => {
        switch(key){
            case '0': router.push('/user');
                break;
            case '1': router.push('/user');
                break;
            case '2': Modal.confirm({
                        title: '是否退出?',
                        okText: '确定',
                        cancelText: '取消',
                        centered: true,
                        onOk: logout
                    });
                break;
        }
    }
    return (
        <Header className={style.header}>
             <Icon className={style.trigger} type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle}/>
             <Popover content={
                    <Menu selectable={false} onClick={menuClick} className={style.menu}>
                        <Item key="0">个人信息</Item>
                        <Divider></Divider>
                        <Item key="1">系统设置</Item>
                        <Divider></Divider>
                        <Item key="2">退出登录</Item>
                    </Menu>
                } 
                placement="bottom" 
                trigger="hover"
            >
                <span className={style.user}>hi，{ username }</span>
                <Avatar src={require('./../../assets/author.jpg')}></Avatar>
            </Popover>
        </Header>
    );
}