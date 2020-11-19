import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormModal from "./component/Modal/FormModal";
import { AdminRouter, LoginedRouter, LoginRouter } from "./routing";
import RegisterRouter from "./routing/RegisterRouter";
import { GlobalStyle, GlobalContainer } from "./style/GlobalStyle";

const App: FC = () => {
  return (
    <GlobalContainer>
      <BrowserRouter>
        <GlobalStyle />
        <FormModal />
        <Switch>
          <Route path="/login" component={LoginRouter} />
          <Route path="/register" component={RegisterRouter} />
          <Route path="/admin" component={AdminRouter} />
          <Route component={LoginedRouter} />
        </Switch>
      </BrowserRouter>
    </GlobalContainer>
  );
};

export default App;
