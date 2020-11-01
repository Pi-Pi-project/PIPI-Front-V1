const INPUT_UPDATE = "login/INPUT_UPDATE" as const;
const REQUEST_LOGIN_SAGA = "login/REQUEST_LOGIN_SAGA" as const;

const inputUpdate = (payload: { name: string; value: string }) => ({
  type: INPUT_UPDATE,
  payload
});

const requestLoginSaga = () => ({
  type: REQUEST_LOGIN_SAGA
});

type loginActionType =
  | ReturnType<typeof inputUpdate>
  | ReturnType<typeof requestLoginSaga>;

export const loginAction = {
  INPUT_UPDATE,
  REQUEST_LOGIN_SAGA
};

export const loginActionCreater = {
  inputUpdate,
  requestLoginSaga
};

export default loginActionType;
