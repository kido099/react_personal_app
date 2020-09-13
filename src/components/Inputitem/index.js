import React, { useState, useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import { Input, Form, Button, Row, Col, message } from 'antd';
import { getCaptcha } from '../../actions/register';
import styles from './index.module.css';

const InputItem = (props) => {
  const dispatch = useDispatch();
  //const { placeholder, size } = props;
  // Form.Item wrap then has gap between two input text fields
  const { name, rules, ...rest } = props;
  const [timing, setTiming] = useState(false); // 是否在倒计时
  const [count, setCount] = useState(props.countDown || 60); // 倒计时秒数

  const handleClickCaptcha = () => {
    message.success('成功获取验证码1234');
    dispatch(getCaptcha());
    setTiming(true);
  }

  useEffect(() => {
    let interval = 0;
    if (timing) {
      interval = window.setInterval(() => {
        setCount((preSecond) => {
          if (preSecond <= 1) {
            setTiming(false); // 倒计时结束
            clearInterval(interval);
            return props.countDown || 60;
          }
          return preSecond - 1;
        })
      }, 1000)
    }
    return () => clearInterval(interval);
  }, [timing, props.countDown])

  if (name === "captcha") {
    return (
      <Form.Item name={name} rules={rules}>
        <Row gutter={8}>
          <Col span={16}>
            <Input {...rest} />
          </Col>
          <Col span={8}>
            <Button
              className={styles.getCaptcha}
              disabled={timing}
              size="large"
              onClick={handleClickCaptcha}
            >
              {timing ? `${count}秒` : '获取验证码'}
            </Button>
          </Col>
        </Row>
      </Form.Item>
    );
  }

  return (
    <Form.Item name={name} rules={rules}>
      <Input {...rest} />
    </Form.Item>
  );
}

export default InputItem;