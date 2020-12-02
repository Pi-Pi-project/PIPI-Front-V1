const CHANGE_INPUT = "adminLogin/CHANGE_INPUT" as const;
const REQUEST_LOGIN_SAGA = "adminLogin/REQUEST_LOGIN_SAGA" as const;

const changeInput = (payload: { name: string; value: string }) => ({
  type: CHANGE_INPUT,
  payload
});

const requestLoginSaga = () => ({
  type: REQUEST_LOGIN_SAGA
});

type AdminLoginAction = ReturnType<
  typeof changeInput | typeof requestLoginSaga
>;

export const adminLoginAction = {
  CHANGE_INPUT,
  REQUEST_LOGIN_SAGA
};

export const adminLoginActionCreater = {
  changeInput,
  requestLoginSaga
};

export default AdminLoginAction;
