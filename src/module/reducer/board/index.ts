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

interface BoardItem {
  list: PostItem[];
  page: number;
  isLoading: boolean;
}

interface BoardReducerState {
  boardList: BoardItem;
  boardApply: BoardItem;
  myProject: BoardItem;
}

const initialBoardItem: BoardItem = {
  list: [],
  page: 0,
  isLoading: false
};
const boardInitialState: BoardReducerState = {
  boardApply: { ...initialBoardItem },
  boardList: { ...initialBoardItem },
  myProject: { ...initialBoardItem }
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
    default: {
      return state;
    }
  }
};

export default boardReducer;
