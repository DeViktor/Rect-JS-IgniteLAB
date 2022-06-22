import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4pv3uzs2fn001z4ehhahglz/master',
  cache: new InMemoryCache()
})