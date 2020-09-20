import * as api from '../api/account';
import { message } from 'antd';

export function getCaptcha(payload = {}) {
  return async () => {
    console.log('test getCaptcha');
    const {code, message: msg, data: { captcha } = {}} = await api.getCaptcha(payload);
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
    const {code, message: msg} = await api.register(payload);
    if (code === 20023) {
      message.success(msg);
    } else {
      message.error(msg);
    }
  }
}

export function login(payload = {}) {
  return async () => {
    console.log('test login');
    const {code, message: msg, data: { token } = {}} = await api.login(payload);
    window.localStorage.setItem('personal-app-token', token);
    window.location.href = ('/');
    if (code === 0) {
      message.success(msg);
    } else {
      message.error(msg);
    }
  }
}