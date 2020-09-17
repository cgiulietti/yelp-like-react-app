export interface IRestaurant {
  name: string;
  hasDelivery: boolean;
  dollarSigns: number;
  keywords: string[];
}

export interface ISearchState {
  restaurantsList: IRestaurant[];
}
