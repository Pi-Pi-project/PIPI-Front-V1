import { all } from "redux-saga/effects";
import boardSaga from "./board";
import loginSaga from "./login";
import navigationSaga from "./navigation";
import passwordSaga from "./password";
import profileSaga from "./profile";
import registerSaga from "./register";
import writeSaga from "./write";
import managementSaga from "./management";
import adminLoginSaga from "./adminLogin";
import adminMainSaga from "./adminMain";
import chatSaga from "./chat";

function* rootSaga() {
  yield all([
    loginSaga(),
    passwordSaga(),
    registerSaga(),
    boardSaga(),
    writeSaga(),
    navigationSaga(),
    profileSaga(),
    managementSaga(),
    adminLoginSaga(),
    adminMainSaga(),
    chatSaga()
  ]);
}

export default rootSaga;
