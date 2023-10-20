import React, { FC, ReactNode, useMemo } from 'react';
import { Layout, Menu } from 'antd';
import menuKeys from '../router/menuKeys';
import { defaultMenu } from '../constants/shared/defaultMenu';
import { sideMenu as financialMenu } from '../constants/financial/sideMenu';
import { sideMenu as amsMenu } from '../constants/AMS/sideMenu';
import { Link, useLoaderData } from 'react-router-dom';
import { IMenu } from '../types/menu/menu.type';

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuList = {
  [menuKeys.default]: defaultMenu,
  [menuKeys.financial]: financialMenu,
  [menuKeys.ams]: amsMenu,
};
const Sidebar: FC = () => {
  const loaderData: any = useLoaderData();
  const { routeKey, menuKey } = loaderData;
  const resolvedMenu = menuList[menuKey] ?? [];

  const renderMenu = (data: IMenu[]): ReactNode => {
    const content = [];
    for (const menu of data) {
      content.push(
        menu?.hasSubMenu && menu?.menu?.length > 0 ? (
          <SubMenu key={menu.key} title={menu.name}>
            {renderMenu(menu.menu)}
          </SubMenu>
        ) : (
          <Menu.Item key={menu.key}>
            <Link to={menu.url}>{menu.name}</Link>
          </Menu.Item>
        ),
      );
    }

    return content;
  };

  const routerMenu = useMemo(() => renderMenu(resolvedMenu), resolvedMenu);

  return (
    <Sider className="sidebar_container">
      <Menu selectedKeys={[routeKey]} mode="inline" style={{ height: '90vh' }}>
        {routerMenu}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
