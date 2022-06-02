import React from 'react';
import { Badge, Descriptions } from 'antd';
import styles from './style.css';

const Merchant = () => {
  return (
    <Descriptions title="商铺信息" bordered className={styles.all}>
      <Descriptions.Item label="商家名称" span={4}>
        Cloud Database
      </Descriptions.Item>
      <Descriptions.Item label="负责人">张三</Descriptions.Item>
      <Descriptions.Item label="店员" span={3}>
        YES
      </Descriptions.Item>
      
      <Descriptions.Item label="所属品类">
        2018-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="经营商品" span={3}>
        2019-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="营业执照编号" span={4}>
        
      </Descriptions.Item>
      <Descriptions.Item label="营业执照">$80.00</Descriptions.Item>
      <Descriptions.Item label="经营资格证书">$20.00</Descriptions.Item>
      {/* <Descriptions.Item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1<br />
      </Descriptions.Item> */}
    </Descriptions>
  );
};

export default Merchant;
