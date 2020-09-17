import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import { run as runSagas, sagaMiddleware } from "./sagas";

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

runSagas();

export default store;
