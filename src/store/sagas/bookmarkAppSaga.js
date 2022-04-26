import { call, takeLatest, put } from "redux-saga/effects";
import { types } from "../actionTypes";
import { fetchApi } from "../services/api";
import {
  loginDataSuccess,
  registerDataSuccess,
  handleme_Success,
  handleFolderApi_Success,
  getFoldersApi_Success,
  showAppAlert,
} from "../actions";

function* loginRequest(action) {
  try {
    let configObj = {
      method: "POST",
      endpoint: "/login",
      data: {
        email: action.payload1,
        password: action.payload2,
      },
    };
    const user = yield call(fetchApi, configObj);

    yield put(loginDataSuccess(user));
    localStorage.setItem("token", user.token);
    action.navigate("/dashboard");
  } catch (error) {
    yield put(showAppAlert(error));
    //yield put(loginDataFailure(error));
  }
}
function* registerRequest(action) {
  try {
    let configObj = {
      method: "POST",
      endpoint: "/register",
      data: {
        name: action.payload1,
        email: action.payload2,
        password: action.payload3,
      },
    };
    const user = yield call(fetchApi, configObj);
    yield put(registerDataSuccess(user));
    localStorage.setItem("token", user.token);
    action.navigate("/dashboard");
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
    //yield put(registerDataFailure(error));
  }
}

function* meRequest(action) {
  try {
    let configObj = {
      method: "GET",
      endpoint: "/me",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const user = yield call(fetchApi, configObj);
    yield put(handleme_Success(user.name));
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
    //yield put(handleme_Failure(error));
  }
}
function* createFolderRequest(action) {
  try {
    let configObj = {
      method: "POST",
      endpoint: "/folder",
      authorization: `Bearer ${localStorage.getItem("token")}`,
      data: {
        name: action.payload,
        // parentId: action.pid,
      },
    };
    const user = yield call(fetchApi, configObj);
    console.log("qqqq");
    yield put(handleFolderApi_Success(user));
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
    //yield put(handleFolderApi_Failure(error));
  }
}
function* getFolderRequest(action) {
  try {
    //let folderid = "81da60eb-bba2-43b2-9cae-7c2e99ce1fb0";
    let configObj = {
      method: "GET",
      endpoint: `/folders`,
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const user = yield call(fetchApi, configObj);
    yield put(getFoldersApi_Success(user));
    console.log("%%%%%", user);
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
    //yield put(getFoldersApi_Failure(error));
  }
}
export function* watchBookmarkAppSaga() {
  yield takeLatest(types.LOGIN_DATA_SEND_REQUEST, loginRequest);
  yield takeLatest(types.REGISTER_DATA_SEND_REQUEST, registerRequest);
  yield takeLatest(types.HANDLEME_SEND_REQUEST, meRequest);
  yield takeLatest(types.CREATE_FOLDER_API_SEND_REQUEST, createFolderRequest);
  yield takeLatest(types.GET_FOLDERS_API_SEND_REQUEST, getFolderRequest);
}
