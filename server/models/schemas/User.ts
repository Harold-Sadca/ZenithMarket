import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyCountAssociationsMixin,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import type { Order } from './Order'
import type { Product } from './Product'
import type { Review } from './Review'

type UserAssociations = 'products' | 'orders' | 'reviews'

export class User extends Model<
  InferAttributes<User, {omit: UserAssociations}>,
  InferCreationAttributes<User, {omit: UserAssociations}>
> {
  declare id: CreationOptional<number>
  declare firstName: string | null
  declare lastName: string | null
  declare email: string | null
  declare password: string | null
  declare address: string | null
  declare contactNumber: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // User hasMany Product
  declare products?: NonAttribute<Product[]>
  declare getProducts: HasManyGetAssociationsMixin<Product>
  declare setProducts: HasManySetAssociationsMixin<Product, number>
  declare addProduct: HasManyAddAssociationMixin<Product, number>
  declare addProducts: HasManyAddAssociationsMixin<Product, number>
  declare createProduct: HasManyCreateAssociationMixin<Product>
  declare removeProduct: HasManyRemoveAssociationMixin<Product, number>
  declare removeProducts: HasManyRemoveAssociationsMixin<Product, number>
  declare hasProduct: HasManyHasAssociationMixin<Product, number>
  declare hasProducts: HasManyHasAssociationsMixin<Product, number>
  declare countProducts: HasManyCountAssociationsMixin
  
  // User hasMany Order
  declare orders?: NonAttribute<Order[]>
  declare getOrders: HasManyGetAssociationsMixin<Order>
  declare setOrders: HasManySetAssociationsMixin<Order, number>
  declare addOrder: HasManyAddAssociationMixin<Order, number>
  declare addOrders: HasManyAddAssociationsMixin<Order, number>
  declare createOrder: HasManyCreateAssociationMixin<Order>
  declare removeOrder: HasManyRemoveAssociationMixin<Order, number>
  declare removeOrders: HasManyRemoveAssociationsMixin<Order, number>
  declare hasOrder: HasManyHasAssociationMixin<Order, number>
  declare hasOrders: HasManyHasAssociationsMixin<Order, number>
  declare countOrders: HasManyCountAssociationsMixin
  
  // User hasMany Review
  declare reviews?: NonAttribute<Review[]>
  declare getReviews: HasManyGetAssociationsMixin<Review>
  declare setReviews: HasManySetAssociationsMixin<Review, number>
  declare addReview: HasManyAddAssociationMixin<Review, number>
  declare addReviews: HasManyAddAssociationsMixin<Review, number>
  declare createReview: HasManyCreateAssociationMixin<Review>
  declare removeReview: HasManyRemoveAssociationMixin<Review, number>
  declare removeReviews: HasManyRemoveAssociationsMixin<Review, number>
  declare hasReview: HasManyHasAssociationMixin<Review, number>
  declare hasReviews: HasManyHasAssociationsMixin<Review, number>
  declare countReviews: HasManyCountAssociationsMixin
  
  declare static associations: {
    products: Association<User, Product>,
    orders: Association<User, Order>,
    reviews: Association<User, Review>
  }

  static initModel(sequelize: Sequelize): typeof User {
    User.init({
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      contactNumber: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize
    })
    
    return User
  }
}