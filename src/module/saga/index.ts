import { all } from "redux-saga/effects";
import loginSaga from "./login";
import passwordSaga from "./password";
import registerSaga from "./register";

function* rootSaga() {
  yield all([loginSaga(), passwordSaga(), registerSaga()]);
}

export default rootSaga;
