import React, { Component } from 'react';
import NavLink from 'umi/navlink';
import withRouter from 'umi/withRouter';
import { Menu, Icon } from "antd";
import menuConfig from "../../config/menuConfig.js";
import style from './index.less';

const { SubMenu, Item } = Menu;
class Nav extends Component{
    state = {}
    componentWillMount() {
        const menuNodeTree = this.renderMenu(menuConfig);
        this.setState({
            menuNodeTree,
            pathname: this.props.location.pathname
        });
    }
    renderMenu = menuConfig => {
        return menuConfig.map((item) => {
            if(item.children){
                return (
                    <SubMenu title={
                                <span>
                                    { item.icon && <Icon type={ item.icon } /> }
                                    <span>{ item.title }</span>
                                </span>
                            } 
                            key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                );
            }
            return (
                <Item title={item.title} key={item.key}>
                    { item.isLevel ? 
                        <NavLink to={item.key}>
                            { item.icon && <Icon type={item.icon}/> }
                            <span>{item.title}</span>
                        </NavLink> 
                        : 
                        <span>
                            { item.icon && <Icon type={item.icon}/> }
                            <span>{item.title}</span>
                        </span> 
                    }
                </Item>
            );
        });
    }
    render() {
        return (
            <div className={style.nav_wrapper}>
                <div className={style.logo}>
                    <img src={require('./../../assets/logo.svg')} alt="logo"/>
                    {this.props.collapsed? '' : <h1>Admin</h1>}
                </div>
                <Menu theme="dark" defaultSelectedKeys={[this.state.pathname]}>
                    { this.state.menuNodeTree }
                </Menu>
            </div>
        );
    }
}

export default withRouter(Nav);