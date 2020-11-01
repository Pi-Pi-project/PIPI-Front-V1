import React, { FC } from "react";
import { Route, Switch } from "react-router";
import Navigation from "../component/Navigation/Navigation";
import * as G from "../style/GlobalStyle";
import BoardRouter from "./BoardRouter";

const LoginedRouter: FC = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route component={BoardRouter} />
      </Switch>
    </>
  );
};

export default LoginedRouter;
