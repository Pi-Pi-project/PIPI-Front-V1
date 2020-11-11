import { call, put, takeEvery } from "redux-saga/effects";
import { fn } from "sequelize/types";
import { requestApiWithAccessToken } from "../../../lib/api";
import { profileAction, profileActionCreater } from "../../action/profile";

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

function* profileSaga() {
  yield takeEvery(profileAction.GET_PROFILE_SAGA, getProfileSaga);
}

export default profileSaga;
