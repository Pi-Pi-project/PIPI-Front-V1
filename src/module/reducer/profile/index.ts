import ProfileAction, { profileAction } from "../../action/profile";

export interface Portfolio {
  id: number;
  userEmail: string;
  title: string;
  giturl: string;
  introduce: string;
}

interface Skills {
  userEmail: string;
  skill: string;
}

export interface ProfileReducerState {
  profileImg: string;
  nickname: string;
  userEmail: string;
  skills: Skills[];
  giturl: string;
  introduce: string;
  firstPortfolio: Portfolio;
  secondPortfolio: Portfolio;
  portfolios: Portfolio[];
}

const initialPortfolio: Portfolio = {
  giturl: "",
  id: 0,
  introduce: "",
  title: "",
  userEmail: ""
};

const initialState: ProfileReducerState = {
  firstPortfolio: { ...initialPortfolio },
  secondPortfolio: { ...initialPortfolio },
  giturl: "",
  introduce: "",
  nickname: "",
  profileImg: "",
  userEmail: "",
  portfolios: [],
  skills: []
};

const profileReducer = (
  state: ProfileReducerState = initialState,
  action: ProfileAction
): ProfileReducerState => {
  switch (action.type) {
    case profileAction.GET_PROFILE: {
      return {
        ...state,
        ...action.payload
      };
    }
    case profileAction.GET_PORTFOLIO: {
      return {
        ...state,
        portfolios: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
