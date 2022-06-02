import React from 'react';
import { Badge, Descriptions } from 'antd';
import styles from './style.css';

const Personal = () => {
  return (
    <Descriptions title="个人信息" bordered className={styles.all}>
      <Descriptions.Item label="商家名称" span={3}>
        Cloud Database
      </Descriptions.Item>
      <Descriptions.Item label="负责人">Prepaid</Descriptions.Item>
      <Descriptions.Item label="店员" span={2}>
        YES
      </Descriptions.Item>
      <Descriptions.Item label="所属品类">
        2018-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="经营商品" span={2}>
        2019-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="营业执照编号" span={3}>
        
      </Descriptions.Item>
      <Descriptions.Item label="营业执照">$80.00</Descriptions.Item>
      <Descriptions.Item label="经营资格证书">$20.00</Descriptions.Item>
      
    </Descriptions>
  );
};

export default Personal;
