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
exports.createOrderModel = void 0;
const index_1 = require("../index");
const index_2 = require("../index");
const createOrderModel = (userId, productId, totalAmount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = yield index_1.Order.create({ totalAmount });
        const product = yield index_2.Product.findOne({ where: { id: productId } });
        const productStock = product === null || product === void 0 ? void 0 : product.quantityInStock;
        product.quantityInStock = productStock - totalAmount;
        yield (product === null || product === void 0 ? void 0 : product.save());
        newOrder.setProduct(productId);
        newOrder.setUser(userId);
        console.log("Order", newOrder);
        yield newOrder.save();
        return newOrder;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createOrderModel = createOrderModel;
