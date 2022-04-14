import { combineReducers } from "redux";
import bookmarkAppReducer from "./bookmarkAppReducer";
const RootReducer = combineReducers({
  bookmarkAppReducer,
});
export default RootReducer;
