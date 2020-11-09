import BoardAction, { boardAction } from "../../action/board";

export interface PostItem {
  id: number;
  title: string;
  img: string;
  category: string;
  idea: string;
  postSkillsets: SkillSet[];
  userEmail: string;
  userImg: string;
  userNickname: string;
  createdAt: string;
}

interface SkillSet {
  postId: number;
  skill: string;
}
export interface DetailPostItem {
  id: number;
  title: string;
  img: string;
  category: string;
  idea: string;
  postSkillsets: SkillSet[];
  max: number;
  mine: boolean;
  userEmail: string;
  applied: boolean;
  userImg: string;
  userNickname: string;
  createdAt: string;
  content: string;
}

interface BoardItem {
  list: PostItem[];
  page: number;
  isLoading: boolean;
  modalIsOpen?: boolean;
}

export interface ApplyUser {
  userEmail: string;
  status: string;
  userImg: string;
  userNickname: string;
}

export interface ApplyPost {
  applyUsers: ApplyUser[];
  id: number;
}

interface BoardReducerState {
  boardList: BoardItem;
  boardApply: BoardItem;
  boardDoing: BoardItem;
  boardWanted: BoardItem;
  boardSearch: BoardItem;
  postApply: ApplyPost;
  detail: DetailPostItem;
}

const initialBoardItem: BoardItem = {
  list: [],
  page: 0,
  modalIsOpen: false,
  isLoading: false
};
const boardInitialState: BoardReducerState = {
  boardApply: { ...initialBoardItem },
  boardList: { ...initialBoardItem },
  boardDoing: { ...initialBoardItem },
  boardWanted: { ...initialBoardItem },
  boardSearch: { ...initialBoardItem },
  postApply: {
    applyUsers: [],
    id: 0
  },
  detail: {
    applied: false,
    mine: false,
    content: "",
    category: "",
    createdAt: "",
    id: 0,
    idea: "",
    img: "",
    max: 0,
    postSkillsets: [],
    title: "",
    userEmail: "",
    userImg: "",
    userNickname: ""
  }
};

const boardReducer = (
  state: BoardReducerState = boardInitialState,
  action: BoardAction
): BoardReducerState => {
  switch (action.type) {
    case boardAction.GET_BOARD_LIST: {
      return {
        ...state,
        boardList: {
          isLoading: true,
          list: state.boardList.list.concat(action.payload),
          page: state.boardList.page + 1
        }
      };
    }
    case boardAction.GET_BOARD_DOING: {
      return {
        ...state,
        boardDoing: {
          isLoading: true,
          list: state.boardDoing.list.concat(action.payload),
          page: state.boardDoing.page + 1
        }
      };
    }
    case boardAction.GET_BOARD_APPLY: {
      return {
        ...state,
        boardApply: {
          isLoading: true,
          list: state.boardApply.list.concat(action.payload),
          page: state.boardApply.page + 1
        }
      };
    }
    case boardAction.GET_BOARD_SEARCH: {
      return {
        ...state,
        boardSearch: {
          ...state.boardSearch,
          isLoading: true,
          list: state.boardSearch.list.concat(action.payload),
          page: state.boardSearch.page + 1
        }
      };
    }
    case boardAction.GET_BOARD_DETAIL: {
      return {
        ...state,
        detail: action.payload
      };
    }
    case boardAction.GET_POST_APPLY_USER_LIST: {
      return {
        ...state,
        postApply: action.payload
      };
    }
    case boardAction.CHANGE_SEARCH_MODAL: {
      return {
        ...state,
        boardSearch: {
          ...state.boardSearch,
          modalIsOpen: action.payload
        }
      };
    }
    case boardAction.EDIT_BOARD_MEMBER: {
      const { email, accept } = action.payload;
      return {
        ...state,
        postApply: {
          ...state.postApply,
          applyUsers: state.postApply.applyUsers.map(now =>
            now.userEmail === email ? { ...now, status: accept } : now
          )
        }
      };
    }
    case boardAction.RESET_BOARD: {
      return boardInitialState;
    }
    default: {
      return state;
    }
  }
};
export default boardReducer;
