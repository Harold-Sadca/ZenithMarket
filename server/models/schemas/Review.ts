import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'
import { v4 as uuidv4 } from 'uuid';

export class Review extends Model<
  InferAttributes<Review>,
  InferCreationAttributes<Review>
> {
  declare id: CreationOptional<string>
  declare rating: number | null
  declare review: string | null
  declare date: Date | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof Review {
    Review.init({
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER
      },
      review: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.DATE
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },{
      hooks: {
        beforeValidate: async (review) => {
          review.id = uuidv4()
        }
      },
      sequelize,
    }
    )
    
    return Review
  }
}