import { combineReducers } from "redux";
import modal from "./modal";
import login from "./login";
import password from "./password";
import register from "./register";
import board from "./board";
import write from "./write";
import navigation from "./navigation";

const rootReducer = combineReducers({
  modal,
  login,
  password,
  register,
  board,
  write,
  navigation
});

export type StoreType = ReturnType<typeof rootReducer>;
export default rootReducer;
