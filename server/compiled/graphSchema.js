"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const index_1 = require("./models/index");
const resolvers = {
    Query: {
        // Our resolvers can access the fields in contextValue
        // from their third argument
        // argument are as follows parent, args, context, { cacheControl }
        user(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield index_1.User.findOne({ where: { id: args.id } });
                return user;
            });
        },
        allUser() {
            return __awaiter(this, void 0, void 0, function* () {
                const users = yield index_1.User.findAll();
                return users;
            });
        },
        allProducts() {
            return __awaiter(this, void 0, void 0, function* () {
                const products = yield index_1.Product.findAll();
                return products;
            });
        },
        products(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const products = yield index_1.Product.findAll();
                return products.filter(el => el.user_id == args.id);
            });
        },
        product(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const product = yield index_1.Product.findOne({ where: { id: args.id } });
                return product;
            });
        },
        allOrders() {
            return __awaiter(this, void 0, void 0, function* () {
                const orders = yield index_1.Order.findAll();
                return orders;
            });
        }
    },
    User: {
        products(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                const products = yield index_1.Product.findAll();
                return products.filter(el => el.user_id == parent.id);
            });
        }
    },
    Product: {
        user(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield index_1.User.findOne({ where: { id: parent.user_id } });
                return user;
            });
        }
    },
    Order: {
        user(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield index_1.User.findOne({ where: { id: parent.user_id } });
                return user;
            });
        },
        product(parent) {
            return __awaiter(this, void 0, void 0, function* () {
                const products = yield index_1.Product.findAll();
                const order = products.filter(el => el.id == parent.products_id);
                return order[0];
            });
        }
    },
    Mutation: {
        deleteProduct(_, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const deletedProduct = yield index_1.Product.findOne({ where: { id: args.id } });
                yield (deletedProduct === null || deletedProduct === void 0 ? void 0 : deletedProduct.destroy());
                return deletedProduct;
            });
        }
    }
};
exports.resolvers = resolvers;
const typeDefs = `#graphql
  type Query {
    user(id: ID!): User
    allUser:[User]
    allProducts:[Product]
    products(id: ID!):[Product]
    product(id: ID!):Product
    allOrders:[Order]
  }
  type Mutation {
    deleteProduct(id:ID!): Product
  }
  type User {
    id: String
    firstName:String
    lastName:String
    email:String
    password:String
    address:String
    contactNumber:String
    products:[Product]
  }
  type Product {
    id:String
    name:String
    price:Int
    description:String
    image:String
    quantityInStock:Int
    user_id:String
    user:User
  }
  type Order {
    id:String
    date:String
    totalAmount:Int
    product:Product
    user:User
  }
`;
exports.typeDefs = typeDefs;
