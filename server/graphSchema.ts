const resolvers = {
  Query: {
    // Our resolvers can access the fields in contextValue
    // from their third argument
  },
};

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

export { typeDefs, resolvers }