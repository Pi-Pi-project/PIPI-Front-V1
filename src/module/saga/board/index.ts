import { call, put, select, takeEvery } from "redux-saga/effects";
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

function* boardSaga() {
  yield takeEvery(boardAction.GET_BOARD_LIST_SAGA, getBoardListSaga);
}

export default boardSaga;
