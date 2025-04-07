import { Request, Response } from "express";
import Post from "../models/post.model";
import log from "../utils/logger";


export const createPost=async(req:Request,res:Response):Promise<any>=>{
    const post=new Post(req.body)
    const newPost=await post.save()
    return res.status(200).json({postId:newPost._id})
}

