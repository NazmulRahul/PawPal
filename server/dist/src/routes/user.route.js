"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_validator_1 = require("../middlewares/validators/user.validator");
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
router.route('/create').post(user_validator_1.validateUser, user_controller_1.createUser);
router.route('/login').post(user_controller_1.loginUser);
router.route('/logout').post(user_controller_1.logoutUser);
exports.default = router;
