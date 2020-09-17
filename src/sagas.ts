import createSagaMiddleware from "redux-saga";
import searchSaga from "./shared/search/saga";

export const sagaMiddleware = createSagaMiddleware();

export const run = () => {
  sagaMiddleware.run(searchSaga);
};
