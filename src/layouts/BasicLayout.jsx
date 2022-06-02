import React from 'react';
import styles from './style.css';
import { Layout } from 'antd';
import { Children } from 'react';
import { PicLeftOutlined } from '@ant-design/icons';
import { Link } from 'umi';

const { Header } = Layout;

const BasicLayout = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <PicLeftOutlined className={styles.icon} />
        <Link to="/" className={styles.header}>
          校内生活服务类商家信息管理系统
        </Link>
      </Header>
      <Layout className={styles.maincontent}>
        <div>{children} </div>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
