import NavLink from 'umi/navlink';
import withRouter from 'umi/withRouter';
import { useState, useEffect } from 'react';
import { Menu, Icon } from "antd";
import menuConfig from "../../config/menuConfig.js";
import style from './index.less';

const { SubMenu, Item } = Menu;
function Nav(props) {
    const [pathname, setPathname] = useState(null);
    // const [menuNodeTree, setMenuNodeTree] = useState(null);
    const renderMenu = menuConfig => {
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
                        { renderMenu(item.children) }
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
    const menuNodeTree = renderMenu(menuConfig);
    useEffect(() => {
        // setMenuNodeTree(renderMenu(menuConfig));
        setPathname(props.location.pathname);
    });
    return (
        <div className={style.nav_wrapper}>
            <div className={style.logo}>
                <img src={require('./../../assets/logo.svg')} alt="logo"/>
                {props.collapsed? '' : <h1>Admin</h1>}
            </div>
            <Menu theme="dark" defaultSelectedKeys={[pathname]}>
                { menuNodeTree }
            </Menu>
        </div>
    );
}

export default withRouter(Nav);