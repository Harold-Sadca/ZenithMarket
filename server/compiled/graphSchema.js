"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const index_1 = require("./models/index");
const resolvers = {
    Query: {
        // Our resolvers can access the fields in contextValue
        // from their third argument
        user(_, args) {
            return index_1.User.findOne({ where: { id: args.id } });
        },
        allUser() {
            return index_1.User.findAll();
        }
    },
};
exports.resolvers = resolvers;
const typeDefs = `#graphql
  type Query {
    user(id: ID!): User
    allUser:[User]
  }
  type User {
    id: String
    firstName:String
    lastName:String
    email:String
    password:String
    address:String
    contactNumber:String
  }
`;
exports.typeDefs = typeDefs;
