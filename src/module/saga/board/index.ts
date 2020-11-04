import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { requestApi, requestApiWithAccessToken } from "../../../lib/api";
import { boardAction, boardActionCreater } from "../../action/board";
import { StoreType } from "../../reducer";

function* getBoardListSaga() {
  const page = yield select((store: StoreType) => store.board.boardList.page);
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/post?page=${page}`
    );
    yield put(boardActionCreater.getBoardList(res.data));
  } catch (err) {}
}

function* getBoardDetailSaga(
  action: ReturnType<typeof boardActionCreater.getBoardDetailSaga>
) {
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/post/${action.payload}`
    );

    yield put(boardActionCreater.getBoardDetail(res.data));
  } catch (err) {}
}

function* getBoardDoingSaga() {
  const page = yield select((store: StoreType) => store.board.boardDoing.page);
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/post/mine?page=${page}`
    );

    yield put(boardActionCreater.getBoardDoing(res.data));
  } catch (err) {}
}

function* boardSaga() {
  yield takeEvery(boardAction.GET_BOARD_DETAIL_SAGA, getBoardDetailSaga);
  yield takeLatest(boardAction.GET_BOARD_DOING_SAGA, getBoardDoingSaga);
  yield takeLatest(boardAction.GET_BOARD_LIST_SAGA, getBoardListSaga);
}

export default boardSaga;
