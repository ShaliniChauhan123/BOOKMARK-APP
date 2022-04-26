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
export function loginData(val1, val2, navigate) {
  return {
    type: types.LOGIN_DATA_SEND_REQUEST,
    payload1: val1,
    payload2: val2,
    navigate: navigate,
  };
}
export function registerData(val1, val2, val3, navigate) {
  return {
    type: types.REGISTER_DATA_SEND_REQUEST,
    payload1: val1,
    payload2: val2,
    payload3: val3,
    navigate: navigate,
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
export function handleMeapi() {
  return {
    type: types.HANDLEME_SEND_REQUEST,
  };
}
export function handleme_Success(user) {
  return {
    type: types.HANDLEME_SUCCESS,
    payload: user,
  };
}
export function handleme_Failure(error) {
  return {
    type: types.HANDLEME_FAILURE,
    payload: {},
    error: error,
  };
}
// export function handleFolderNameChangeInRedux(val) {
//   return {
//     type: types.HANDLE_FOLDER_NAME,
//     payload: val,
//   };
// }
export function handleFolderApi(val) {
  return {
    type: types.CREATE_FOLDER_API_SEND_REQUEST,
    payload: val,
  };
}
export function handleFolderApi_Success(folder) {
  return {
    type: types.CREATE_FOLDER_API_SUCCESS,
    payload: folder,
  };
}
export function handleFolderApi_Failure(error) {
  return {
    type: types.CREATE_FOLDER_API_FAILURE,
    error: error,
  };
}
export function getFoldersApi() {
  return {
    type: types.GET_FOLDERS_API_SEND_REQUEST,
  };
}
export function getFoldersApi_Success(user) {
  return {
    type: types.GET_FOLDERS_API_SUCCESS,
    payload: user,
  };
}
export function getFoldersApi_Failure(error) {
  return {
    type: types.GET_FOLDERS_API_FAILURE,
    payload: {},
    error: error,
  };
}
export function showAppAlert(error) {
  return {
    type: types.SHOW_ALERT,
    payload: {},
    message: error,
  };
}
