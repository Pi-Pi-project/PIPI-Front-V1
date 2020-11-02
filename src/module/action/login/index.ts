const INPUT_UPDATE = "login/INPUT_UPDATE" as const;
const REQUEST_LOGIN_SAGA = "login/REQUEST_LOGIN_SAGA" as const;
const SUCCESS_LOGIN = "login/SUCCESS_LOGIN" as const;

const inputUpdate = (payload: { name: string; value: string }) => ({
  type: INPUT_UPDATE,
  payload
});

const successLogin = () => ({
  type: SUCCESS_LOGIN
});

const requestLoginSaga = () => ({
  type: REQUEST_LOGIN_SAGA
});

type loginActionType =
  | ReturnType<typeof inputUpdate>
  | ReturnType<typeof requestLoginSaga>
  | ReturnType<typeof successLogin>;

export const loginAction = {
  INPUT_UPDATE,
  REQUEST_LOGIN_SAGA,
  SUCCESS_LOGIN
};

export const loginActionCreater = {
  inputUpdate,
  requestLoginSaga,
  successLogin
};

export default loginActionType;
