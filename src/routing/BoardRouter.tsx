import React, { FC } from "react";
import { Route, Switch } from "react-router";
import {
  BoardDetailContainer,
  BoardListContainer,
  BoardWriteContainer
} from "../container";

const BoardRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/board/detail/:id" component={BoardDetailContainer} />
      <Route exact path="/board/list" component={BoardListContainer} />
      <Route exact path="/board/write" component={BoardWriteContainer} />
    </Switch>
  );
};

export default BoardRouter;
