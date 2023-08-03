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
        },
        allProducts() {
            return index_1.Product.findAll();
        },
        products(_, args) {
            return index_1.Product.findAll();
        }
    },
};
exports.resolvers = resolvers;
const typeDefs = `#graphql
  type Query {
    user(id: ID!): User
    allUser:[User]
    allProducts:[Product]
    products(id: ID!):[Product]
  }
  type User {
    id: String
    firstName:String
    lastName:String
    email:String
    password:String
    address:String
    contactNumber:String
    products(id: ID!):[Product]
  }
  type Product {
    id:String
    name:String
    price:Int
    description:String
    image:String
    quantityInStock:Int
    user_id:String
  }
`;
exports.typeDefs = typeDefs;
