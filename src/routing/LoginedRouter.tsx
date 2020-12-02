import React, { FC, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import Navigation from "../component/Navigation/Navigation";
import {
  ProfileContainer,
  ManagementContainer,
  ChatContainer
} from "../container";
import { checkIsLogin } from "../lib/api";
import * as G from "../style/GlobalStyle";
import BoardRouter from "./BoardRouter";

const LoginedRouter: FC = () => {
  const history = useHistory();
  useEffect(() => {
    checkIsLogin().then(res => {
      !res && history.push("/login");
    });
  }, []);
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/management/:id" component={ManagementContainer} />
        <Route exact path="/chat/:id" component={ChatContainer} />
        <Route component={BoardRouter} />
      </Switch>
    </>
  );
};

export default LoginedRouter;
