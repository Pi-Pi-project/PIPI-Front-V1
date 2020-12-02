import { SkillData } from "../../../lib/static";
import RegisterActionType, { registerAction } from "../../action/register";

interface RegisterReducerState {
  skills: SkillData[];
  skill: string;
  github: string;
  introduce: string;
  step: string;
  checkCode: string;
  email: string;
  password: string;
  nickname: string;
  passwordRe: string;
  fileData: File | null;
}

const registerReducerState: RegisterReducerState = {
  step: "CHECK_EMAIL",
  checkCode: "",
  nickname: "",
  email: "",
  skill: "",
  skills: [],
  github: "",
  introduce: "",
  password: "",
  passwordRe: "",
  fileData: null
};

const registerReducer = (
  state: RegisterReducerState = registerReducerState,
  action: RegisterActionType
): RegisterReducerState => {
  switch (action.type) {
    case registerAction.SET_STEP: {
      return {
        ...state,
        step: action.payload
      };
    }
    case registerAction.UPDATE_INPUT: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    }
    case registerAction.SET_SKILLS: {
      if (state.skills.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        skills: state.skills.concat(action.payload)
      };
    }
    case registerAction.SET_PROFILE_IMG: {
      return {
        ...state,
        fileData: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default registerReducer;
