"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.UserRouter = (0, express_1.default)();
exports.UserRouter.post("/signup", (req, res) => {
    res.json({
        message: "Signup",
    });
});
exports.UserRouter.post("/signin", (req, res) => {
    res.json({
        message: "Signin",
    });
});
