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
          <Card className={styles.card} hoverable={true}>
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              size={100}
              className={styles.avatar}
            />
            <div className={styles.name}>
              <div className={styles.morning}>早安,Aelia！</div>
              {/* <div className={styles.thename}>Aelia！</div> */}
              <p>祝你开心每一天！</p>
            </div>
            <p className={styles.adress}>蜜雪冰城（理工大学北区2公寓店）</p>
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
              <TabPane tab="提交申请" key="1">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="查看消息" key="2">
                待处理消息
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Workspace;
