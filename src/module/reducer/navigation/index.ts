import navigationActionType, {
  navigationAction
} from "../../action/navigation";

interface navigationReducer {
  email: string;
  profileImg: string;
}

const initialState: navigationReducer = {
  email: "",
  profileImg: ""
};

const navigationReducer = (
  state: navigationReducer = initialState,
  action: navigationActionType
): navigationReducer => {
  switch (action.type) {
    case navigationAction.GET_USER_INFO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default navigationReducer;
