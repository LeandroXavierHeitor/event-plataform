import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qhupzs3wmk01ywaoil9l8z/master',
  cache: new InMemoryCache()
})