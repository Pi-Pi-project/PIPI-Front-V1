import React, { FC } from "react";
import { Route, Switch } from "react-router";
import { LoginContainer } from "../container";

const LoginRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginContainer} />
    </Switch>
  );
};

export default LoginRouter;
