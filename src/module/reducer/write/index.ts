import WriteAction, { writeAction } from "../../action/write";

interface WriteReducerState {
  title: string;
  category: string;
  skills: string[];
  max: string;
  introduce: string;
  detail: string;
  file: File | null;
}

const writeReducerState: WriteReducerState = {
  title: "",
  category: "",
  skills: [],
  max: "0",
  introduce: "",
  detail: "",
  file: null
};

const writeReducer = (
  state: WriteReducerState = writeReducerState,
  action: WriteAction
): WriteReducerState => {
  switch (action.type) {
    case writeAction.INPUT_UPDATE: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    }
    case writeAction.SET_BANNER_IMG: {
      return {
        ...state,
        file: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default writeReducer;
