import { call, put, select, takeEvery } from "redux-saga/effects";
import { requestApiWithAccessToken } from "../../../lib/api";
import { emptyIsInclude, padStart } from "../../../lib/func";
import {
  managementAction,
  managementActionCreater
} from "../../action/management";
import { modalActionCreater } from "../../action/modal";
import { StoreType } from "../../reducer";

function* getTodoSaga() {
  const {
    id,
    selectDate: { year, month, date }
  } = yield select((store: StoreType) => store.management);
  if (!id) return;

  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/project/todo?id=${id}&date=${year}-${padStart(month, 2)}-${padStart(
        date,
        2
      )}`
    );
    yield put(managementActionCreater.getTodo(res.data));
  } catch (err) {}
}

function* checkTodoSaga(
  action: ReturnType<typeof managementActionCreater.checkTodoSaga>
) {
  try {
    yield call(
      requestApiWithAccessToken,
      "put",
      `/project/todo/${action.payload}`
    );

    yield put(managementActionCreater.getTodoSaga());
  } catch (err) {}
}

function* addTodoSaga(
  action: ReturnType<typeof managementActionCreater.addTodoSaga>
) {
  const {
    selectDate: { year, month, date },
    id
  } = yield select((store: StoreType) => store.management);

  try {
    yield call(requestApiWithAccessToken, "post", "/project/todo", {
      todo: action.payload,
      date: `${padStart(year, 2)}-${padStart(month, 2)}-${padStart(date, 2)}`,
      projectId: id
    });

    yield put(modalActionCreater.addTodoModalOff());

    yield put(
      modalActionCreater.formModalOn({
        title: "성공하였습니다",
        subTitle: "등록하였습니다"
      })
    );
    yield put(managementActionCreater.getTodoSaga());
  } catch (err) {}
}

function* successProjectSaga() {
  const { id, giturl, introduce } = yield select((store: StoreType) => ({
    ...store.modal.projectSuccessModal,
    id: store.management.id
  }));
  try {
    if (emptyIsInclude([id, giturl, introduce])) {
      throw "empty";
    }

    yield call(requestApiWithAccessToken, "put", "/project/complete", {
      id,
      giturl,
      introduce
    });

    yield put(modalActionCreater.projectSuccessModalOff());
    yield put(
      modalActionCreater.formModalOn({
        title: "성공했습니다",
        subTitle: "프로젝트 완료를 신청했습니다"
      })
    );
  } catch (err) {
    console.log(err);
    yield put(modalActionCreater.projectSuccessModalOff());
    yield put(
      modalActionCreater.formModalOn({
        title: "실패했습니다",
        subTitle:
          err === "empty"
            ? "빈칸이 존재합니다"
            : err === 405
            ? "이미 완료한 동아리 입니다"
            : err === 409
            ? "PM이 아닙니다"
            : "예상치 못한 오류입니다"
      })
    );
  }
}

function* managementSaga() {
  yield takeEvery(managementAction.GET_TODO_SAGA, getTodoSaga);
  yield takeEvery(managementAction.CHECK_TODO_SAGA, checkTodoSaga);
  yield takeEvery(managementAction.ADD_TODO_SAGA, addTodoSaga);
  yield takeEvery(managementAction.SUCCESS_PROJECT_SAGA, successProjectSaga);
}

export default managementSaga;
