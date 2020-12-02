const UPDATE_INPUT = "password/UPDATE_INPUT" as const;
const SET_STEP = "password/SET_STEP" as const;
const FIND_EMAIL_SAGA = "password/FIND_EMAIL" as const;

const updateInput = (payload: { name: string; value: string }) => ({
  type: UPDATE_INPUT,
  payload
});

const setStep = (payload: string) => ({
  type: SET_STEP,
  payload
});

const findEmailSaga = () => ({
  type: FIND_EMAIL_SAGA
});

type PasswordActionType =
  | ReturnType<typeof updateInput>
  | ReturnType<typeof setStep>;

export const passwordAction = {
  UPDATE_INPUT,
  SET_STEP,
  FIND_EMAIL_SAGA
};

export const passwordActionCreater = {
  updateInput,
  setStep,
  findEmailSaga
};

export default PasswordActionType;
