import { combineReducers } from "redux";
import modal from "./modal";
import login from "./login";
import password from "./password";
import register from "./register";
import board from "./board";
import write from "./write";

const rootReducer = combineReducers({
  modal,
  login,
  password,
  register,
  board,
  write
});

export type StoreType = ReturnType<typeof rootReducer>;
export default rootReducer;
