import { call, put, select, takeEvery } from "redux-saga/effects";
import { requestApiWithAccessToken } from "../../../lib/api";
import { padStart } from "../../../lib/func";
import {
  managementAction,
  managementActionCreater
} from "../../action/management";
import { StoreType } from "../../reducer";

function* getTodoSaga() {
  const {
    id,
    selectDate: { year, month, date }
  } = yield select((store: StoreType) => store.management);

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

    yield put(managementActionCreater.getTodoSaga());
  } catch (err) {}
}

function* managementSaga() {
  yield takeEvery(managementAction.GET_TODO_SAGA, getTodoSaga);
  yield takeEvery(managementAction.CHECK_TODO_SAGA, checkTodoSaga);
  yield takeEvery(managementAction.ADD_TODO_SAGA, addTodoSaga);
}

export default managementSaga;
