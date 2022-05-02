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
import configObjSaga from "../../utils/configObjSaga";

function* loginRequest(action) {
  try {
    const user = yield call(
      fetchApi,
      configObjSaga({
        method: "POST",
        endpoint: "/login",
        data: {
          email: action.payload1,
          password: action.payload2,
        },
      })
    );

    yield put(loginDataSuccess(user));
    localStorage.setItem("token", user.token);
    action.navigate("/dashboard");
  } catch (error) {
    yield put(showAppAlert(error));
  }
}
function* registerRequest(action) {
  try {
    const user = yield call(
      fetchApi,
      configObjSaga({
        method: "POST",
        endpoint: "/register",
        data: {
          name: action.payload1,
          email: action.payload2,
          password: action.payload3,
        },
      })
    );
    yield put(registerDataSuccess(user));
    localStorage.setItem("token", user.token);
    action.navigate("/dashboard");
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
  }
}

function* meRequest(action) {
  try {
    const user = yield call(
      fetchApi,
      configObjSaga({
        method: "GET",
        endpoint: "/me",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );
    yield put(handleme_Success(user.name));
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
  }
}
function* createFolderRequest(action) {
  try {
    const user = yield call(
      fetchApi,
      configObjSaga({
        method: "POST",
        endpoint: "/folder",
        authorization: `Bearer ${localStorage.getItem("token")}`,
        data: {
          name: action.payload,
        },
      })
    );
    yield put(handleFolderApi_Success(user));
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
  }
}
function* getFolderRequest(action) {
  try {
    const user = yield call(
      fetchApi,
      configObjSaga({
        method: "GET",
        endpoint: `/folders`,
        authorization: `Bearer ${localStorage.getItem("token")}`,
      })
    );
    yield put(getFoldersApi_Success(user));
    console.log("%%%%%", user);
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
  }
}
export function* watchBookmarkAppSaga() {
  yield takeLatest(types.LOGIN_DATA_SEND_REQUEST, loginRequest);
  yield takeLatest(types.REGISTER_DATA_SEND_REQUEST, registerRequest);
  yield takeLatest(types.HANDLEME_SEND_REQUEST, meRequest);
  yield takeLatest(types.CREATE_FOLDER_API_SEND_REQUEST, createFolderRequest);
  yield takeLatest(types.GET_FOLDERS_API_SEND_REQUEST, getFolderRequest);
}
