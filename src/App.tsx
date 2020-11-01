import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormModal from "./component/Modal/FormModal";
import { FindPasswordRouter, LoginedRouter, LoginRouter } from "./routing";
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
          <Route path="/password" component={FindPasswordRouter} />
          <Route path="/register" component={RegisterRouter} />
          <Route component={LoginedRouter} />
        </Switch>
      </BrowserRouter>
    </GlobalContainer>
  );
};

export default App;
