import { call, put, select, takeEvery } from "redux-saga/effects";
import { JWT_TOKEN, REFRESH_TOKEN, requestApi } from "../../../lib/api";
import { loginAction, loginActionCreater } from "../../action/login";
import { modalActionCreater } from "../../action/modal";

function* requestLoginSaga() {
  const { id, password } = yield select(state => state.login);
  try {
    const res = yield call(requestApi, "post", "/auth", {
      email: id,
      password
    });
    const { accessToken, refreshToken } = res.data;

    window.localStorage.setItem(JWT_TOKEN, accessToken);
    window.localStorage.setItem(REFRESH_TOKEN, refreshToken);
  } catch (errStatus) {
    switch (errStatus) {
      case 400:
      case 404:
        yield put(
          modalActionCreater.formModalOn({
            title: "아이디 또는 비밀번호가 일치하지 않습니다",
            subTitle: ""
          })
        );
        return;
    }
  }
}

function* loginSaga() {
  yield takeEvery(loginAction.REQUEST_LOGIN_SAGA, requestLoginSaga);
}

export default loginSaga;
