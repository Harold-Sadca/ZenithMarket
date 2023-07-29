"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
    static initModel(sequelize) {
        Product.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: sequelize_1.DataTypes.STRING
            },
            price: {
                type: sequelize_1.DataTypes.STRING
            },
            description: {
                type: sequelize_1.DataTypes.STRING
            },
            image: {
                type: sequelize_1.DataTypes.STRING
            },
            quantityInStock: {
                type: sequelize_1.DataTypes.INTEGER
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE
            }
        }, {
            sequelize
        });
        return Product;
    }
}
exports.Product = Product;
