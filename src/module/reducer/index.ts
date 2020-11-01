import { combineReducers } from "redux";
import modal from "./modal";
import login from "./login";
import password from "./password";
import register from "./register";

console.log(register);

const rootReducer = combineReducers({
  modal,
  login,
  password,
  register
});

export type StoreType = ReturnType<typeof rootReducer>;
export default rootReducer;
