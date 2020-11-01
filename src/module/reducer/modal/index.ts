import modalActionType, { modalAction } from "../../action/modal";

export interface ModalState {
  title: string;
  subTitle: string;
  isOpen: boolean;
}

interface ModalReducerState {
  formModal: ModalState;
}

const initialState: ModalReducerState = {
  formModal: {
    isOpen: false,
    title: "",
    subTitle: ""
  }
};

const modalReducer = (
  state: ModalReducerState = initialState,
  action: modalActionType
): ModalReducerState => {
  switch (action.type) {
    case modalAction.FORM_MODAL_ON: {
      return {
        ...state,
        formModal: {
          isOpen: true,
          ...action.payload
        }
      };
    }
    case modalAction.FORM_MODAL_OFF: {
      return {
        ...state,
        formModal: {
          isOpen: false,
          title: "",
          subTitle: ""
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
