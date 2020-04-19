import Header from './../../components/Header';
import Nav from './../../components/Nav';
import { Layout } from 'antd';
import style from './index.less';

const { Sider, Content, Footer } = Layout;
export default function(props) {
    return (
        <Layout className={style.admin_wrapper}>
            <Sider className={style.nav} trigger={null} collapsible collapsed={props.collapsed}>
                <Nav/>
            </Sider>
            <Layout className={style.main_wrapper}>
                <Header/>
                <Content className={style.content}>
                    { props.children }
                </Content>
                <Footer className={style.footer}>
                    Copyright © 2019 JonTang. All Rights Reserved. JonTang 版权所有
                </Footer>
            </Layout>
        </Layout>
    );
}