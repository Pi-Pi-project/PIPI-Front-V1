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
  userEmail: string;
  userImg: string;
  userNickname: string;
  createdAt: string;
  content: string;
}

interface BoardItem {
  list: PostItem[];
  page: number;
  isLoading: boolean;
}

interface BoardReducerState {
  boardList: BoardItem;
  boardApply: BoardItem;
  boardDoing: BoardItem;
  boardWanted: BoardItem;
  detail: DetailPostItem;
}

const initialBoardItem: BoardItem = {
  list: [],
  page: 0,
  isLoading: false
};
const boardInitialState: BoardReducerState = {
  boardApply: { ...initialBoardItem },
  boardList: { ...initialBoardItem },
  boardDoing: { ...initialBoardItem },
  boardWanted: { ...initialBoardItem },
  detail: {
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
    case boardAction.GET_BOARD_DETAIL: {
      return {
        ...state,
        detail: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default boardReducer;
