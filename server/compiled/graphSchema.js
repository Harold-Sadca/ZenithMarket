"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const resolvers = {
    Query: {
    // Our resolvers can access the fields in contextValue
    // from their third argument
    },
};
exports.resolvers = resolvers;
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;
exports.typeDefs = typeDefs;
