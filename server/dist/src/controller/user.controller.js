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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.loginUser = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const passwordHashing_1 = require("../utils/passwordHashing");
const tokenGenerator_1 = __importDefault(require("../utils/tokenGenerator"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_model_1.default(req.body);
        const ChkUser = yield user_model_1.default.findOne({ email: req.body.email });
        if (ChkUser)
            return res.status(400).json('user already exists');
        user.password = yield (0, passwordHashing_1.passwordHashing)(user.password);
        const newUser = yield user.save();
        const token = (0, tokenGenerator_1.default)(user.email);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        return res.status(201).json({
            _id: newUser._id,
            username: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "internal server error!", error });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userExist = yield user_model_1.default.findOne({ email });
    if (userExist) {
        const isPasswordValid = yield bcrypt_1.default.compare(password, userExist.password);
        if (isPasswordValid) {
            const token = (0, tokenGenerator_1.default)(email);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
            });
            return res.status(201).json({
                email: userExist.email,
                username: userExist.name,
                isAdmin: userExist.isAdmin,
            });
        }
        else {
            return res.status(400).json("password mismatched");
        }
    }
    else {
        return res.status(404).json({ error: "user not found!" });
    }
});
exports.loginUser = loginUser;
const logoutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    return res.status(200).json({ message: "logout successful" });
});
exports.logoutUser = logoutUser;
