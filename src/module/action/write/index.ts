const INPUT_UPDATE = "write/INPUT_UPDATE" as const;
const SET_BANNER_IMG = "write/SET_BANNER_IMG" as const;
const CHANGE_MODAL_STATE = "write/CHANGE_MODAL_STATE" as const;

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
  | ReturnType<typeof changeModalState>;

export const writeAction = {
  INPUT_UPDATE,
  SET_BANNER_IMG,
  CHANGE_MODAL_STATE
};

export const writeActionCreater = {
  inputUpdate,
  setBannerImg,
  changeModalState
};

export default WriteAction;
