import AdminMainAction, { adminMainAction } from "../../action/adminMain";

export interface ProjectApplyItem {
  projectId: number;
  title: string;
  giturl: string;
  introduce: string;
}

export interface ReportItem {
  projectId: number;
  title: string;
  coverImg: string;
}
interface AdminMainReducer {
  reports: ReportItem[];
  projects: ProjectApplyItem[];
}

const initialState: AdminMainReducer = {
  reports: [],
  projects: []
};

const adminMainReducer = (
  state: AdminMainReducer = initialState,
  action: AdminMainAction
): AdminMainReducer => {
  switch (action.type) {
    case adminMainAction.GET_PROJECT: {
      return {
        ...state,
        projects: action.payload
      };
    }
    case adminMainAction.GET_REPORT: {
      return {
        ...state,
        reports: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default adminMainReducer;
