"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const userRouter = (0, express_1.Router)();
userRouter.post('/new-user', userControllers_1.createUserController);
exports.default = userRouter;
