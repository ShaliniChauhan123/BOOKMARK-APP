import { call, takeLatest, put } from "redux-saga/effects";
import { types } from "../actionTypes";
import { fetchApi } from "../services/api";
import {
  loginDataSuccess,
  registerDataSuccess,
  handleme_Success,
  handleFolderApi_Success,
  getFoldersApi_Success,
  getFoldersApi_Success1,
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
          name: action.payload.foldername,
          //pid:action.payload.pid
          parentId: action.payload.pid,
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
    const pid = action.payload.pid;
    const folders = action.payload.folders;
    console.log("pid", pid);
    let user = {};
    if (pid) {
      user = yield call(
        fetchApi,
        configObjSaga({
          method: "GET",
          endpoint: `/folders?folderId=${pid}`,
          authorization: `Bearer ${localStorage.getItem("token")}`,
        })
      );
      folders.map((m) => m.id === pid && (m.children = user));
      console.log("childrenfromsaga", folders);
    } else {
      user = yield call(
        fetchApi,
        configObjSaga({
          method: "GET",
          endpoint: `/folders`,
          authorization: `Bearer ${localStorage.getItem("token")}`,
        })
      );
      user.map((m) => (m.children = []));
    }

    console.log("lets try", user);

    // user.map((m) => (m.children = [{}]));

    // yield all(
    //   user.map((m) => {
    //     m.children = call(
    //       fetchApi,
    //       configObjSaga({
    //         method: "GET",
    //         endpoint: `/folders?folderId=${m.id}`,
    //         authorization: `Bearer ${localStorage.getItem("token")}`,
    //       })
    //     );
    //     console.log("we r robot", m.children);
    //     return m.children;
    //   })
    // );
    console.log("lets try children", user);
    //yield put(getFoldersApi_Success(user));
    if (
      pid
        ? yield put(getFoldersApi_Success1(user, pid))
        : yield put(getFoldersApi_Success(user))
    )
      // const user = yield call(
      //   fetchApi,
      //   configObjSaga({
      //     method: "GET",
      //     endpoint: `/folders`,
      //     authorization: `Bearer ${localStorage.getItem("token")}`,
      //   })
      // );
      console.log("%%%%%", user);
  } catch (error) {
    console.log(error);
    yield put(showAppAlert(error));
  }
}
function* renameRequest(action) {
  try {
    const user = yield call(
      fetchApi,
      configObjSaga({
        method: "PUT",
        endpoint: "/rename-folder",
        authorization: `Bearer ${localStorage.getItem("token")}`,
        data: {
          folderId: action.payload.id,
          name: action.payload.name,
        },
      })
    );
    yield put(handleme_Success(user));
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
  yield takeLatest(types.GET_RENAME_API, renameRequest);
}
