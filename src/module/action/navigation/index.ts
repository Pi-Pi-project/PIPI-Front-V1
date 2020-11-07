const GET_USER_INFO = "navigation/GET_USER_INFO" as const;
const GET_USER_INFO_SAGA = "navigation/GET_USER_INFO_SAGA" as const;

const getUserInfo = (payload: { email: string; profileImg: string }) => ({
  type: GET_USER_INFO,
  payload
});

const getUserInfoSaga = () => ({
  type: GET_USER_INFO_SAGA
});

type navigationActionType =
  | ReturnType<typeof getUserInfo>
  | ReturnType<typeof getUserInfoSaga>;

export const navigationAction = {
  GET_USER_INFO,
  GET_USER_INFO_SAGA
};

export const navigationActionCreater = {
  getUserInfo,
  getUserInfoSaga
};

export default navigationActionType;
