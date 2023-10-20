import React, { FC, ReactNode } from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/Sidebar';

interface ILayoutProps {
  children: ReactNode;
}

const CustomLayout: FC<ILayoutProps> = (props) => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout className="layout_container">
      <Sidebar />
      <Layout>
        <Header className="layout_header">Header</Header>
        <Content className="layout_content">{props.children}</Content>
        <Footer className="layout_footer">Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
