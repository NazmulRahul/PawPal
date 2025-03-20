import { Request, Response } from "express";
import User from "../models/user.model";

import bcrypt from 'bcrypt'
import { passwordHashing } from "../utils/passwordHashing";
import generateToken from "../utils/tokenGenerator";


export const createUser = async (req: Request, res: Response):Promise<any> => {
    try {
        const user = new User(req.body)
        const ChkUser = await User.findOne({ email: req.body.email })
        if (ChkUser) return res.status(400).json('user already exists')
        user.password = await passwordHashing(user.password)

        const newUser = await user.save()
        const token = generateToken(user.email)

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
    } catch (error) {
        return res.status(500).json({ message: "internal server error!", error })
    }
}

export const loginUser = async (req: Request, res: Response):Promise<any> => {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        const isPasswordValid = await bcrypt.compare(
            password,
            userExist.password
        );
        if (isPasswordValid) {
            const token = generateToken(email);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
            });
            return res.status(201).json({
                email: userExist.email,
                username: userExist.name,
                isAdmin: userExist.isAdmin,
            });
        } else {
            return res.status(400).json("password mismatched");
        }
    } else {
        return res.status(404).json({ error: "user not found!" })
    }
};

export const logoutUser = async (req: Request, res: Response):Promise<any> => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    return res.status(200).json({ message: "logout successful" });
};

