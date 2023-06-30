import { GraphQLClient } from "graphql-request";


const GRAFBASE_API_URL = process.env.NODE_ENV === "production" ?
  process.env.GRAFBASE_PROD_API_URL : process.env.GRAFBASE_API_URL;

console.log(`url ${GRAFBASE_API_URL}`);

export const graphqlClient = new GraphQLClient(
  GRAFBASE_API_URL as string,
  {
    headers: {
      "x-api-key": process.env.GRAFBASE_API_KEY as string,
    },
  }
);
