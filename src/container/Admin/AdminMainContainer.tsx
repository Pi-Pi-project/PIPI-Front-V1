import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AdminMain } from "../../component";
import { adminMainActionCreater } from "../../module/action/adminMain";

const AdminMainCotainer: FC = () => {
  const disaptch = useDispatch();
  useEffect(() => {
    disaptch(adminMainActionCreater.getProjectSaga());
    disaptch(adminMainActionCreater.getReportSaga());
  }, []);
  return <AdminMain />;
};

export default AdminMainCotainer;
