import loginActionType, { loginAction } from "../../action/login";

interface loginReducerState {
  id: string;
  password: string;
  successLogin: boolean;
}

const initalState: loginReducerState = {
  id: "",
  password: "",
  successLogin: false
};

const loginReducer = (
  state: loginReducerState = initalState,
  action: loginActionType
): loginReducerState => {
  switch (action.type) {
    case loginAction.INPUT_UPDATE: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name as "id" | "password"]: value
      };
    }
    case loginAction.SUCCESS_LOGIN: {
      return {
        ...state,
        successLogin: true
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
