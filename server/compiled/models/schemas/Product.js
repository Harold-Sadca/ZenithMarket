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
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
class Product extends sequelize_1.Model {
    static initModel(sequelize) {
        Product.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: sequelize_1.DataTypes.STRING
            },
            price: {
                type: sequelize_1.DataTypes.NUMBER
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
            hooks: {
                beforeValidate: (product) => __awaiter(this, void 0, void 0, function* () {
                    product.id = (0, uuid_1.v4)();
                })
            },
            sequelize,
        });
        return Product;
    }
}
exports.Product = Product;
