import { message } from 'antd';
import * as api from '../api/profile';
import { GET_PROFILE } from '../constants/actions';

export function getUserProfile(payload = {}) {
  return async (dispatch) => { // redux-thunk middleware, this dispatch get from middleware, redux-thunk
    console.log('test getUserProfile');
    const {
      code,
      message: msg,
      data } = await api.getUserProfile(payload);
    if (code === 0) {
      dispatch({ // dispatch here 一整个是个action, this one goes to reducer
        type: GET_PROFILE,
        payload: data,
      })
      // dispatch(); // can also do another action like this one get called
    } else {
      message.error(msg);
    }
  }
}