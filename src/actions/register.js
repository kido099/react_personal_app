import * as api from '../api/register';

export function getCaptcha(payload = {}) {
  return async () => {
    console.log('test');
    const result = await api.getCaptcha(payload);
    console.log(result);
  }
}