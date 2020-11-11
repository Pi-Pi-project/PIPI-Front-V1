import { ProfileReducerState } from "../../reducer/profile";

const GET_PROFILE_SAGA = "profile/GET_PROFILE_SAGA" as const;
const GET_PROFILE = "profile/GET_PROFILE" as const;

const getProfileSaga = (payload: string) => ({
  type: GET_PROFILE_SAGA,
  payload
});

const getProfile = (payload: ProfileReducerState) => ({
  type: GET_PROFILE,
  payload
});

type ProfileAction =
  | ReturnType<typeof getProfile>
  | ReturnType<typeof getProfileSaga>;

export const profileAction = {
  GET_PROFILE,
  GET_PROFILE_SAGA
};

export const profileActionCreater = {
  getProfile,
  getProfileSaga
};

export default ProfileAction;
