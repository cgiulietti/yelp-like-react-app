import { combineReducers } from "redux";

import search from "./shared/search/reducer";
import { ISearchState } from "./shared/search/types";

export interface IAppState {
  search: ISearchState;
}

const rootReducer = combineReducers({ search });

export default rootReducer;
