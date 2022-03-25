import { types } from "../actionTypes";
export function handleInputChangeInRedux(val) {
    return {
      type: types.HANDLE,
      payload: val,
    };
  } 

export function handleInput1ChangeInRedux(val) {
  return {
    type: types.HANDLE1,
    payload: val,
  };
}
export function handleInput2ChangeInRedux(val) {
    return {
      type: types.HANDLE2,
      payload: val,
    };
  }
export function loginData(val) {
  return {
    type: types.LOGIN_DATA_SEND_REQUEST,
    payload: val,
  };
}
export function registerData(val) {
    return {
      type: types.REGISTER_DATA_SEND_REQUEST,
      payload: val,
    };
  }
export function loginDataSuccess(user) {
  return {
    type: types.LOGIN_DATA_SUCCESS,
    payload: user,
  };
}
export function registerDataSuccess(user) {
    return {
      type: types.REGISTER_DATA_SUCCESS,
      payload: user,
    };
  }
export function loginDataFailure(error) {
  return {
    type: types.LOGIN_DATA_FAILURE,
    payload: {},
    error: error,
  };
}
export function registerDataFailure(error) {
    return {
      type: types.REGISTER_DATA_FAILURE,
      payload: {},
      error: error,
    };
  }
