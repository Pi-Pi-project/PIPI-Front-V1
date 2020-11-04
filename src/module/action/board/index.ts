import { PostItem, DetailPostItem } from "../../reducer/board";

const GET_BOARD_LIST_SAGA = "board/GET_BOARD_LIST_SAGA" as const;
const GET_BOARD_LIST = "board/GET_BOARD_LIST" as const;

const GET_BOARD_APPLY_SAGA = "board/GET_BOARD_APPLY_SAGA" as const;
const GET_BOARD_APPLY = "board/GET_BOARD_APPLY" as const;

const GET_BOARD_DOING_SAGA = "board/GET_BOARD_DOING_SAGA" as const;
const GET_BOARD_DOING = "board/GET_BOARD_DOING" as const;

const GET_BOARD_WANTED_SAGA = "board/GET_BOARD_WANTED_SAGA" as const;
const GET_BOARD_WANTED = "board/GET_BOARD_WANTED" as const;

const GET_BOARD_DETAIL_SAGA = "board/GET_BOARD_DETAIL_SAGA" as const;
const GET_BOARD_DETAIL = "board/GET_BOARD_DETAIL" as const;

const getBoardDetailSaga = (payload: number) => ({
  type: GET_BOARD_DETAIL_SAGA,
  payload
});

const getBoardDetail = (payload: DetailPostItem) => ({
  type: GET_BOARD_DETAIL,
  payload
});

const getBoardListSaga = () => ({
  type: GET_BOARD_LIST_SAGA
});
const getBoardList = (payload: PostItem[]) => ({
  type: GET_BOARD_LIST,
  payload
});

const getBoardApplySaga = () => ({
  type: GET_BOARD_APPLY_SAGA
});
const getBoardApply = (payload: PostItem[]) => ({
  type: GET_BOARD_APPLY,
  payload
});

const getBoardDoingSaga = () => ({
  type: GET_BOARD_DOING_SAGA
});

const getBoardDoing = (payload: PostItem[]) => ({
  type: GET_BOARD_DOING,
  payload
});

const getBoardWantedSaga = () => ({
  type: GET_BOARD_WANTED_SAGA
});

const getBoardWanted = (payload: PostItem[]) => ({
  type: GET_BOARD_WANTED,
  payload
});

type BoardAction =
  | ReturnType<typeof getBoardListSaga>
  | ReturnType<typeof getBoardList>
  | ReturnType<typeof getBoardApplySaga>
  | ReturnType<typeof getBoardApply>
  | ReturnType<typeof getBoardDoingSaga>
  | ReturnType<typeof getBoardDoing>
  | ReturnType<typeof getBoardDetailSaga>
  | ReturnType<typeof getBoardDetail>
  | ReturnType<typeof getBoardWantedSaga>
  | ReturnType<typeof getBoardWanted>;

export const boardAction = {
  GET_BOARD_LIST_SAGA,
  GET_BOARD_LIST,
  GET_BOARD_APPLY_SAGA,
  GET_BOARD_APPLY,
  GET_BOARD_DOING_SAGA,
  GET_BOARD_DOING,
  GET_BOARD_DETAIL_SAGA,
  GET_BOARD_DETAIL,
  GET_BOARD_WANTED_SAGA,
  GET_BOARD_WANTED
};

export const boardActionCreater = {
  getBoardListSaga,
  getBoardList,
  getBoardApplySaga,
  getBoardApply,
  getBoardDoingSaga,
  getBoardDoing,
  getBoardDetailSaga,
  getBoardDetail,
  getBoardWantedSaga,
  getBoardWanted
};

export default BoardAction;
