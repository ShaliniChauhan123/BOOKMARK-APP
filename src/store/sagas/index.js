import { all } from "redux-saga/effects";
import { watchBookmarkAppSaga } from "./bookmarkAppSaga";
export default function* RootSaga() {
  yield all([watchBookmarkAppSaga()]);
}
