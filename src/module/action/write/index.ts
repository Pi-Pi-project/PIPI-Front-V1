const INPUT_UPDATE = "write/INPUT_UPDATE" as const;
const SET_BANNER_IMG = "write/SET_BANNER_IMG" as const;

const inputUpdate = (payload: { name: string; value: string }) => ({
  type: INPUT_UPDATE,
  payload
});

const setBannerImg = (payload: File) => ({
  type: SET_BANNER_IMG,
  payload
});

type WriteAction =
  | ReturnType<typeof inputUpdate>
  | ReturnType<typeof setBannerImg>;

export const writeAction = {
  INPUT_UPDATE,
  SET_BANNER_IMG
};

export const writeActionCreater = {
  inputUpdate,
  setBannerImg
};

export default WriteAction;
