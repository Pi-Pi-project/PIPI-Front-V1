import { call, takeEvery, put } from "redux-saga/effects";
import { requestApiWithAccessToken } from "../../../lib/api";
import {
  adminMainAction,
  adminMainActionCreater
} from "../../action/adminMain";

function* getProjectSaga() {
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      "/admin/project?page=0"
    );
    yield put(adminMainActionCreater.getProject(res.data));
  } catch (err) {}
}
function* getReportSaga() {
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      "/admin/report?page=0"
    );
    yield put(adminMainActionCreater.getReport(res.data));
  } catch (err) {}
}

function* adminMainSaga() {
  yield takeEvery(adminMainAction.GET_PROJECT_SAGA, getProjectSaga);
  yield takeEvery(adminMainAction.GET_REPORT_SAGA, getReportSaga);
}

export default adminMainSaga;
