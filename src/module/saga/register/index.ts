import { call, put, select, takeEvery } from "redux-saga/effects";
import { requestApi } from "../../../lib/api";
import { modalActionCreater } from "../../action/modal";
import { registerAction, registerActionCreater } from "../../action/register";
import { StoreType } from "../../reducer";

function* checkEmailSaga() {
  const email = yield select((store: StoreType) => store.register.email);

  try {
    yield call(requestApi, "post", "/user/email", {
      email
    });
    yield put(registerActionCreater.setStep("CHECK_CODE"));
    yield put(
      modalActionCreater.formModalOn({
        title: "성공했습니다",
        subTitle: "인증 코드를 입력해주세요"
      })
    );
  } catch (err) {}
}

function* checkCodeSaga() {
  const email = yield select((store: StoreType) => store.register.email);
  const checkCode = yield select(
    (store: StoreType) => store.register.checkCode
  );

  try {
    yield call(requestApi, "post", "/user/email/check", {
      email,
      code: checkCode
    });

    yield put(registerActionCreater.setStep("SET_USER_INFO"));
    yield put(
      modalActionCreater.formModalOn({
        title: "성공했습니다.",
        subTitle: "계정 생성을 진행합니다."
      })
    );
  } catch (err) {
    yield put(
      modalActionCreater.formModalOn({
        title: "실패했습니다.",
        subTitle: "인증코드를 확인해 주세요."
      })
    );
  }
}

function* requestRegisterSaga() {
  const { email, password, nickname, passwordRe } = yield select(
    (store: StoreType) => store.register
  );

  if (password !== passwordRe) {
    yield put(
      modalActionCreater.formModalOn({
        title: "실패했습니다",
        subTitle: "비밀번호와 재입력이 다릅니다."
      })
    );
    return;
  }

  try {
    yield call(requestApi, "post", "/user", {
      email,
      password,
      nickname
    });

    yield put(registerActionCreater.setStep("SET_USER_PROFILE"));
    yield put(
      modalActionCreater.formModalOn({
        title: "성공했습니다",
        subTitle: "프로필 설정을 진행합니다."
      })
    );
  } catch (err) {
    yield put(
      modalActionCreater.formModalOn({
        title: "실패했습니다",
        subTitle: "입력한 내용을 확인해 주세요"
      })
    );
  }
}

function* requestProfileSaga() {
  const email = yield select((store: StoreType) => store.register);
}

function* registerSaga() {
  yield takeEvery(registerAction.CHECK_EMAIL_SAGA, checkEmailSaga);
  yield takeEvery(registerAction.CHECK_CODE_SAGA, checkCodeSaga);
  yield takeEvery(registerAction.REQUEST_REGISTER_SAGA, requestRegisterSaga);
  yield takeEvery(registerAction.REQUEST_REGISTER_SAGA, requestProfileSaga);
}

export default registerSaga;
