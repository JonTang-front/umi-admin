import React, { Component } from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Layout, Icon, Avatar, Popover, Menu, Modal } from 'antd';
import Util from './../../util';
import style from './index.less';

const { Header } = Layout;
const { Item, Divider } = Menu;
const { handleLocalStorage } = Util;
@connect(({ system }) => ({
    system
}))
class Top extends Component{
    state = {
        username: '',
        collapsed: this.props.system.collapsed
    }
    componentWillMount() {
        const user = handleLocalStorage.get('user');
        if(user){
            this.setState({
                username: JSON.parse(user).username
            })
        }
    }
    toggle = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'system/toggleMenu',
            payload: !this.state.collapsed
        });
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    logout = () => {
        handleLocalStorage.removeItem('user');
        router.push('/login');
    }
    menuClick = ({key}) => {
        switch(key){
            case '0': router.push('/user/personal');
                break;
            case '1': router.push('/user/personal');
                break;
            case '2': Modal.confirm({
                        title: '是否退出?',
                        okText: '确定',
                        cancelText: '取消',
                        centered: true,
                        onOk: this.logout
                    });
                break;
            default: break;
        }
    }
    render() {
        console.log(this.state);
        return (
            <Header className={style.header}>
                 <Icon className={style.trigger} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
                 <Popover content={
                        <Menu selectable={false} onClick={this.menuClick} style={{border: 'none'}}>
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
                    <span className={style.user}>hi，{ this.state.username }</span>
                    <Avatar src={require('./../../assets/author.jpg')}></Avatar>
                </Popover>
            </Header>
        );
    }
}
export default Top;