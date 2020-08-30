import React from 'react';
import { Tabs, Form } from 'antd';
import { UserOutlined, LockTwoTone } from '@ant-design/icons';
import InputItem from '../../components/InputItem';
import SubmitButton from '../../components/SubmitButton';
import styles from './index.module.css';

const { TabPane } = Tabs;

const Login = () => {
  const[form] = Form.useForm(); // hook
  const handleFinish = (values) => {
    console.log(values);
  }

    return (
          <div className={styles.loginContainer}>
              <div className={styles.login}>
                <Form
                  form={form}
                  onFinish={handleFinish}
                >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="账号密码登陆" key="1">
                          <InputItem
                            name="username"
                            prefix={
                              <UserOutlined style={{ color: '#1890ff' }} />
                            }
                            placeholder="用户名"
                            size="large"
                            rules={[
                              {
                                required: true,
                                message: '请输入用户名！'
                              }
                            ]}
                          />
                          <InputItem
                            name="password"
                            type="password"
                            prefix={
                              <LockTwoTone style={{ color: '#1890ff' }} />
                            }
                            placeholder="密码"
                            size="large"
                            rules={[
                              {
                                required: true,
                                message: '请输入密码！'
                              }
                            ]}
                          />
                        </TabPane>
                        <TabPane tab="手机号登陆" key="2">
                            asdf2
                        </TabPane>
                    </Tabs>
                    <SubmitButton>登陆</SubmitButton>
                  </Form>
              </div>
          </div>
    )
};

export default Login;
