import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import {
  BoardApplyContainer,
  BoardDetailContainer,
  BoardListContainer,
  BoardMemberContainer,
  BoardMineContainer,
  BoardSearchContainer,
  BoardWriteContainer
} from "../container";

const BoardRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/board/detail/:id" component={BoardDetailContainer} />
      <Route exact path="/board/list" component={BoardListContainer} />
      <Route exact path="/board/write" component={BoardWriteContainer} />
      <Route exact path="/board/mine" component={BoardMineContainer} />
      <Route exact path="/board/apply" component={BoardApplyContainer} />
      <Route
        exact
        path="/board/search/:category"
        component={BoardSearchContainer}
      />

      <Route exact path="/board/member/:id" component={BoardMemberContainer} />
      <Redirect to="/board/list" />
    </Switch>
  );
};

export default BoardRouter;
