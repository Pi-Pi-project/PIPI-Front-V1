import { all } from "redux-saga/effects";
import boardSaga from "./board";
import loginSaga from "./login";
import navigationSaga from "./navigation";
import passwordSaga from "./password";
import registerSaga from "./register";
import writeSaga from "./write";

function* rootSaga() {
  yield all([
    loginSaga(),
    passwordSaga(),
    registerSaga(),
    boardSaga(),
    writeSaga(),
    navigationSaga()
  ]);
}

export default rootSaga;
