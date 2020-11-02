import { PostItem } from "../../reducer/board";

const GET_BOARD_LIST_SAGA = "board/GET_BOARD_LIST_SAGA" as const;
const GET_BOARD_LIST = "board/GET_BOARD_LIST" as const;

const GET_BOARD_APPLY_SAGA = "board/GET_BOARD_APPLY_SAGA" as const;
const GET_BOARD_APPLY = "board/GET_BOARD_APPLY" as const;

const GET_BOARD_MY_PROJECT_SAGA = "board/GET_BOARD_MY_PROJECT_SAGA" as const;
const GET_BOARD_MY_PROJECT = "board/GET_BOARD_MY_PROJECT" as const;

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

const getBoardMyProjectSaga = () => ({
  type: GET_BOARD_MY_PROJECT_SAGA
});

const getBoardMyPrject = (payload: PostItem[]) => ({
  type: GET_BOARD_MY_PROJECT,
  payload
});

type BoardAction =
  | ReturnType<typeof getBoardListSaga>
  | ReturnType<typeof getBoardList>
  | ReturnType<typeof getBoardApplySaga>
  | ReturnType<typeof getBoardApply>
  | ReturnType<typeof getBoardMyProjectSaga>
  | ReturnType<typeof getBoardMyPrject>;

export const boardAction = {
  GET_BOARD_LIST_SAGA,
  GET_BOARD_LIST,
  GET_BOARD_APPLY_SAGA,
  GET_BOARD_APPLY,
  GET_BOARD_MY_PROJECT_SAGA,
  GET_BOARD_MY_PROJECT
};

export const boardActionCreater = {
  getBoardListSaga,
  getBoardList,
  getBoardApplySaga,
  getBoardApply,
  getBoardMyProjectSaga,
  getBoardMyPrject
};

export default BoardAction;
