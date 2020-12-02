import { call, put, select, takeEvery } from "redux-saga/effects";
import { requestApiWithAccessToken } from "../../../lib/api";
import { modalActionCreater } from "../../action/modal";
import { writeAction, writeActionCreater } from "../../action/write";
import { StoreType } from "../../reducer";

function* uploadPostSaga() {
  const {
    file,
    title,
    category,
    skills,
    introduce,
    detail,
    max
  } = yield select((store: StoreType) => store.write);

  if (
    !file ||
    !title ||
    !category ||
    !skills ||
    !introduce ||
    !detail ||
    !max
  ) {
    yield put(
      modalActionCreater.formModalOn({
        title: "실패했습니다",
        subTitle: "빈칸을 모두 채워주세요"
      })
    );
    return;
  }
  const formData = new FormData();
  formData.append("img", file);
  formData.append("title", title);
  formData.append("category", category);
  formData.append("skills", skills);
  formData.append("idea", introduce);
  formData.append("content", detail);
  formData.append("max", max);

  try {
    yield call(requestApiWithAccessToken, "post", "/post", formData);
    yield put(writeActionCreater.successPost());
    yield put(
      modalActionCreater.formModalOn({
        title: "성공했습니다",
        subTitle: "공고를 성공적으로 게시했습니다"
      })
    );
  } catch (err) {}
}

function* writeSaga() {
  yield takeEvery(writeAction.UPLOAD_POST_SAGA, uploadPostSaga);
}

export default writeSaga;
