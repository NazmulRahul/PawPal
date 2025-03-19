import { Request, Response } from "express";
import User from "../models/user.model";
import config from 'config'
import log from "../utils/logger";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import { passwordHashing } from "../utils/passwordHashing";
import generateToken from "../utils/tokenGenerator";


export const createUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body)
        const ChkUser = await User.findOne({ email: req.body.email })
        if (ChkUser) return res.status(400).json('user already exists')
        const salt = await bcrypt.genSalt(10)
        user.password = await passwordHashing(user.password)

        const newUser = await user.save()
        const token = generateToken(user.email)

        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(201).json({
            _id: newUser._id,
            username: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        });
    } catch (error) {
        res.status(500).json({ message: "internal server error!", error })
    }
}
