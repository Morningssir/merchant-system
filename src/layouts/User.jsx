import React, { Fragment } from 'react';
import styles from './style.css';
import { Layout, Breadcrumb, Menu } from 'antd';
import { Link } from 'umi';
import {
  BankOutlined,
  SolutionOutlined,
  EditOutlined,
} from '@ant-design/icons';

const { Content, Sider, Footer } = Layout;

const User = (props) => {
  const { children, route, location } = props;
  //   const { routes } = route;
  //   const pathName = location.pathname;

  return (
    <Fragment>
      <Layout className={styles.mainbar}>
        <Sider className={styles.sider}>
          <Menu mode="inline" theme="light">
            <Menu.Item icon={<EditOutlined />}>
              <Link to={'/user'}>工作台</Link>
            </Menu.Item>
            <Menu.Item icon={<SolutionOutlined />}>
              <Link to={'/user/personal'}>个人信息</Link>
            </Menu.Item>
            <Menu.Item icon={<BankOutlined />}>
              <Link to={'/user/merchant'}>商铺信息</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.contentbar}>
          <Breadcrumb className={styles.breadcrumb}></Breadcrumb>
          <Content className={styles.content}>
            <div>{children}</div>
          </Content>
          <Footer className={styles.footer}>
            <div className={styles.footerContent}>2022</div>
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default User;
