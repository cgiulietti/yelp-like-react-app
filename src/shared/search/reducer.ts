import * as searchActions from "./actions";
import { ISearchState } from "./types";

const initialState: ISearchState = {
  restaurantsList: []
};

const reducer = (
  state: ISearchState = initialState,
  action: searchActions.Actions
) => {
  switch (action.type) {
    case searchActions.POPULATE_RESTAURANTS_LIST:
      return {
        ...state,
        restaurantsList: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
