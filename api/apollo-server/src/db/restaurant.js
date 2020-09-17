const createRestaurantModel = data => {
  return {
    searchRestaurantKeyword(search) {
      let result = data;

      const keyword = search.keyword;
      if (keyword)
        result = result.filter(restaurant =>
          restaurant.keywords.includes(keyword)
        );

      const dollarSigns = search.dollarSigns;
      if (dollarSigns)
        result = result.filter(
          restaurant => restaurant.dollarSigns == dollarSigns
        );

      const hasDelivery = search.hasDelivery;
      if (hasDelivery)
        result = result.filter(restaurant => restaurant.hasDelivery);

      return result;
    }
  };
};

module.exports = createRestaurantModel;
