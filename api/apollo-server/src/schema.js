const { gql } = require("apollo-server");

const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    keywords: String!
    dollarSigns: Int!
    hasDelivery: Boolean!
  }
  input SearchRestaurantInput {
    keyword: String
    dollarSigns: Int
    hasDelivery: Boolean
  }
  type Query {
    search(searchRestaurantInput: SearchRestaurantInput!): [Restaurant!]!
  }
`;

module.exports = typeDefs;
