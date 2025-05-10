import Comment from '../models/comment.model'
import { Request, Response } from "express";
import log from "../utils/logger";
import mongoose from "mongoose";
import User from '../models/user.model'

export const loadComments = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;

        const comments = await Comment.find({ postId:id })
            .populate('userId', 'name')  // populate commenter info
            .sort({ createdAt: 1 });

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error loading comments:', error);
        res.status(500).json({ error: 'Failed to load comments' });
    }
};

export const saveComment = async (req: Request, res: Response): Promise<any> => {
    try {
        const comment = new Comment(req.body)
        await comment.save()
        res.status(200).json({ msg: 'comment saved' })

    } catch (error) {
        log.error('failed to save comment')
        res.status(500).json({ error: error })
    }
}

export const deleteComment=async (req: Request, res: Response): Promise<any> => {
    try{
        const {commentId}=req.params
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if(!deletedComment){
            res.status(404).json({error:'comment not found'})
        }
        res.status(200).json({msg:'comment deleted'})
    }catch(error){
        res.status(500).json({errro:'server error'})
    }
}