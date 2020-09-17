import { ActionsUnion, createAction } from "../types";
import { IRestaurant } from "./types";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const POPULATE_RESTAURANTS_LIST = "POPULATE_RESTAURANTS_LIST";

const fetchRestaurants = (
  searchText: string,
  dollarSigns: number,
  hasDelivery: boolean
) => createAction(FETCH_RESTAURANTS, { searchText, dollarSigns, hasDelivery });
const populateRestaurantsList = (restaurants: IRestaurant[]) =>
  createAction(POPULATE_RESTAURANTS_LIST, restaurants);

export const actions = {
  fetchRestaurants,
  populateRestaurantsList
};

export type Actions = ActionsUnion<typeof actions>;
