import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Form, Checkbox, Row } from 'antd';
import {
  UserOutlined, LockTwoTone, MobileTwoTone,
  MailTwoTone, AlipayCircleOutlined, TaobaoCircleOutlined,
  WeiboCircleOutlined } from '@ant-design/icons';
import InputItem from '../../components/InputItem';
import SubmitButton from '../../components/SubmitButton';
import styles from './index.module.css';

const { TabPane } = Tabs;

const Login = () => {
  const [autoLogin, setAutoLogin] = useState(true);
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
                        <InputItem
                            name="mobile"
                            prefix={
                              <MobileTwoTone />
                            }
                            placeholder="手机号"
                            size="large"
                            rules={[
                              {
                                required: true,
                                message: '请输入手机号！'
                              }
                            ]}
                          />
                          <InputItem
                            name="captcha"
                            prefix={
                              <MailTwoTone />
                            }
                            placeholder="验证码"
                            size="large"
                            rules={[
                              {
                                required: true,
                                message: '请输入验证码！'
                              }
                            ]}
                          />
                        </TabPane>
                    </Tabs>
                    <Row justify="space-between">
                      <Checkbox
                        checked={autoLogin}
                        onChange={(e) => {
                          //console.log(e);
                          setAutoLogin(e.target.checked)
                        }}
                      >
                        自动登录
                      </Checkbox>
                      <a href="#!">忘记密码</a>
                    </Row>
                    <SubmitButton>登陆</SubmitButton>
                  </Form>
                  <div className={styles.other}>
                    其他登陆方式
                    <AlipayCircleOutlined className={styles.icon} />
                    <TaobaoCircleOutlined className={styles.icon} />
                    <WeiboCircleOutlined className={styles.icon} />
                    <Link className={styles.register} to="/register">
                      注册账户
                    </Link>
                  </div>
              </div>
          </div>
    )
};

export default Login;
