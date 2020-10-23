import React, { FC } from "react";
import { Route, Switch } from "react-router";
import { Login } from "../component";

const LoginRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default LoginRouter;
