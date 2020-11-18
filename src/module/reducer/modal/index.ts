import modalActionType, { modalAction } from "../../action/modal";

export interface ModalState {
  title: string;
  subTitle: string;
  isOpen: boolean;
}

export interface PortfolioModalState {
  isOpen: boolean;
}

interface ModalReducerState {
  formModal: ModalState;
  portfoioModal: PortfolioModalState;
}

const initialState: ModalReducerState = {
  formModal: {
    isOpen: false,
    title: "",
    subTitle: ""
  },
  portfoioModal: {
    isOpen: false
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
    case modalAction.PORTFOLIO_EDIT_MODAL_ON: {
      return {
        ...state,
        portfoioModal: {
          isOpen: true
        }
      };
    }
    case modalAction.PORTFOLIO_EDIT_MODAL_OFF: {
      return {
        ...state,
        portfoioModal: {
          isOpen: false
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
