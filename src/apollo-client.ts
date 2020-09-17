import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";

const http = new HttpLink({ uri: "http://localhost:4001/" });
const link = ApolloLink.from([http]);
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache
});

export default apolloClient;
