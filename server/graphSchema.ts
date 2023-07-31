import { User } from './models/index'

const resolvers = {
  Query: {
    // Our resolvers can access the fields in contextValue
    // from their third argument
    user(_,args) {
      return User.findOne({where:{id:args.id}});
    },
  },
};

const typeDefs = `#graphql
  type Query {
    user(id: ID!): User
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

export { typeDefs, resolvers }