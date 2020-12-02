import modalActionType, {
  modalAction,
  modalActionCreater
} from "../../action/modal";

export interface ModalState {
  title: string;
  subTitle: string;
  isOpen: boolean;
}

export interface PortfolioModalState {
  isOpen: boolean;
}

export interface ProjectSuccessModalState {
  giturl: string;
  introduce: string;
  isOpen: boolean;
}

export interface AddTodoModalState {
  content: string;
  isOpen: boolean;
}

export interface ApplyDetailModalState {
  title?: string;
  reason?: string;
  giturl?: string;
  introduce?: string;
  type?: "REPORT" | "PROJECT";
  isOpen: boolean;
}

interface ModalReducerState {
  formModal: ModalState;
  portfoioModal: PortfolioModalState;
  projectSuccessModal: ProjectSuccessModalState;
  addTodoModal: AddTodoModalState;
  applyDetailModal: ApplyDetailModalState;
}

const initialState: ModalReducerState = {
  formModal: {
    isOpen: false,
    title: "",
    subTitle: ""
  },
  portfoioModal: {
    isOpen: false
  },
  projectSuccessModal: {
    introduce: "",
    giturl: "",
    isOpen: false
  },
  addTodoModal: {
    isOpen: false,
    content: ""
  },
  applyDetailModal: {
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
    case modalAction.PROJECT_SUCCESS_MODAL_ON: {
      return {
        ...state,
        projectSuccessModal: {
          ...state.projectSuccessModal,
          isOpen: true
        }
      };
    }
    case modalAction.PROJECT_SUCCESS_MODAL_OFF: {
      return {
        ...state,
        projectSuccessModal: {
          giturl: "",
          introduce: "",
          isOpen: false
        }
      };
    }
    case modalAction.PROJECT_SUCCESS_MODAL_CHANGE_INPUT: {
      const { name, value } = action.payload;
      return {
        ...state,
        projectSuccessModal: {
          ...state.projectSuccessModal,
          [name]: value
        }
      };
    }
    case modalAction.PROJECT_SUCCESS_MODAL_ON: {
      return {
        ...state,
        addTodoModal: {
          ...state.addTodoModal,
          isOpen: true
        }
      };
    }
    case modalAction.ADD_TODO_MODAL_ON: {
      return {
        ...state,
        addTodoModal: {
          ...state.addTodoModal,
          isOpen: true
        }
      };
    }
    case modalAction.ADD_TODO_MODAL_OFF: {
      return {
        ...state,
        addTodoModal: {
          isOpen: false,
          content: ""
        }
      };
    }
    case modalAction.ADD_TODO_MODAL_CHANGE_CONTENT: {
      return {
        ...state,
        addTodoModal: {
          ...state.addTodoModal,
          content: action.payload
        }
      };
    }
    case modalAction.APPLY_DETAIL_MODAL_OFF: {
      return {
        ...state,
        applyDetailModal: {
          isOpen: false
        }
      };
    }
    case modalAction.APPLY_DETAIL_MODAL_ON: {
      return {
        ...state,
        applyDetailModal: {
          isOpen: true,
          ...action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
