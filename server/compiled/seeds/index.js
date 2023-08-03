"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const userHelper_1 = require("./userHelper");
const productHelper_1 = require("./productHelper");
const associations_1 = require("../models/associations");
const productMethods_1 = require("../models/methods/productMethods");
dotenv_1.default.config();
const dbName = 'ZenithMarket';
const db = new sequelize_1.Sequelize(dbName, `${process.env.MYSQL_USERNAME}`, `${process.env.MYSQL_PASSWORD}`, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < 20; i++) {
        const user = {
            firstName: userHelper_1.firstName[i],
            lastName: userHelper_1.lastName[i],
            email: userHelper_1.email[i],
            password: userHelper_1.password[i],
            address: userHelper_1.address[i],
            contactNumber: userHelper_1.contactNumber[i]
        };
        const product1 = {
            name: productHelper_1.name[i],
            price: productHelper_1.price[i],
            description: productHelper_1.description[i],
            image: productHelper_1.image[i],
            quantityInStock: productHelper_1.quantityInStock[i]
        };
        const product2 = {
            name: productHelper_1.name[40 - i],
            price: productHelper_1.price[40 - i],
            description: productHelper_1.description[40 - i],
            image: productHelper_1.image[40 - i],
            quantityInStock: productHelper_1.quantityInStock[40 - i]
        };
        const newUser = yield User.create(user);
        yield (0, productMethods_1.createProductModel)(newUser.id, product1);
        yield (0, productMethods_1.createProductModel)(newUser.id, product2);
    }
});
(function authenticate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.sync({ force: true });
            yield db.authenticate();
            console.log('Connection has been established successfully. Starting population');
            seedDB();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
})().then(() => {
    seedDB().then(() => {
        console.log("Database population finished!");
        db.close();
    });
});
const { User, Product, Category, Order, OrderItem, Payment, Review } = (0, associations_1.initModels)(db);
