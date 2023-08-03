import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { firstName, lastName, email, password, address, contactNumber } from './userHelper';
import { name, price, description, image, quantityInStock } from './productHelper';
import { initModels } from '../models/associations';
import { createProductModel } from '../models/methods/productMethods';
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
    const product1 = {
      name:name[i],
      price:price[i],
      description:description[i],
      image: image[i],
      quantityInStock: quantityInStock[i]
    }
    const product2 = {
      name:name[40-i],
      price:price[40-i],
      description:description[40-i],
      image: image[40-i],
      quantityInStock: quantityInStock[40-i]
    }
    const newUser = await User.create(user)
    await createProductModel(newUser.id,product1)
    await createProductModel(newUser.id,product2)
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