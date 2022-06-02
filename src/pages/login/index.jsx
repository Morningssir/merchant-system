import React, { Fragment, useState } from 'react';
import {
  Carousel,
  Card,
  Form,
  Input,
  Modal,
  Button,
  Checkbox,
  Row,
  Col,
  Layout,
  AutoComplete,
  Cascader,
  InputNumber,
  Select,
  message,
  Upload,
  Tag,
} from 'antd';
import styles from './style.css';
import { Link } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import Member from '../../components/member';

const { Header } = Layout;
const { Option } = Select;

// 上传图片
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

// 选择框
const membername = [
  { value: '陈丹阳' },
  { value: '陈二' },
  { value: '张三' },
  { value: '李四' },
  { value: '王五' },
  { value: '赵六' },
  { value: '孙七' },
];

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

// 品类选择框
const options = [
  {
    color: 'gold',
    value: '食品',
  },
  {
    color: 'lime',
    value: '电子产品',
  },
  {
    color: 'green',
    value: '药品',
  },
  {
    color: 'cyan',
    value: '饰品',
  },
  {
    color: 'cyan',
    value: '超市',
  },
  {
    color: 'cyan',
    value: '饮品',
  },
  {
    color: 'cyan',
    value: '快递',
  },
  {
    color: 'cyan',
    value: '美容美发',
  },
  {
    color: 'cyan',
    value: '洗衣店',
  },
];

const tagRender = (props) => {
  const { label, color, value, closable, onClose } = props;

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={color}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

const Login = () => {
  // 上传图片  const [loading, setLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  // 控制注册店员modal
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

  // 控制注册商家modal
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };
  const handleOk1 = () => {
    setIsModalVisible1(false);
    message.success('申请已提交，管理员审批通过后可查看信息');
  };
  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  // 检测登录数据
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // 走马灯样式
  const contentStyle = {
    height: '272px',
    color: '#fff',
    lineHeight: '280px',
    textAlign: 'center',
    background: '#364d79',
  };

  // 表单验证
  // const [form] = Form.useForm();

  return (
    <Fragment>
      <Row justify="space-evenly">
        <Col span={16}>
          <Card className={styles.card}>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>此处可轮播广告【1】</h3>
              </div>
              <div>
                <h3 style={contentStyle}>此处可轮播广告【2】</h3>
              </div>
              <div>
                <h3 style={contentStyle}>此处可轮播广告【3】</h3>
              </div>
              <div>
                <h3 style={contentStyle}>此处可轮播广告【4】</h3>
              </div>
            </Carousel>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="登录" className={styles.card}>
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入您的用户名!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入您的密码!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 6, span: 16 }}
              >
                <Checkbox>下次自动登录</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 2, span: 24 }}>
                <Button className={styles.button} onClick={showModal}>
                  注册店员
                  {/* <Member /> */}
                </Button>
                <Button className={styles.button} onClick={showModal1}>
                  注册商家
                </Button>
                <Button type="primary" htmlType="submit">
                  <Link to="/administrator">登录</Link>
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* 编辑商家 */}
      <Modal
        title="编辑商家"
        visible={isModalVisible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
        footer={[
          <Button key="back" onClick={handleCancel1}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk1}>
            提交
          </Button>,
        ]}
      >
        <Form>
          <Form.Item
            name="storename"
            label="店铺名称"
            rules={[
              {
                required: true,
                message: '请输入您的店铺名称!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="head"
            label="负责人"
            rules={[
              {
                required: true,
                message: '请选择负责人!',
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '100%',
              }}
              placeholder="请选择负责人"
              // onChange={handleChange}
              options={membername}
            />
          </Form.Item>

          <Form.Item
            name="member"
            label="店员"
            rules={[
              {
                required: true,
                message: '请输入选择店员!',
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{
                width: '100%',
              }}
              placeholder="请选择店员"
              // onChange={handleChange}
              options={membername}
            />
          </Form.Item>

          <Form.Item
            name="category"
            label="所属品类"
            rules={[
              {
                required: true,
                message: '请选择品类!',
              },
            ]}
          >
            <Select
              mode="multiple"
              showArrow
              style={{
                width: '100%',
              }}
              tagRender={tagRender}
              options={options}
            />
          </Form.Item>

          <Form.Item name="detailed" label="经营商品">
            <Input />
          </Form.Item>

          <Form.Item
            name="number"
            label="营业执照编号"
            rules={[
              {
                required: true,
                message: '请填写营业执照编号!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="zhizhao" label="营业执照">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>

          <Form.Item name="zigezheng" label="经营资格证">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      {/* 编辑店员 */}
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
    </Fragment>
  );
};

export default Login;
