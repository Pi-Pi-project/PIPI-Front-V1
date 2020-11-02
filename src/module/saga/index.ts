import { all } from "redux-saga/effects";
import boardSaga from "./board";
import loginSaga from "./login";
import passwordSaga from "./password";
import registerSaga from "./register";

function* rootSaga() {
  yield all([loginSaga(), passwordSaga(), registerSaga(), boardSaga()]);
}

export default rootSaga;
