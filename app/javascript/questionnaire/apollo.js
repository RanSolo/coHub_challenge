import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import {
  IntrospectionFragmentMatcher,
  InMemoryCache
} from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";

const link = new HttpLink({
  uri: "http://loalhost:3000/graphql",
  credentials: "same-origin"
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const sanitizeMutationVariables = new ApolloLink((operation, forward) => {
  const definition = getMainDefinition(operation.query);
  if (definition.operation === "mutation") {
    operation.variables = removeTypename(operation.variables);
  }
  return forward(operation);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export default client;

const removeTypename = (value: any) => {
  if (value === null || value === undefined) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map(v => removeTypename(v));
  } else if (typeof value === "object") {
    const newObj = {};
    Object.entries(value).forEach(([key, v]) => {
      if (key !== "__typename") {
        newObj[key] = removeTypename(v);
      }
    });
    return newObj;
  }
  return value;
};
