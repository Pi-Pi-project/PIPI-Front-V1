import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import createReduxSaga from "redux-saga";
import rootSaga from "./saga";

const reduxSaga = createReduxSaga();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxSaga))
);

reduxSaga.run(rootSaga);

export default store;
