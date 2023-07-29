import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initModels } from './associations';
dotenv.config();

const dbName = 'ZenithMarket';

const db = new Sequelize(
  dbName,
  `${process.env.MYSQL_USERNAME}`,
  `${process.env.MYSQL_PASSWORD}`,
  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  },
);

(async function authenticate() {
  try {
    await db.sync();
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const {
  User,
  Product,
  Category,
  Order,
  OrderItem,
  Payment,
  Review
} = initModels(db)

export {
  db,
  User,
  Product,
  Category,
  Order,
  OrderItem,
  Payment,
  Review
}