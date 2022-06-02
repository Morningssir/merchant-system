import { React, useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const Member = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    message.success('申请已提交，管理员审批通过后可登录');
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="编辑店员"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          提交
        </Button>,
      ]}
    >
      <Form>
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              type: 'name',
              message: '您输入姓名不符合规范!',
            },
            {
              required: true,
              message: '请输入您的姓名!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="telnumber"
          label="联系电话"
          rules={[
            {
              type: 'name',
              message: '您输入姓名不符合规范!',
            },
            {
              required: true,
              message: '请输入您的电话号码!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="wechat"
          label="微信"
          rules={[
            {
              type: 'name',
              message: '您输入姓名不符合规范!',
            },
            {
              required: true,
              message: '请输入您的微信号码!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="id"
          label="身份证号码"
          rules={[
            {
              type: 'name',
              message: '您输入姓名不符合规范!',
            },
            {
              required: true,
              message: '请输入您的身份证号码!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="car" label="车牌号">
          <Input />
        </Form.Item>

        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Member;
