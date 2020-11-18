import { act } from "react-dom/test-utils";
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import FormModal from "../../../component/Modal/FormModal";
import { requestApi, requestApiWithAccessToken } from "../../../lib/api";
import { boardAction, boardActionCreater } from "../../action/board";
import { modalActionCreater } from "../../action/modal";
import { StoreType } from "../../reducer";
import { ApplyPost } from "../../reducer/board";

function* getBoardListSaga() {
  const page: number = yield select(
    (store: StoreType) => store.board.boardList.page
  );
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
  const page: number = yield select(
    (store: StoreType) => store.board.boardDoing.page
  );
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/post/mine?page=${page}`
    );

    yield put(boardActionCreater.getBoardDoing(res.data));
  } catch (err) {}
}
function* getBoardApplySaga() {
  const page: number = yield select(
    (store: StoreType) => store.board.boardApply.page
  );

  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/post/apply?page=${page}`
    );
    yield put(boardActionCreater.getBoardApply(res.data));
  } catch (err) {}
}

function* applyProjectSaga() {
  const id: number = yield select((store: StoreType) => store.board.detail.id);
  try {
    yield call(requestApiWithAccessToken, "post", "/post/apply", { id });

    yield put(
      modalActionCreater.formModalOn({
        title: "성공했습니다",
        subTitle: "성공적으로 신청했습니다"
      })
    );
  } catch (err) {}
}

function* getBoardSearchSaga(
  action: ReturnType<typeof boardActionCreater.getBoardSearchSaga>
) {
  try {
    const page = yield select(
      (store: StoreType) => store.board.boardSearch.page
    );
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/post/search?category=${action.payload}&page=${page}`
    );

    yield put(boardActionCreater.getBoardSearch(res.data));
  } catch (err) {}
}

function* cancelApplyProjectSaga(
  action: ReturnType<typeof boardActionCreater.cancelApplySaga>
) {
  try {
    yield call(requestApiWithAccessToken, "delete", "/post/apply", {
      id: action.payload
    });

    yield put(
      modalActionCreater.formModalOn({
        title: "성공 했습니다",
        subTitle: "성공적으로 취소 했습니다"
      })
    );
    yield put(boardActionCreater.resetBoard());
    yield put(boardActionCreater.getBoardApplySaga());
  } catch (err) {}
}

function* getPostApplyUserListSaga(
  action: ReturnType<typeof boardActionCreater.getPostApplyUserListSaga>
) {
  try {
    const res = yield call(
      requestApiWithAccessToken,
      "get",
      `/post/apply/${action.payload}`
    );

    const data: ApplyPost = {
      applyUsers: res.data,
      id: action.payload
    };
    yield put(boardActionCreater.getPostApplyUserList(data));
  } catch (err) {}
}

function* acceptApplySaga(
  action: ReturnType<typeof boardActionCreater.acceptApplySaga>
) {
  const id: number = yield select(
    (store: StoreType) => store.board.postApply.id
  );

  const { userNickname, userEmail } = action.payload;
  try {
    yield call(requestApiWithAccessToken, "put", "/post/apply/accept", {
      userEmail,
      postId: id
    });

    yield put(
      modalActionCreater.formModalOn({
        title: "성공하였습니다",
        subTitle: `${userNickname}님을 수락하였습니다`
      })
    );

    yield put(
      boardActionCreater.editBoardMember({
        email: userEmail,
        accept: "ACCEPTED"
      })
    );
  } catch (err) {}
}
function* rejectApplySaga(
  action: ReturnType<typeof boardActionCreater.rejectApplySaga>
) {
  const id: number = yield select(
    (store: StoreType) => store.board.postApply.id
  );
  const { userNickname, userEmail } = action.payload;

  try {
    yield call(requestApiWithAccessToken, "put", "/post/apply/deny", {
      userEmail,
      postId: id
    });

    yield put(
      modalActionCreater.formModalOn({
        title: "성공하였습니다",
        subTitle: `${userNickname}님을 거절하였습니다`
      })
    );

    yield put(
      boardActionCreater.editBoardMember({
        email: userEmail,
        accept: "DENIED"
      })
    );
  } catch (err) {}
}

function* getBoardManagementSaga() {
  try {
    const { data } = yield call(requestApiWithAccessToken, "get", "/project");

    yield put(boardActionCreater.getBoardManagement(data));
  } catch (err) {}
}

function* boardSaga() {
  yield takeEvery(boardAction.GET_BOARD_DETAIL_SAGA, getBoardDetailSaga);
  yield takeEvery(boardAction.APPLY_PROJECT_SAGA, applyProjectSaga);
  yield takeEvery(boardAction.GET_BOARD_SEARCH_SAGA, getBoardSearchSaga);
  yield takeEvery(boardAction.CANCEL_APPLY_SAGA, cancelApplyProjectSaga);
  yield takeEvery(boardAction.ACCEPT_APPLY_SAGA, acceptApplySaga);
  yield takeEvery(boardAction.REJECT_APPLY_SAGA, rejectApplySaga);
  yield takeEvery(
    boardAction.GET_POST_APPLY_USER_LIST_SAGA,
    getPostApplyUserListSaga
  );
  yield takeLatest(boardAction.GET_BOARD_DOING_SAGA, getBoardDoingSaga);
  yield takeLatest(boardAction.GET_BOARD_LIST_SAGA, getBoardListSaga);
  yield takeLatest(boardAction.GET_BOARD_APPLY_SAGA, getBoardApplySaga);
  yield takeEvery(
    boardAction.GET_BOARD_MANAGEMENT_SAGA,
    getBoardManagementSaga
  );
}

export default boardSaga;
