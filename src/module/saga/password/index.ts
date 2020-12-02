import { call, put, select, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../lib/api";
import { modalAction, modalActionCreater } from "../../action/modal";
import { passwordAction } from "../../action/password";
import { StoreType } from "../../reducer";

function* findEmailSaga() {
  const email = yield select((store: StoreType) => store.password.email);

  try {
    const res = yield call(requestApi, "post", "/user/email", {
      email
    });
    yield put(
      modalActionCreater.formModalOn({
        title: "이메일을 전송했습니다",
        subTitle: " "
      })
    );
  } catch (errStatus) {
    switch (errStatus) {
    }
  }
}

function* passwordSaga() {
  yield takeEvery(passwordAction.FIND_EMAIL_SAGA, findEmailSaga);
}

export default passwordSaga;
