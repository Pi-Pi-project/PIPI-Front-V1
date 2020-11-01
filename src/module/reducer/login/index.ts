import loginActionType, { loginAction } from "../../action/login";

interface loginReducerState {
  id: string;
  password: string;
}

const initalState: loginReducerState = {
  id: "",
  password: ""
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
    default: {
      return state;
    }
  }
};

export default loginReducer;
