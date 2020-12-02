import { cancel } from "redux-saga/effects";
import {
  PostItem,
  DetailPostItem,
  ApplyUser,
  ApplyPost,
  ProjectItem
} from "../../reducer/board";

interface ApplyUserObj {
  userEmail: string;
  userNickname: string;
}

const GET_BOARD_MANAGEMENT_SAGA = "board/GET_BOARD_MANAGEMENT_SAGA" as const;
const GET_BOARD_MANAGEMENT = "board/GET_BOARD_MANAGEMENT" as const;

const GET_BOARD_LIST_SAGA = "board/GET_BOARD_LIST_SAGA" as const;
const GET_BOARD_LIST = "board/GET_BOARD_LIST" as const;

const GET_BOARD_APPLY_SAGA = "board/GET_BOARD_APPLY_SAGA" as const;
const GET_BOARD_APPLY = "board/GET_BOARD_APPLY" as const;

const GET_BOARD_DOING_SAGA = "board/GET_BOARD_DOING_SAGA" as const;
const GET_BOARD_DOING = "board/GET_BOARD_DOING" as const;

const GET_BOARD_WANTED_SAGA = "board/GET_BOARD_WANTED_SAGA" as const;
const GET_BOARD_WANTED = "board/GET_BOARD_WANTED" as const;

const GET_BOARD_SEARCH_SAGA = "board/GET_BOARD_SEARCH_SAGA" as const;
const GET_BOARD_SEARCH = "board/GET_BOARD_SEARCH" as const;

const GET_BOARD_DETAIL_SAGA = "board/GET_BOARD_DETAIL_SAGA" as const;
const GET_BOARD_DETAIL = "board/GET_BOARD_DETAIL" as const;

const RESET_BOARD = "board/RESET_BOARD" as const;
const APPLY_PROJECT_SAGA = "board/APPLY_PROJECT_SAGA" as const;

const CANCEL_APPLY_SAGA = "board/CANCEL_APPLY_SAGA" as const;

const CHANGE_SEARCH_MODAL = "board/CHANGE_SEARCH_MODAL" as const;

const GET_POST_APPLY_USER_LIST_SAGA = "board/GET_POST_APPLY_USER_LIST_SAGA" as const;
const GET_POST_APPLY_USER_LIST = "board/GET_POST_APPLY_USER_LIST" as const;

const ACCEPT_APPLY_SAGA = "board/ACCEPT_APPLY_SAGA" as const;
const REJECT_APPLY_SAGA = "board/REJECT_APPLY_SAGA" as const;

const EDIT_BOARD_MEMBER = "board/EDIT_BOARD_MEMBER" as const;

const getBoardManagement = (payload: ProjectItem[]) => ({
  type: GET_BOARD_MANAGEMENT,
  payload
});

const getBoardManagementSaga = () => ({
  type: GET_BOARD_MANAGEMENT_SAGA
});

const editBoardMember = (payload: { email: string; accept: string }) => ({
  type: EDIT_BOARD_MEMBER,
  payload
});

const acceptApplySaga = (payload: ApplyUserObj) => ({
  type: ACCEPT_APPLY_SAGA,
  payload
});
const rejectApplySaga = (payload: ApplyUserObj) => ({
  type: REJECT_APPLY_SAGA,
  payload
});
const getPostApplyUserListSaga = (payload: number) => ({
  type: GET_POST_APPLY_USER_LIST_SAGA,
  payload
});

const getPostApplyUserList = (payload: ApplyPost) => ({
  type: GET_POST_APPLY_USER_LIST,
  payload
});

const changeSearchModal = (payload: boolean) => ({
  type: CHANGE_SEARCH_MODAL,
  payload
});

const getBoardSearchSaga = (payload: string) => ({
  type: GET_BOARD_SEARCH_SAGA,
  payload
});
const getBoardSearch = (payload: PostItem[]) => ({
  type: GET_BOARD_SEARCH,
  payload
});

const cancelApplySaga = (payload: number) => ({
  type: CANCEL_APPLY_SAGA,
  payload
});

const applyProjectSaga = () => ({
  type: APPLY_PROJECT_SAGA
});

const resetBoard = () => ({
  type: RESET_BOARD
});

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
  | ReturnType<typeof getBoardWanted>
  | ReturnType<typeof resetBoard>
  | ReturnType<typeof applyProjectSaga>
  | ReturnType<typeof cancelApplySaga>
  | ReturnType<typeof getBoardSearchSaga>
  | ReturnType<typeof getBoardSearch>
  | ReturnType<typeof changeSearchModal>
  | ReturnType<typeof getPostApplyUserList>
  | ReturnType<typeof getPostApplyUserListSaga>
  | ReturnType<typeof rejectApplySaga>
  | ReturnType<typeof acceptApplySaga>
  | ReturnType<typeof editBoardMember>
  | ReturnType<typeof getBoardManagement>
  | ReturnType<typeof getBoardManagementSaga>;

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
  GET_BOARD_WANTED,
  RESET_BOARD,
  APPLY_PROJECT_SAGA,
  CANCEL_APPLY_SAGA,
  GET_BOARD_SEARCH_SAGA,
  CHANGE_SEARCH_MODAL,
  GET_BOARD_SEARCH,
  GET_POST_APPLY_USER_LIST,
  GET_POST_APPLY_USER_LIST_SAGA,
  ACCEPT_APPLY_SAGA,
  REJECT_APPLY_SAGA,
  EDIT_BOARD_MEMBER,
  GET_BOARD_MANAGEMENT,
  GET_BOARD_MANAGEMENT_SAGA
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
  getBoardWanted,
  resetBoard,
  applyProjectSaga,
  cancelApplySaga,
  getBoardSearchSaga,
  changeSearchModal,
  getBoardSearch,
  getPostApplyUserListSaga,
  getPostApplyUserList,
  acceptApplySaga,
  rejectApplySaga,
  editBoardMember,
  getBoardManagement,
  getBoardManagementSaga
};

export default BoardAction;
