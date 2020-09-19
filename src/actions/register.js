import * as api from '../api/register';
import { message } from 'antd';

export function getCaptcha(payload = {}) {
  return async () => {
    console.log('test getCaptcha');
    const { data: {code, message: msg, data: { captcha } = {}}} = await api.getCaptcha(payload);
    if (code === 20020) {
      message.success(`${msg}, 验证码为${captcha}`);
    } else {
      message.error(msg);
    }
  }
}

export function register(payload = {}) {
  return async () => {
    console.log('test register');
    const { data: {code, message: msg }} = await api.register(payload);
    if (code === 20023) {
      message.success(msg);
    } else {
      message.error(msg);
    }
  }
}