import React, { Fragment } from 'react';
import { Card, Row, Col, Menu, Avatar, Tabs } from 'antd';
import styles from './style.css';

const { TabPane } = Tabs;

const Workspace = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <Fragment>
      <Row>
        <Col span={8}>
          <Card className={styles.card}>
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              size={100}
              className={styles.avatar}
            />
            <div>早安,Aelia！</div>
          </Card>
        </Col>

        <Col span={16}>
          <Card className={styles.message}>
            <Tabs
              defaultActiveKey="1"
              onChange={callback}
              tabBarGutter={60}
              // centered
              size={'large'}
            >
              <TabPane tab="待处理消息" key="1">
                待处理消息
              </TabPane>
              <TabPane tab="发布通知" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Workspace;
