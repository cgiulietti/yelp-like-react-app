import { all, call, put, takeLatest } from "redux-saga/effects";
import * as searchActions from "./actions";
import { IRestaurant } from "../../shared/search/types";
import apolloClient from "../../apollo-client";
import gql from "graphql-tag";

const SEARCH_RESTAURANTS = gql`
  query SearchRestaurant(
    $keyword: String
    $dollarSigns: Int
    $hasDelivery: Boolean
  ) {
    search(
      searchRestaurantInput: {
        keyword: $keyword
        dollarSigns: $dollarSigns
        hasDelivery: $hasDelivery
      }
    ) {
      name
      dollarSigns
      hasDelivery
    }
  }
`;

function* getRestaurants(action: searchActions.Actions) {
  try {
    if (action.type === searchActions.FETCH_RESTAURANTS) {
      const { searchText, dollarSigns, hasDelivery } = action.payload;

      const clientResponse = yield call(apolloClient.query, {
        query: SEARCH_RESTAURANTS,
        variables: {
          keyword: searchText,
          dollarSigns: dollarSigns,
          hasDelivery: hasDelivery
        }
      });

      const restaurants: IRestaurant[] = clientResponse.data.search;
      yield put(searchActions.actions.populateRestaurantsList(restaurants));
    }
  } catch (e) {
    // handleError(e);
  }
}

export default function*() {
  yield all([takeLatest(searchActions.FETCH_RESTAURANTS, getRestaurants)]);
}
