import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  NonAttribute,
  Sequelize
} from 'sequelize'
import { v4 as uuidv4 } from 'uuid';
import type { Product } from './Product'
import type { User } from './User'

type OrderAssociations = 'product' | 'user'

export class Order extends Model<
  InferAttributes<Order, {omit: OrderAssociations}>,
  InferCreationAttributes<Order, {omit: OrderAssociations}>
> {
  declare id: CreationOptional<string>
  declare date: CreationOptional<Date>
  declare totalAmount: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Order belongsTo Product
  declare product?: NonAttribute<Product>
  declare getProduct: BelongsToGetAssociationMixin<Product>
  declare setProduct: BelongsToSetAssociationMixin<Product, string>
  declare createProduct: BelongsToCreateAssociationMixin<Product>
  
  // Order belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, string>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  declare static associations: {
    product: Association<Order, Product>,
    user: Association<Order, User>
  }

  static initModel(sequelize: Sequelize): typeof Order {
    Order.init({
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE
      },
      totalAmount: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },{
      hooks: {
        beforeValidate: async (order) => {
          order.id = uuidv4()
        }
      },
      sequelize,
    }
    )
    
    return Order
  }
}