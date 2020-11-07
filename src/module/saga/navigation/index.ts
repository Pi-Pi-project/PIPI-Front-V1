import { call, put, takeEvery } from "redux-saga/effects";
import { requestApiWithAccessToken } from "../../../lib/api";
import {
  navigationAction,
  navigationActionCreater
} from "../../action/navigation";

function* getUserInfoSaga() {
  try {
    const res = yield call(requestApiWithAccessToken, "get", "/user/info");
    yield put(navigationActionCreater.getUserInfo(res.data));
  } catch (err) {}
}

function* navigationSaga() {
  yield takeEvery(navigationAction.GET_USER_INFO_SAGA, getUserInfoSaga);
}

export default navigationSaga;
