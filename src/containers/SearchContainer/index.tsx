import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from "../../reducer";
import {
  ISearchContainer,
  ISearchContainerDispatch,
  ISearchContainerProps
} from "./types";
import "./SearchContainer.css";
import SearchBar from "../../components/SearchBar";
import RestaurantsList from "../../components/RestaurantsList";
import * as searchActions from "../../shared/search/actions";

class SearchContainer extends React.Component<ISearchContainer> {
  public constructor(props: ISearchContainer) {
    super(props);
    this.search = this.search.bind(this);
  }

  public componentDidMount() {}

  public componentWillReceiveProps(nextProps: ISearchContainerProps) {}

  public render() {
    const { restaurantsList } = this.props;
    return (
      <div className="Container">
        <SearchBar search={this.search} />
        <RestaurantsList data={restaurantsList} />
      </div>
    );
  }

  private search(
    searchText: string,
    dollarSigns: number,
    hasDelivery: boolean
  ) {
    this.props.fetchRestaurants(searchText, dollarSigns, hasDelivery);
  }
}

export const mapStateToProps = (state: IAppState) => {
  const { restaurantsList } = state.search;
  return {
    restaurantsList
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ISearchContainerDispatch => {
  return bindActionCreators(
    {
      fetchRestaurants: searchActions.actions.fetchRestaurants
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
