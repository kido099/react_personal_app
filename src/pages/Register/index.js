import React from 'react';
import { Form } from 'antd';
import InputItem from '../../components/InputItem';
import styles from './index.module.css';

const Register = () => {
  const[form] = Form.useForm(); // hook
  const handleFinish = (values) => {
    console.log(values);
  }
  const checkConfirm = (_, value) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject('两次输入的密码不匹配');
    }
    return promise.resolve();
  }

  const checkPassword = (_, value) => {
    const promise = Promise;
    //if (!value) {
    //  return promise.reject('请输入密码');
    //}
    if (value && form.getFieldValue('confirm')) {
      form.validateFields(['confirm']);
    }
    return promise.resolve();
  }

  return (
    <div className={styles.registerContainer}>
      <div className={styles.register}>
        <Form
          form={form}
          onFinish={handleFinish}
        >
          <InputItem
            name="mail"
            placeholder="邮箱"
            size="large"
            rules={[
              {
                required: true,
                message: '请输入邮箱！'
              },
              {
                type: 'email',
                message: '请填写正确的邮箱格式！'
              }
            ]}
          />
          <InputItem
            name="password"
            type="password"
            placeholder="至少6位密码， 区分大小写"
            size="large"
            rules={[
              {
                required: true,
                message: '请输入密码！'
              },
              {
                validator: checkPassword
              }
            ]}
          />
          <InputItem
            name="confirm"
            type="password"
            placeholder="确认密码"
            size="large"
            rules={[
              {
                required: true,
                message: '请确认密码！'
              },
              {
                validator: checkConfirm
              }
            ]}
          />
        </Form>
      </div>
    </div>
  )
};

export default Register;