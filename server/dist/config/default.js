"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    PORT: 3000,
    dbUri: process.env.DB_URI,
    jwtSecret: process.env.JWT_SECRET,
    saltValue: process.env.SALT_VALUE,
    expiresIn: process.env.SALT_VALUE,
    dbUri2: process.env.DB_URI2,
};
