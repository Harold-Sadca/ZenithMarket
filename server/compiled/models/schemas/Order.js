"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
    static initModel(sequelize) {
        Order.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            date: {
                type: sequelize_1.DataTypes.DATEONLY
            },
            totalAmount: {
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
        return Order;
    }
}
exports.Order = Order;
