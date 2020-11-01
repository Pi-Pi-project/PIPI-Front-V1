import PasswordActionType, { passwordAction } from "../../action/password";

interface PasswordReducerState {
  email: string;
  checkCode: string;
  emailChecked: boolean;
  password: string;
  step: string;
  passwordRe: string;
}

const passwordReducerState: PasswordReducerState = {
  checkCode: "",
  email: "",
  emailChecked: false,
  password: "",
  passwordRe: "",
  step: "CHECK_EMAIL"
};

const passwordReducer = (
  state: PasswordReducerState = passwordReducerState,
  action: PasswordActionType
): PasswordReducerState => {
  switch (action.type) {
    case passwordAction.SET_STEP: {
      return {
        ...state,
        step: action.payload
      };
    }
    case passwordAction.UPDATE_INPUT: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    }
    default: {
      return state;
    }
  }
};

export default passwordReducer;
