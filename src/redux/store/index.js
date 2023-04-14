import MainReducer from "../reducers";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  redBasic: MainReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
