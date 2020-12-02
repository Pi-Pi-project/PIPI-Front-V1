import { call, put, select, takeEvery } from "redux-saga/effects";
import { requestApiWithAccessToken } from "../../../lib/api";
import { modalActionCreater } from "../../action/modal";
import { profileAction, profileActionCreater } from "../../action/profile";
import { registerActionCreater } from "../../action/register";

function* getProfileSaga(
  action: ReturnType<typeof profileActionCreater.getProfileSaga>
) {
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/profile?email=${action.payload}`
    );

    yield put(profileActionCreater.getProfile(res.data));
  } catch (err) {}
}

function* selectPortfolioSaga(
  action: ReturnType<typeof profileActionCreater.selectPortfolioSaga>
) {
  try {
    const {
      email,
      selectId: [first, second]
    } = action.payload;

    yield requestApiWithAccessToken("put", "/profile/portfolio", {
      first,
      second
    });

    yield put(profileActionCreater.getProfileSaga(email));
    yield put(modalActionCreater.portfolioEditModalOff());
    yield put(
      modalActionCreater.formModalOn({
        title: "성공하였습니다",
        subTitle: "포트폴리오를 선택했습니다"
      })
    );
  } catch (err) {}
}

function* getPortfolioSaga(
  action: ReturnType<typeof profileActionCreater.getPortfolioSaga>
) {
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/profile/portfolio?email=${action.payload}`
    );

    yield put(profileActionCreater.getPortfolio(res.data));
  } catch (err) {}
}

function* editProfileSaga() {
  yield put(registerActionCreater.setStep("SET_USER_PROFILE"));
}

function* profileSaga() {
  yield takeEvery(profileAction.GET_PROFILE_SAGA, getProfileSaga);
  yield takeEvery(profileAction.GET_PROFILE_SAGA, getPortfolioSaga);
  yield takeEvery(profileAction.SELECT_PORTFOLIO_SAGA, selectPortfolioSaga);
  yield takeEvery(profileAction.EDIT_PROFILE_SAGA, editProfileSaga);
}

export default profileSaga;
