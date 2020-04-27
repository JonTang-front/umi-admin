/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import Header from './../../components/Header';
import Nav from './../../components/Nav';
import { Layout } from 'antd';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'dva';
import style from './index.less';

const { Sider, Content, Footer } = Layout;
@connect(({ system }) => ({
    system
}))
class BaseLayout extends Component{
    render(){
        return (
            <Layout className={style.admin_wrapper}>
                <Sider className={style.nav} trigger={null} collapsible collapsedWidth={0} collapsed={this.props.system.collapsed}>
                    <Nav/>
                </Sider>
                <Layout className={style.main_wrapper}>
                    <Header/>
                    <Content className={style.content}>
                        <TransitionGroup>
                            <CSSTransition key={1} classNames="fade" timeout={1}>
                                { this.props.children }
                            </CSSTransition>
                        </TransitionGroup>
                    </Content>
                    <Footer className={style.footer}>
                        Copyright © 2020 JonTang. All Rights Reserved. 
                        <a href="https://github.com/jontang-web" target="_blank">
                            JonTang
                            <img className={style.github_img} src={require('./../../assets/github.png')} alt=""/>
                        </a> 版权所有
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
export default BaseLayout;