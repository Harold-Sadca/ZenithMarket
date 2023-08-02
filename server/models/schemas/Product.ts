import {
  Association,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
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
import { v4 as uuidv4 } from 'uuid';
import type { Category } from './Category'
import type { Review } from './Review'
import type { User } from './User'

type ProductAssociations = 'category' | 'reviews' | 'user'

export class Product extends Model<
  InferAttributes<Product, {omit: ProductAssociations}>,
  InferCreationAttributes<Product, {omit: ProductAssociations}>
> {
  declare id: CreationOptional<string>
  declare name: string | null
  declare price: number | null
  declare description: string | null
  declare image: string | null
  declare quantityInStock: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>

  // Product belongsTo Category
  declare category?: NonAttribute<Category>
  declare getCategory: BelongsToGetAssociationMixin<Category>
  declare setCategory: BelongsToSetAssociationMixin<Category, number>
  declare createCategory: BelongsToCreateAssociationMixin<Category>
  
  // Product hasMany Review
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

  // Product belongsTo User
  declare user?: NonAttribute<User>
  declare getUser: BelongsToGetAssociationMixin<User>
  declare setUser: BelongsToSetAssociationMixin<User, string>
  declare createUser: BelongsToCreateAssociationMixin<User>
  
  declare static associations: {
    category: Association<Product, Category>,
    reviews: Association<Product, Review>
  }

  static initModel(sequelize: Sequelize): typeof Product {
    Product.init({
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      quantityInStock: {
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
        beforeValidate: async (product) => {
          product.id = uuidv4()
        }
      },
      sequelize,
    }
    )
    
    return Product
  }
}