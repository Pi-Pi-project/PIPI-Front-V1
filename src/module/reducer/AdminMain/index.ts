import AdminMainAction, { adminMainAction } from "../../action/adminMain";

export interface ProjectApplyItem {
  projectId: number;
  title: string;
}

export interface ReportItem {
  profileImg: string;
  reportedEmail: string;
  reporterEmail: string;
  userNickname: string;
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
