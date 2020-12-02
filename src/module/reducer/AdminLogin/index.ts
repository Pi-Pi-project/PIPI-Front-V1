import AdminLoginAction, { adminLoginAction } from "../../action/adminLogin";

interface AdminLoginReducer {
  email: string;
  password: string;
}

const initialState: AdminLoginReducer = {
  email: "",
  password: ""
};

const adminLoginReducer = (
  state = initialState,
  action: AdminLoginAction
): AdminLoginReducer => {
  switch (action.type) {
    case adminLoginAction.CHANGE_INPUT: {
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

export default adminLoginReducer;
