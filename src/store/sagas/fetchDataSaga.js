import { call, takeLatest, put } from "redux-saga/effects";
//import axios from "axios";
import {types} from "../actionTypes"
import { fetchApi,fetchApi1 } from "../services/api";
import { loginDataSuccess, loginDataFailure, registerDataSuccess,registerDataFailure } from "../actions";
function* asyncFetchRequest(action) {
  try {
    const user = yield call(fetchApi, action.payload);
    yield put(loginDataSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(loginDataFailure(error));
  }
}
function* asyncFetchRequest1(action) {
    try {
      const user = yield call(fetchApi1, action.payload);
      yield put(registerDataSuccess(user));
    } catch (error) {
      console.log(error);
      yield put(registerDataFailure(error));
    }
  }
export function* watchFetchDataSaga() {
  yield takeLatest(types.LOGIN_DATA_SEND_REQUEST, asyncFetchRequest);
  yield takeLatest(types.REGISTER_DATA_SEND_REQUEST, asyncFetchRequest1);
}
