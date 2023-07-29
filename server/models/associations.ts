import { Review } from './schemas/Review';
import { Payment } from './schemas/Payment';
import { OrderItem } from './schemas/OderItem';
import { Order } from './schemas/Order';
import { Category } from './schemas/Category';
import { Product } from './schemas/Product';
import { User } from './schemas/User';
import type { Sequelize, Model } from 'sequelize'

export {
  User,
  Product,
  Category,
  Order,
  OrderItem,
  Payment,
  Review
}

export function initModels(sequelize: Sequelize) {
  User.initModel(sequelize)
  Product.initModel(sequelize)
  Category.initModel(sequelize)
  Order.initModel(sequelize)
  OrderItem.initModel(sequelize)
  Payment.initModel(sequelize)
  Review.initModel(sequelize)

  User.hasMany(Product, {
    as: 'products',
    foreignKey: 'user_id'
  })
  User.hasMany(Order, {
    as: 'orders',
    foreignKey: 'user_id'
  })
  User.hasMany(Review, {
    as: 'reviews',
    foreignKey: 'user_id'
  })
  Product.belongsTo(Category, {
    as: 'category',
    foreignKey: 'categories_id'
  })
  Product.hasMany(Review, {
    as: 'reviews',
    foreignKey: 'products_id'
  })
  Product.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
  })
  Order.belongsTo(Product, {
    as: 'product',
    foreignKey: 'products_id'
  })
  Order.belongsTo(User, {
    as: 'user',
    foreignKey: 'user_id'
  })

  return {
    User,
    Product,
    Category,
    Order,
    OrderItem,
    Payment,
    Review
  }
}
