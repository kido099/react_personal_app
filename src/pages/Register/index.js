import React, { useState } from 'react';
import { Form, Popover, Progress } from 'antd';
import InputItem from '../../components/InputItem';
import styles from './index.module.css';

const Register = () => {
  const [visible, setVisible] = useState(false); // hook
  const [popover, setPopover] = useState(false); // hook
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
    if (!value) {
      setVisible(!!value);
      return promise.reject('请输入密码');
    }
    if (!visible) {
      setVisible(!!value);
    }
    setPopover(!popover); // to let the state keep changing while typing, thus re-render the popover
    if (value && form.getFieldValue('confirm')) {
      form.validateFields(['confirm']);
    }
    return promise.resolve();
  }

  const renderPasswordProgress = () => {
    const value = form.getFieldValue('password');
    return value && value.length && (
      <div>
        <Progress
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    )
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
          <Popover
            content={
              visible && (
                <div>
                  {renderPasswordProgress()}
                  <div>
                    请至少输入6个字符，请不要使用容易被猜到的密码
                  </div>
                </div>
              )
            }
            overlayStyle={{ width: 240 }}
            placement="right"
            visible={visible}
          >
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
          </Popover>
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