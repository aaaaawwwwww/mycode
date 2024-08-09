import { Button, Form, Input } from 'antd';
import React from 'react';

// const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };
const LoginTool = () => (
  <Form
    name="basic"
    labelCol={{ span: 5, }}
    wrapperCol={{ span: 8, }}
    style={{
      position: 'relative',
      left: '80%',
      bottom: '60px',
      width: '350px',
    }}
    initialValues={{ remember: true, }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="아이디"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="비밀번호"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit"
        style={{ float: 'right', right: '40px', bottom: '60px', }}>
        로그인
      </Button>
    </Form.Item>
  </Form>
);
export default LoginTool;