import { ReportItem, ProjectApplyItem } from "../../reducer/AdminMain";

const GET_REPORT_SAGA = "adminMain/GET_REPORT_SAGA" as const;
const GET_PROJECT_SAGA = "adminMain/GET_PROJECT_SAGA" as const;

const GET_REPORT = "adminMain/GET_REPORT" as const;
const GET_PROJECT = "adminMain/GET_PROJECT" as const;

const GET_REPORT_DETAIL_SAGA = "adminMain/GET_REPORT_DETAIL_SAGA" as const;
const GET_PROJECT_DETAIL_SAGA = "adminMain/GET_PROJECT_DETAIL_SAGA" as const;

const GET_REPORT_DETAIL = "adminMain/GET_REPORT_DETAIL" as const;
const GET_PROJECT_DETAIL = "adminMain/GET_PROJECT_DETAIL" as const;

const getReportDetailSaga = (payload: {
  reportedEmail: string;
  reporterEmail: string;
  type: "REPORT" | "PROJECT";
}) => ({
  type: GET_REPORT_DETAIL_SAGA,
  payload
});

const getProjectDetail = () => ({
  type: GET_PROJECT_DETAIL
});
const getProjectDetailSaga = (payload: number) => ({
  type: GET_PROJECT_DETAIL_SAGA,
  payload
});

const getReportDetail = () => ({
  type: GET_REPORT_DETAIL
});

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
  | typeof getReportDetailSaga
  | typeof getProjectDetail
  | typeof getProjectDetailSaga
  | typeof getReportDetail
>;

export const adminMainAction = {
  GET_REPORT_SAGA,
  GET_PROJECT_SAGA,
  GET_REPORT,
  GET_PROJECT,
  GET_PROJECT_DETAIL,
  GET_PROJECT_DETAIL_SAGA,
  GET_REPORT_DETAIL,
  GET_REPORT_DETAIL_SAGA
};

export const adminMainActionCreater = {
  getProjectSaga,
  getReportSaga,
  getReport,
  getProject,
  getReportDetailSaga,
  getProjectDetail,
  getProjectDetailSaga,
  getReportDetail
};

export default AdminMainAction;
