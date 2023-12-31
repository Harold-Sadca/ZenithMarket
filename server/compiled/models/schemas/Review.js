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
exports.Review = void 0;
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
class Review extends sequelize_1.Model {
    static initModel(sequelize) {
        Review.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            rating: {
                type: sequelize_1.DataTypes.INTEGER
            },
            review: {
                type: sequelize_1.DataTypes.STRING
            },
            date: {
                type: sequelize_1.DataTypes.DATE
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE
            }
        }, {
            hooks: {
                beforeValidate: (review) => __awaiter(this, void 0, void 0, function* () {
                    review.id = (0, uuid_1.v4)();
                })
            },
            sequelize,
        });
        return Review;
    }
}
exports.Review = Review;
