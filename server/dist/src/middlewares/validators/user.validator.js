"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const user_schema_1 = require("../../schema/user.schema");
const logger_1 = __importDefault(require("../../utils/logger"));
const validateUser = (req, res, next) => {
    logger_1.default.info('userSchema validating');
    const { error } = user_schema_1.userSchema.validate(req.body, { abortEarly: false });
    if (error) {
        logger_1.default.error('User Schema validation failed');
        return res.status(400).json({
            status: "error",
            message: "user schema validation failed",
        });
    }
    next();
};
exports.validateUser = validateUser;
