import { createStore, combineReducers } from "redux";
import userReducer from "../reducer/userInfo";

const appStore = () => createStore(combineReducers({ userReducer }));

export default appStore;
