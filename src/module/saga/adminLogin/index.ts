import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  JWT_TOKEN,
  REFRESH_TOKEN,
  requestApiWithAccessToken
} from "../../../lib/api";
import { adminLoginAction } from "../../action/adminLogin";
import { modalActionCreater } from "../../action/modal";
import { StoreType } from "../../reducer";

function* requestLoginSaga() {
  const { email, password } = yield select(
    (store: StoreType) => store.adminLogin
  );

  try {
    const res = yield call(requestApiWithAccessToken, "post", "/admin/auth", {
      email,
      password
    });

    const { accessToken, refreshToken } = res.data;
    window.localStorage.setItem(JWT_TOKEN, accessToken);
    window.localStorage.setItem(REFRESH_TOKEN, refreshToken);

    window.location.href = "/admin";
  } catch (err) {
    yield put(
      modalActionCreater.formModalOn({
        title: "실패했습니다",
        subTitle: "아이디 또는 비밀번호가 잘못됬습니다"
      })
    );
  }
}

function* adminLoginSaga() {
  yield takeEvery(adminLoginAction.REQUEST_LOGIN_SAGA, requestLoginSaga);
}

export default adminLoginSaga;
