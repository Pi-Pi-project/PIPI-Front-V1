import { ReportItem, ProjectApplyItem } from "../../reducer/AdminMain";

const GET_REPORT_SAGA = "adminMain/GET_REPORT_SAGA" as const;
const GET_PROJECT_SAGA = "adminMain/GET_PROJECT_SAGA" as const;

const GET_REPORT = "adminMain/GET_REPORT" as const;
const GET_PROJECT = "adminMain/GET_PROJECT" as const;

const getReportSaga = () => ({
  type: GET_REPORT_SAGA
});
const getProjectSaga = () => ({
  type: GET_PROJECT_SAGA
});

const getReport = (payload: ReportItem[]) => ({
  type: GET_REPORT,
  payload
});
const getProject = (payload: ProjectApplyItem[]) => ({
  type: GET_PROJECT,
  payload
});

type AdminMainAction = ReturnType<
  | typeof getReportSaga
  | typeof getProjectSaga
  | typeof getProject
  | typeof getReport
>;

export const adminMainAction = {
  GET_REPORT_SAGA,
  GET_PROJECT_SAGA,
  GET_REPORT,
  GET_PROJECT
};

export const adminMainActionCreater = {
  getProjectSaga,
  getReportSaga,
  getReport,
  getProject
};

export default AdminMainAction;
