import React, { Fragment } from 'react';
import styles from './style.css';
import { Layout, Breadcrumb, Menu } from 'antd';
import { Link } from 'umi';
import {
  ClusterOutlined,
  UserOutlined,
  BankOutlined,
  SolutionOutlined,
  TagOutlined,
  HomeOutlined,
  EditOutlined,
} from '@ant-design/icons';

const { Content, Sider, Footer } = Layout;

const Administrator = (props) => {
  const { children, route, location } = props;
  //   const { routes } = route;
  //   const pathName = location.pathname;

  function callback(key) {
    console.log(key);
  }
  return (
    <Fragment>
      <Layout className={styles.mainbar}>
        <Sider className={styles.sider}>
          <Menu
            mode="inline"
            theme="light"
            defaultActiveKey="1"
            onChange={callback}
          >
            <Menu.Item icon={<EditOutlined />} key="1">
              <Link to={'/administrator'}>工作台</Link>
            </Menu.Item>
            <Menu.Item icon={<BankOutlined />} key="2">
              <Link to={'/administrator/merchant'}>商家管理</Link>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="3">
              <Link to={'/administrator/member'}>店员管理</Link>
            </Menu.Item>
            <Menu.Item icon={<HomeOutlined />} key="4">
              <Link to={'/administrator/house'}>房屋管理</Link>
            </Menu.Item>
            <Menu.Item icon={<ClusterOutlined />} key="5">
              <Link to={'/administrator/category'}>品类管理</Link>
            </Menu.Item>
            <Menu.Item icon={<TagOutlined />} key="6">
              <Link to={'/administrator/record'}>操作记录</Link>
            </Menu.Item>
            <Menu.Item icon={<SolutionOutlined />} key="7">
              <Link to={'/administrator/personal'}>个人中心</Link>
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

export default Administrator;
