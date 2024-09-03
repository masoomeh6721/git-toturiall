import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import {thunk} from "redux-thunk";
import { users,comments } from "./reducer";

const reducer = combineReducers({ users,comments });
const middleWare = [thunk];
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;

