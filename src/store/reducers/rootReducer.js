import { combineReducers } from "@reduxjs/toolkit";
import crudReducer from "./crudReducer";

const rootReducer = combineReducers({
  crud: crudReducer
});

export default rootReducer;
