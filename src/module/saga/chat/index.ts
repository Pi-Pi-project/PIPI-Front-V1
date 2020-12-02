import Axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { requestApiWithAccessToken } from "../../../lib/api";
import { chatAction, chatActionCreater } from "../../action/chat";
import { StoreType } from "../../reducer";

function* getChatSaga(
  action: ReturnType<typeof chatActionCreater.getChatSaga>
) {
  const page = yield select((store: StoreType) => store.chat.index);
  const res = yield call(
    requestApiWithAccessToken,
    "get",
    `/chat/${action.payload}?page=${page}`
  );
  yield put(chatActionCreater.getChat(res.data));
}

function* chatSaga() {
  yield takeLatest(chatAction.GET_CHAT_SAGA, getChatSaga);
}

export default chatSaga;
