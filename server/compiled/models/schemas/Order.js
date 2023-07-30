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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
class Order extends sequelize_1.Model {
    static initModel(sequelize) {
        Order.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            date: {
                type: sequelize_1.DataTypes.DATE
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
            hooks: {
                beforeValidate: (order) => __awaiter(this, void 0, void 0, function* () {
                    order.id = (0, uuid_1.v4)();
                })
            },
            sequelize,
        });
        return Order;
    }
}
exports.Order = Order;
