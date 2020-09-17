module.exports = {
  Query: {
    search(_, { searchRestaurantInput }, { models }) {
      return models.Restaurant.searchRestaurantKeyword(searchRestaurantInput);
    }
  }
};
