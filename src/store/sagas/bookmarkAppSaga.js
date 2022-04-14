import { call, takeLatest, put } from "redux-saga/effects";
import { types } from "../actionTypes";
import { fetchApi } from "../services/api";
import {
  loginDataSuccess,
  loginDataFailure,
  registerDataSuccess,
  registerDataFailure,
  handleme_Success,
  handleme_Failure,
  handleFolderApi_Success,
  handleFolderApi_Failure,
} from "../actions";

function* loginRequest(action) {
  try {
    let configObj = {
      method: "POST",
      endpoint: "/login",
      data: {
        email: action.payload.loginEmailid,
        password: action.payload.loginPassword,
      },
    };
    const user = yield call(fetchApi, configObj);

    console.log("##user", user.token);
    yield put(loginDataSuccess(user));
    localStorage.setItem("token", user.token);
    action.navigate("/dashboard");
  } catch (error) {
    console.log(error);
    yield put(loginDataFailure(error));
  }
}
function* registerRequest(action) {
  try {
    let configObj = {
      method: "POST",
      endpoint: "/register",
      data: {
        name: action.payload.name,
        email: action.payload.loginEmailid,
        password: action.payload.loginPassword,
      },
    };
    const user = yield call(fetchApi, configObj);
    yield put(registerDataSuccess(user));
    localStorage.setItem("token", user.token);
    action.navigate("/dashboard");
  } catch (error) {
    console.log(error);
    yield put(registerDataFailure(error));
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
    yield put(handleme_Failure(error));
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
      },
    };
    const user = yield call(fetchApi, configObj);
    yield put(handleFolderApi_Success(user));
  } catch (error) {
    console.log(error);
    yield put(handleFolderApi_Failure(error));
  }
}
export function* watchBookmarkAppSaga() {
  yield takeLatest(types.LOGIN_DATA_SEND_REQUEST, loginRequest);
  yield takeLatest(types.REGISTER_DATA_SEND_REQUEST, registerRequest);
  yield takeLatest(types.HANDLEME_SEND_REQUEST, meRequest);
  yield takeLatest(types.CREATE_FOLDER_API_SEND_REQUEST, createFolderRequest);
}
