import { ReportItem } from "../../reducer/AdminMain";
import { ProjectSuccessModalState } from "../../reducer/modal";

const FORM_MODAL_ON = "modal/FORM_MODAL_ON" as const;
const FORM_MODAL_OFF = "modal/FORM_MODAL_OFF" as const;

const PORTFOLIO_EDIT_MODAL_ON = "modal/PORTFOLIO_EDIT_MODAL_ON" as const;
const PORTFOLIO_EDIT_MODAL_OFF = "modal/PORTFOLIO_EDIT_MODAL_OFF" as const;

const PROJECT_SUCCESS_MODAL_ON = "modal/PROJECT_SUCCESS_MODAL_ON" as const;
const PROJECT_SUCCESS_MODAL_OFF = "modal/PROJECT_SUCCESS_MODAL_OFF" as const;
const PROJECT_SUCCESS_MODAL_CHANGE_INPUT = "modal/PROJECT_SUCCESS_MODAL_CHANGE_INPUT" as const;

const ADD_TODO_MODAL_ON = "modal/ADD_TODO_MODAL_ON" as const;
const ADD_TODO_MODAL_OFF = "modal/ADD_TODO_MODAL_OFF" as const;
const ADD_TODO_MODAL_CHANGE_CONTENT = "modal/ADD_TODO_MODAL_CHANGE_CONTENT" as const;

const addTodoModalOn = () => ({
  type: ADD_TODO_MODAL_ON
});

const addTodoModalOff = () => ({
  type: ADD_TODO_MODAL_OFF
});

const addTodoModalChangeContent = (payload: string) => ({
  type: ADD_TODO_MODAL_CHANGE_CONTENT,
  payload
});

const projectSuccessModalChangeInput = (payload: {
  name: string;
  value: string;
}) => ({
  type: PROJECT_SUCCESS_MODAL_CHANGE_INPUT,
  payload
});

const projectSuccessModalOn = () => ({
  type: PROJECT_SUCCESS_MODAL_ON
});

const projectSuccessModalOff = () => ({
  type: PROJECT_SUCCESS_MODAL_OFF
});

const portfolioEditModalOn = () => ({
  type: PORTFOLIO_EDIT_MODAL_ON
});

const portfolioEditModalOff = () => ({
  type: PORTFOLIO_EDIT_MODAL_OFF
});

const formModalOn = (payload: { title: string; subTitle: string }) => ({
  type: FORM_MODAL_ON,
  payload
});

const formModalOff = () => ({
  type: FORM_MODAL_OFF
});

type modalActionType =
  | ReturnType<typeof formModalOff>
  | ReturnType<typeof formModalOn>
  | ReturnType<typeof portfolioEditModalOn>
  | ReturnType<typeof portfolioEditModalOff>
  | ReturnType<typeof projectSuccessModalOff>
  | ReturnType<typeof projectSuccessModalOn>
  | ReturnType<typeof projectSuccessModalChangeInput>
  | ReturnType<typeof addTodoModalOn>
  | ReturnType<typeof addTodoModalOff>
  | ReturnType<typeof addTodoModalChangeContent>;

export const modalAction = {
  FORM_MODAL_ON,
  FORM_MODAL_OFF,
  PORTFOLIO_EDIT_MODAL_ON,
  PORTFOLIO_EDIT_MODAL_OFF,
  PROJECT_SUCCESS_MODAL_OFF,
  PROJECT_SUCCESS_MODAL_ON,
  PROJECT_SUCCESS_MODAL_CHANGE_INPUT,
  ADD_TODO_MODAL_ON,
  ADD_TODO_MODAL_OFF,
  ADD_TODO_MODAL_CHANGE_CONTENT
};

export const modalActionCreater = {
  formModalOn,
  formModalOff,
  portfolioEditModalOn,
  portfolioEditModalOff,
  projectSuccessModalOn,
  projectSuccessModalOff,
  projectSuccessModalChangeInput,
  addTodoModalOn,
  addTodoModalOff,
  addTodoModalChangeContent
};

export default modalActionType;
