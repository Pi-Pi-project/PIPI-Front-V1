import React, { FC } from "react";
import { Switch, Route } from "react-router";
import { RegisterContainer } from "../container";

const RegisterRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/register" component={RegisterContainer} />
    </Switch>
  );
};

export default RegisterRouter;
