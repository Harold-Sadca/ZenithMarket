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
exports.Review = exports.Payment = exports.OrderItem = exports.Order = exports.Category = exports.Product = exports.User = exports.db = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const associations_1 = require("./associations");
dotenv_1.default.config();
const dbName = 'ZenithMarket';
const db = new sequelize_1.Sequelize(dbName, `${process.env.MYSQL_USERNAME}`, `${process.env.MYSQL_PASSWORD}`, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});
exports.db = db;
(function authenticate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.sync();
            yield db.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
})();
const { User, Product, Category, Order, OrderItem, Payment, Review } = (0, associations_1.initModels)(db);
exports.User = User;
exports.Product = Product;
exports.Category = Category;
exports.Order = Order;
exports.OrderItem = OrderItem;
exports.Payment = Payment;
exports.Review = Review;
