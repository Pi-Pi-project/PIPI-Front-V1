import React, { FC } from "react";
import { Switch, Route } from "react-router";
import { AdminLoginContainer, AdminMainContainer } from "../container";

const AdminRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/admin/login" component={AdminLoginContainer} />
      <Route exact path="/admin" component={AdminMainContainer} />
    </Switch>
  );
};

export default AdminRouter;
