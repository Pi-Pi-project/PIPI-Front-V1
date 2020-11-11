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
  skills: Skills[];
  giturl: string;
  introduce: string;
  firstPortfolio: Portfolio;
  secondPortfolio: Portfolio;
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
  skills: []
};

const profileReducer = (
  state: ProfileReducerState = initialState,
  action: ProfileAction
): ProfileReducerState => {
  switch (action.type) {
    case profileAction.GET_PROFILE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
