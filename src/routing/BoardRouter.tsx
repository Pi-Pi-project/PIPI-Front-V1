import React, { FC } from "react";
import { Route, Switch } from "react-router";
import { BoardListContainer } from "../container";

const BoardRouter: FC = () => {
  return (
    <Switch>
      <Route path="/board" component={BoardListContainer} />
    </Switch>
  );
};

export default BoardRouter;
