import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import {
  BoardDetailContainer,
  BoardListContainer,
  BoardMineContainer,
  BoardWriteContainer
} from "../container";

const BoardRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/board/detail/:id" component={BoardDetailContainer} />
      <Route exact path="/board/list" component={BoardListContainer} />
      <Route exact path="/board/write" component={BoardWriteContainer} />
      <Route exact path="/board/mine" component={BoardMineContainer} />
      <Redirect to="/board/list" />
    </Switch>
  );
};

export default BoardRouter;
