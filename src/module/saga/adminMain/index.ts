import { call, takeEvery, put } from "redux-saga/effects";
import { requestApiWithAccessToken } from "../../../lib/api";
import {
  adminMainAction,
  adminMainActionCreater
} from "../../action/adminMain";
import { modalActionCreater } from "../../action/modal";

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
function* getReportDetailSaga(
  action: ReturnType<typeof adminMainActionCreater.getReportDetailSaga>
) {
  try {
    const { reportedEmail, reporterEmail } = action.payload;
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/admin/report/detail?reportedEmail=${reportedEmail}&reporterEmail=${reporterEmail}`
    );
    yield put(
      modalActionCreater.applyDetailModalOn({ type: "REPORT", ...res.data })
    );
  } catch (err) {}
}
function* getProjectDetailSaga(
  action: ReturnType<typeof adminMainActionCreater.getProjectDetailSaga>
) {
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/admin/project/detail?id=${action.payload}`
    );

    yield put(
      modalActionCreater.applyDetailModalOn({ type: "PROJECT", ...res.data })
    );
  } catch (err) {}
}

function* adminMainSaga() {
  yield takeEvery(adminMainAction.GET_PROJECT_SAGA, getProjectSaga);
  yield takeEvery(adminMainAction.GET_REPORT_SAGA, getReportSaga);
  yield takeEvery(adminMainAction.GET_REPORT_DETAIL_SAGA, getReportDetailSaga);
  yield takeEvery(
    adminMainAction.GET_PROJECT_DETAIL_SAGA,
    getProjectDetailSaga
  );
}

export default adminMainSaga;
