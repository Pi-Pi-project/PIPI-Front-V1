import React, { FC, useEffect } from "react";
import { RouteChildrenProps } from "react-router";
import { AdminLogin } from "../../component";
import { checkIsLogin } from "../../lib/api";

const AdminLoginContainer: FC<RouteChildrenProps> = ({ history }) => {
  useEffect(() => {
    checkIsLogin().then(isLogin => {
      isLogin && history.push("/admin");
    });
  }, []);
  return <AdminLogin />;
};

export default AdminLoginContainer;
