"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.Review = exports.Payment = exports.OrderItem = exports.Order = exports.Category = exports.Product = exports.User = void 0;
const Review_1 = require("./schemas/Review");
Object.defineProperty(exports, "Review", { enumerable: true, get: function () { return Review_1.Review; } });
const Payment_1 = require("./schemas/Payment");
Object.defineProperty(exports, "Payment", { enumerable: true, get: function () { return Payment_1.Payment; } });
const OderItem_1 = require("./schemas/OderItem");
Object.defineProperty(exports, "OrderItem", { enumerable: true, get: function () { return OderItem_1.OrderItem; } });
const Order_1 = require("./schemas/Order");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return Order_1.Order; } });
const Category_1 = require("./schemas/Category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return Category_1.Category; } });
const Product_1 = require("./schemas/Product");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return Product_1.Product; } });
const User_1 = require("./schemas/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
function initModels(sequelize) {
    User_1.User.initModel(sequelize);
    Product_1.Product.initModel(sequelize);
    Category_1.Category.initModel(sequelize);
    Order_1.Order.initModel(sequelize);
    OderItem_1.OrderItem.initModel(sequelize);
    Payment_1.Payment.initModel(sequelize);
    Review_1.Review.initModel(sequelize);
    User_1.User.hasMany(Product_1.Product, {
        as: 'products',
        foreignKey: 'user_id'
    });
    User_1.User.hasMany(Order_1.Order, {
        as: 'orders',
        foreignKey: 'user_id'
    });
    User_1.User.hasMany(Review_1.Review, {
        as: 'reviews',
        foreignKey: 'user_id'
    });
    Product_1.Product.belongsTo(Category_1.Category, {
        as: 'category',
        foreignKey: 'categories_id'
    });
    Product_1.Product.hasMany(Review_1.Review, {
        as: 'reviews',
        foreignKey: 'products_id'
    });
    return {
        User: User_1.User,
        Product: Product_1.Product,
        Category: Category_1.Category,
        Order: Order_1.Order,
        OrderItem: OderItem_1.OrderItem,
        Payment: Payment_1.Payment,
        Review: Review_1.Review
    };
}
exports.initModels = initModels;
