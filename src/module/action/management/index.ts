import { TodoItem } from "../../reducer/management";

const SELECT_DAY = "management/SELECT_DAY" as const;
const NEXT_MONTH = "management/NEXT_MONTH" as const;
const PREV_MONTH = "management/PREV_MONTH" as const;
const GET_TODO_SAGA = "management/GET_TODO_SAGA" as const;
const GET_TODO = "management/GET_TODO" as const;
const SET_ID = "management/SET_ID" as const;
const CHECK_TODO_SAGA = "management/CHECK_TODO_SAGA" as const;
const ADD_TODO_SAGA = "management/ADD_TODO_SAGA" as const;

const addTodoSaga = (payload: string) => ({
  type: ADD_TODO_SAGA,
  payload
});

const checkTodoSaga = (payload: number) => ({
  type: CHECK_TODO_SAGA,
  payload
});

const setId = (payload: number) => ({
  type: SET_ID,
  payload
});

const getTodo = (payload: TodoItem[]) => ({
  type: GET_TODO,
  payload
});

const getTodoSaga = () => ({
  type: GET_TODO_SAGA
});

const nextMonth = () => ({
  type: NEXT_MONTH
});

const prevMonth = () => ({
  type: PREV_MONTH
});

const selectDay = (payload: { date: number; year: number; month: number }) => ({
  type: SELECT_DAY,
  payload
});

type ManagementAction =
  | ReturnType<typeof selectDay>
  | ReturnType<typeof nextMonth>
  | ReturnType<typeof prevMonth>
  | ReturnType<typeof getTodo>
  | ReturnType<typeof getTodoSaga>
  | ReturnType<typeof setId>
  | ReturnType<typeof checkTodoSaga>
  | ReturnType<typeof addTodoSaga>;

export const managementAction = {
  SELECT_DAY,
  NEXT_MONTH,
  PREV_MONTH,
  GET_TODO,
  GET_TODO_SAGA,
  SET_ID,
  CHECK_TODO_SAGA,
  ADD_TODO_SAGA
};

export const managementActionCreater = {
  selectDay,
  nextMonth,
  prevMonth,
  getTodo,
  getTodoSaga,
  setId,
  checkTodoSaga,
  addTodoSaga
};

export default ManagementAction;
