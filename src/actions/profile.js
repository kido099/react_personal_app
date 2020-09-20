import { message } from 'antd';
import * as api from '../api/profile';
import { GET_PROFILE } from '../constants/actions';

export function getUserProfile(payload = {}) {
  return async (dispatch) => {
    console.log('test getUserProfile');
    const {
      code,
      message: msg,
      data } = await api.getUserProfile(payload);
    if (code === 0) {
      dispatch({ // dispatch here 一整个是个action
        type: GET_PROFILE,
        PAYLOAD: data,
      })
    } else {
      message.error(msg);
    }
  }
}