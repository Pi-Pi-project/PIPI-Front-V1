import React, { FC } from "react";
import { Route, Switch } from "react-router";
import { FindPassword } from "../component";

const FindPasswordRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/password" component={FindPassword} />
    </Switch>
  );
};

export default FindPasswordRouter;
