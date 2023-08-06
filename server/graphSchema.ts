import { User, Product, Order } from './models/index'
import { TypeOrder, TypeProduct, TypeUser } from './types/types';

const resolvers = {
  Query: {
    // Our resolvers can access the fields in contextValue
    // from their third argument
    // argument are as follows parent, args, context, { cacheControl }
    async user(_:any,args:any) {
      const user = await User.findOne({where:{id:args.id}});
      return user
    },
    async allUser() {
      const users = await User.findAll()
      return users
    },
    async allProducts() {
      const products = await Product.findAll()
      return products
    },
    async products(_:any,args:any) {
      const products = await Product.findAll()
      return products.filter(el => el.user_id == args.id)
    },
    async product(_:any, args:any) {
      const product = await Product.findOne({where:{id:args.id}})
      return product
    },
    async allOrders() {
      const orders = await Order.findAll()
      return orders
    }
  },
  User: {
    async products(parent:TypeUser) {
      const products = await Product.findAll()
      return products.filter(el => el.user_id == parent.id)
    }
  },
  Product: {
    async user(parent:TypeProduct) {
      const user = await User.findOne({where:{id:parent.user_id}});
      return user
    }
  },
  Order: {
    async user(parent:TypeOrder) {
      const user = await User.findOne({where:{id:parent.user_id}});
      return user
    },
    async product(parent:TypeOrder) {
      const products = await Product.findAll()
      const order = products.filter(el => el.id == parent.products_id)
      return order[0]
    }
  },
  Mutation: {
    async deleteProduct(_:any,args:any) {
      const deletedProduct = await Product.findOne({where:{id:args.id}})
      await deletedProduct?.destroy()
      return deletedProduct
    }
  }
};

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

export { typeDefs, resolvers }