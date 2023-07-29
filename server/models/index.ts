import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
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