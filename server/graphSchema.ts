import { User, Product } from './models/index'

const resolvers = {
  Query: {
    // Our resolvers can access the fields in contextValue
    // from their third argument
    user(_:any,args:any) {
      return User.findOne({where:{id:args.id}});
    },
    allUser() {
      return User.findAll()
    },
    allProducts() {
      return Product.findAll()
    },
    products(_:any,args:any) {
      return Product.findAll()
    }
  },
};

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

export { typeDefs, resolvers }