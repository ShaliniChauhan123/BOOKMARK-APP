import { Navigate } from "react-router-dom";
import { call, takeLatest, put } from "redux-saga/effects";
//import axios from "axios";
import {useNavigate} from "react-router-dom";
import { history } from "../../utils/historyhelper";


// import { isTokensPresentLocalStorage } from "../../utils/tokenHelpers";
import {types} from "../actionTypes"
import { fetchApi} from "../services/api";
import { loginDataSuccess, loginDataFailure, registerDataSuccess,
  registerDataFailure,handleme_Success,handleme_Failure } from "../actions";
function* asyncFetchRequest(action) {
  try {
    let configObj={
      method:'POST',
      endpoint:'/login',
      data:{
        email:action.payload.loginEmailid,
        password:action.payload.loginPassword,
        }
    }
    const user = yield call(fetchApi, configObj);
    localStorage.setItem('token', user.token);
    history.push('/dashboard');
    yield put(loginDataSuccess(user));
   console.log("######");
    
    
    
    console.log("rrrrrrrrrrrrr");
//     const isUserPresent = user.token;
//     isUserPresent ? (
// history('/dashboard')
// ) : (
// history('/')
// ); 

  } catch (error) {
    console.log(error);
    yield put(loginDataFailure(error));
  }
}
function* asyncFetchRequest1(action) {
    try {
      let configObj={
        method:'POST',
        endpoint:'/register',
        data:{
          name:action.payload.name,
            email:action.payload.loginEmailid,
            password:action.payload.loginPassword,
 
          }
      }
      const user = yield call(fetchApi, configObj);
      yield put(registerDataSuccess(user));
      localStorage.setItem('token', user.token);

    } catch (error) {
      console.log(error);
      yield put(registerDataFailure(error));
    }
  }

  function* asyncFetchRequest2(action) {
    try {
      let configObj={
        method:'POST',
        endpoint:'/me',
        authorization:`Bearer ${localStorage.getItem('token')}`,
       
      }
      const user = yield call(fetchApi, configObj);
      //console.log("^^^^^")
      yield put(handleme_Success(user));
      
    } catch (error) {
      console.log(error);
      yield put(handleme_Failure(error));
    }
  }
export function* watchFetchDataSaga() {
  yield takeLatest(types.LOGIN_DATA_SEND_REQUEST, asyncFetchRequest);
  yield takeLatest(types.REGISTER_DATA_SEND_REQUEST, asyncFetchRequest1);
  yield takeLatest(types.HANDLEME_SEND_REQUEST,asyncFetchRequest2);
}
