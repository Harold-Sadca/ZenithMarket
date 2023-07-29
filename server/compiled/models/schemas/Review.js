"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const sequelize_1 = require("sequelize");
class Review extends sequelize_1.Model {
    static initModel(sequelize) {
        Review.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            rating: {
                type: sequelize_1.DataTypes.INTEGER
            },
            review: {
                type: sequelize_1.DataTypes.STRING
            },
            date: {
                type: sequelize_1.DataTypes.DATEONLY
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
        return Review;
    }
}
exports.Review = Review;
