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
exports.createUserController = void 0;
const userMethods_1 = require("../models/methods/userMethods");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password, address, contactNumber } = req.body;
        if (firstName && lastName && email && password && address && contactNumber) {
            const user = { firstName, lastName, email, password, address, contactNumber };
            const newUser = (0, userMethods_1.createUserModel)(user);
            res.status(201).send(newUser);
        }
        else {
            res.status(400).json({ error: 'Missing Information' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create an account' });
    }
});
exports.createUserController = createUserController;
