import React, { Component } from 'react'
import Redirect from 'umi/redirect';
import { connect } from 'dva';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from '../components/Header';
import Nav from '../components/Nav';
import { Layout } from 'antd';
import Util from './../util';
import style from './index.less';

const { Sider, Content, Footer } = Layout;
const { handleLocalStorage } = Util;

@connect(({ system }) => ({
    system
}))
class Main extends Component{
    render() {
        const user = handleLocalStorage.getItem('user');
        if(this.props.location.pathname==='/login'){
            return this.props.children;
        }else{
            if(user){
                return (
                  <Layout className={style.admin_wrapper}>
                      <Sider className={style.nav} trigger={null} collapsible collapsedWidth={0} collapsed={this.props.system.collapsed}>
                          <Nav/>
                      </Sider>
                      <Layout className={style.main_wrapper}>
                          <Header/>
                          <Content className={style.content}>
                            <TransitionGroup>
                                <CSSTransition key={this.props.location.pathname} classNames="fade" timeout={1}>
                                  { this.props.children }
                                </CSSTransition>
                            </TransitionGroup>
                          </Content>
                          <Footer className={style.footer}>
                              Copyright © 2020 JonTang. All Rights Reserved. JonTang 版权所有
                          </Footer>
                      </Layout>
                  </Layout>
              );
            }else{
                return <Redirect to="/login" />;
            }
        }
    }
}
export default Main;