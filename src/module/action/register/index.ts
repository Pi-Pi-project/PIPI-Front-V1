import { SkillData } from "../../../component/Register/RegisterFormBody/RegisterFormBody";

const UPDATE_INPUT = "register/UPDATE_INPUT" as const;
const CHECK_EMAIL_SAGA = "register/CHECK_EMAIL_SAGA" as const;
const SET_STEP = "register/SET_STEP" as const;
const CHECK_CODE_SAGA = "register/CHECK_CODE_SAGA" as const;
const REQUEST_REGISTER_SAGA = "register/REQUEST_REGISTER_SAGA" as const;
const REQUEST_PROFILE_SAGA = "register/REQUEST_PROFILE_SAGA" as const;
const SET_SKILLS = "register/SET_SKILLS" as const;
const SET_PROFILE_IMG = "register/SET_PROFILE_IMG" as const;

const setProfileImg = (payload: File) => ({
  type: SET_PROFILE_IMG,
  payload
});

const updateInput = (payload: { name: string; value: string }) => ({
  type: UPDATE_INPUT,
  payload
});

const requestProfileSaga = () => ({
  type: REQUEST_PROFILE_SAGA
});

const checkEmailSaga = () => ({
  type: CHECK_EMAIL_SAGA
});

const checkCodeSaga = () => ({
  type: CHECK_CODE_SAGA
});

const setStep = (payload: string) => ({
  type: SET_STEP,
  payload
});

const requestRegisterSaga = () => ({
  type: REQUEST_REGISTER_SAGA
});

const setSkills = (payload: SkillData) => ({
  type: SET_SKILLS,
  payload
});

type RegisterActionType =
  | ReturnType<typeof updateInput>
  | ReturnType<typeof checkEmailSaga>
  | ReturnType<typeof setStep>
  | ReturnType<typeof checkCodeSaga>
  | ReturnType<typeof requestRegisterSaga>
  | ReturnType<typeof setSkills>
  | ReturnType<typeof requestProfileSaga>
  | ReturnType<typeof setProfileImg>;

export const registerAction = {
  UPDATE_INPUT,
  CHECK_EMAIL_SAGA,
  SET_STEP,
  CHECK_CODE_SAGA,
  REQUEST_REGISTER_SAGA,
  SET_SKILLS,
  REQUEST_PROFILE_SAGA,
  SET_PROFILE_IMG
};

export const registerActionCreater = {
  updateInput,
  checkEmailSaga,
  setStep,
  checkCodeSaga,
  requestRegisterSaga,
  setSkills,
  requestProfileSaga,
  setProfileImg
};

export default RegisterActionType;
