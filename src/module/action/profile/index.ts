import { Portfolio, ProfileReducerState } from "../../reducer/profile";

const GET_PROFILE_SAGA = "profile/GET_PROFILE_SAGA" as const;
const GET_PROFILE = "profile/GET_PROFILE" as const;

const GET_PORTFOLIO_SAGA = "profile/GET_PORTFOLIO_SAGA" as const;
const GET_PORTFOLIO = "profile/GET_PORTFOLIO" as const;

const REMOVE_SELECT_PORTFOLIO_SAGA = "profile/REMOVE_SELECT_PORTFOLIO_SAGA " as const;
const ADD_SELECT_PORTFOLIO_SAGA = "profile/REMOVE_SELECT_PORTFOLIO_SAGA " as const;

const SELECT_PORTFOLIO_SAGA = "profile/SELECT_PORTFOLIO_SAGA" as const;

const EDIT_PROFILE_SAGA = "profile/EDIT_PROFILE_SAGA" as const;

const editProfileSaga = () => ({
  type: EDIT_PROFILE_SAGA
});

const selectPortfolioSaga = (payload: {
  email: string;
  selectId: number[];
}) => ({
  type: SELECT_PORTFOLIO_SAGA,
  payload
});

const removeSelectPortfolioSaga = (payload: number) => ({
  type: REMOVE_SELECT_PORTFOLIO_SAGA,
  payload
});

const addSelectPortfolioSaga = (payload: number) => ({
  type: ADD_SELECT_PORTFOLIO_SAGA,
  payload
});

const getPortfolio = (payload: Portfolio[]) => ({
  type: GET_PORTFOLIO,
  payload
});

const getPortfolioSaga = (payload: string) => ({
  type: GET_PORTFOLIO_SAGA,
  payload
});

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
  | ReturnType<typeof getProfileSaga>
  | ReturnType<typeof getPortfolio>
  | ReturnType<typeof getPortfolioSaga>
  | ReturnType<typeof addSelectPortfolioSaga>
  | ReturnType<typeof removeSelectPortfolioSaga>
  | ReturnType<typeof selectPortfolioSaga>
  | ReturnType<typeof editProfileSaga>;

export const profileAction = {
  GET_PROFILE,
  GET_PROFILE_SAGA,
  GET_PORTFOLIO,
  GET_PORTFOLIO_SAGA,
  ADD_SELECT_PORTFOLIO_SAGA,
  REMOVE_SELECT_PORTFOLIO_SAGA,
  SELECT_PORTFOLIO_SAGA,
  EDIT_PROFILE_SAGA
};

export const profileActionCreater = {
  getProfile,
  getProfileSaga,
  getPortfolio,
  getPortfolioSaga,
  addSelectPortfolioSaga,
  removeSelectPortfolioSaga,
  selectPortfolioSaga,
  editProfileSaga
};

export default ProfileAction;
