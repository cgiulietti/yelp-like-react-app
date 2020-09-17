const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { models, data } = require("./db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, data };
  }
});
server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
