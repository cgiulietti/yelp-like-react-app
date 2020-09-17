const data = require("./data");

const createRestaurantModel = require("./restaurant");

module.exports = {
  models: {
    Restaurant: createRestaurantModel(data)
  }
};
