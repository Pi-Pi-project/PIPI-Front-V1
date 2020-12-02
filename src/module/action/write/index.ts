const INPUT_UPDATE = "write/INPUT_UPDATE" as const;
const SET_BANNER_IMG = "write/SET_BANNER_IMG" as const;
const CHANGE_MODAL_STATE = "write/CHANGE_MODAL_STATE" as const;
const SET_MODAL_TYPE = "write/SET_MODAL_TYPE" as const;
const SET_SKILLS = "write/SET_SKILLS" as const;
const UPLOAD_POST_SAGA = "write/UPLOAD_POST_SAGA" as const;
const SUCCESS_POST = "write/SUCCESS_POST" as const;
const CLEAR_CATEGORY = "write/CLEAR_CATEGORY" as const;

const clearCategory = () => ({
  type: CLEAR_CATEGORY
});

const successPost = () => ({
  type: SUCCESS_POST
});

const uploadPostSaga = () => ({
  type: UPLOAD_POST_SAGA
});

const setModalType = (payload: string) => ({
  type: SET_MODAL_TYPE,
  payload
});

const setSkills = (payload: string) => ({
  type: SET_SKILLS,
  payload
});

const inputUpdate = (payload: { name: string; value: string }) => ({
  type: INPUT_UPDATE,
  payload
});

const setBannerImg = (payload: File) => ({
  type: SET_BANNER_IMG,
  payload
});

const changeModalState = (payload: boolean) => ({
  type: CHANGE_MODAL_STATE,
  payload
});

type WriteAction =
  | ReturnType<typeof inputUpdate>
  | ReturnType<typeof setBannerImg>
  | ReturnType<typeof changeModalState>
  | ReturnType<typeof setModalType>
  | ReturnType<typeof setSkills>
  | ReturnType<typeof uploadPostSaga>
  | ReturnType<typeof successPost>
  | ReturnType<typeof clearCategory>;

export const writeAction = {
  INPUT_UPDATE,
  SET_BANNER_IMG,
  CHANGE_MODAL_STATE,
  SET_MODAL_TYPE,
  SET_SKILLS,
  UPLOAD_POST_SAGA,
  SUCCESS_POST,
  CLEAR_CATEGORY
};

export const writeActionCreater = {
  inputUpdate,
  setBannerImg,
  changeModalState,
  setModalType,
  setSkills,
  uploadPostSaga,
  successPost,
  clearCategory
};

export default WriteAction;
