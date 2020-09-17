import { RouteComponentProps } from "react-router-dom";
import { IRestaurant } from "../../shared/search/types";

export type ISearchContainer = ISearchContainerProps & ISearchContainerDispatch;

export interface ISearchContainerDispatch {
  fetchRestaurants: (
    searchText: string,
    dollarSigns: number,
    hasDelivery: boolean
  ) => void;
}

export interface ISearchContainerProps {
  restaurantsList: IRestaurant[];
}
