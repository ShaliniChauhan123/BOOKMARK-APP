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
} from "../actions";

function* loginFetchRequest(action) {
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
function* registerFetchRequest1(action) {
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

function* meFetchRequest2(action) {
  try {
    let configObj = {
      method: "POST",
      endpoint: "/me",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const user = yield call(fetchApi, configObj);
    yield put(handleme_Success(user));
  } catch (error) {
    console.log(error);
    yield put(handleme_Failure(error));
    const user = {
      name: "ishalini",
    };

    yield put(handleme_Success(user.name));
  }
}
export function* watchFetchDataSaga() {
  yield takeLatest(types.LOGIN_DATA_SEND_REQUEST, loginFetchRequest);
  yield takeLatest(types.REGISTER_DATA_SEND_REQUEST, registerFetchRequest1);
  yield takeLatest(types.HANDLEME_SEND_REQUEST, meFetchRequest2);
}
