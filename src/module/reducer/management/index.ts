import ManagementAction, { managementAction } from "../../action/management";

interface SelectDate {
  year: number;
  month: number;
  date: number;
}

export interface TodoItem {
  id: number;
  nickname: string;
  date: string;
  todo: string;
  todoStatus: string;
}

interface ManagementReducer {
  id: number;
  selectDate: SelectDate;
  year: number;
  month: number;
  todos: TodoItem[];
}

const managementReducerState: ManagementReducer = {
  selectDate: {
    date: 0,
    month: 0,
    year: 0
  },
  id: 0,
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  todos: []
};

const managementReducer = (
  state: ManagementReducer = managementReducerState,
  action: ManagementAction
): ManagementReducer => {
  switch (action.type) {
    case managementAction.SET_ID: {
      return {
        ...state,
        id: action.payload
      };
    }
    case managementAction.SELECT_DAY: {
      return {
        ...state,
        selectDate: action.payload
      };
    }
    case managementAction.GET_TODO: {
      return {
        ...state,
        todos: action.payload
      };
    }
    case managementAction.NEXT_MONTH: {
      return {
        ...state,
        year: state.month === 12 ? state.year + 1 : state.year,
        month: state.month === 12 ? 1 : state.month + 1
      };
    }
    case managementAction.PREV_MONTH: {
      return {
        ...state,
        year: state.month === 1 ? state.year - 1 : state.year,
        month: state.month === 1 ? 12 : state.month - 1
      };
    }
    default: {
      return state;
    }
  }
};

export default managementReducer;
