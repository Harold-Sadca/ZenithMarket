import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { firstName, lastName, email, password, address, contactNumber } from './userHelper';
import { initModels } from '../models/associations';
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

const seedDB = async() => {
  for(let i = 0; i < 20; i++) {
    const user = {
      firstName:firstName[i],
      lastName:lastName[i],
      email:email[i],
      password:password[i],
      address:address[i],
      contactNumber:contactNumber[i]
    }
    await User.create(user)
  }
}

(async function authenticate() {
  try {
    await db.sync({ force: true });
    await db.authenticate();
    console.log('Connection has been established successfully. Starting population');
    seedDB()
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})().then(() => {
  seedDB().then(() => {
    console.log("Database population finished!")
    db.close()
  })
})

const {
  User,
  Product,
  Category,
  Order,
  OrderItem,
  Payment,
  Review
} = initModels(db)