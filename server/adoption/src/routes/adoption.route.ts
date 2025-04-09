import express, { Request, Response } from 'express'
import {v2 as cloudinary} from 'cloudinary'
import { authenticate, authorize } from '../middlewares/authentication/user.authentication'
import { validatePost } from '../middlewares/validators/post.validator'
import { createPost, deletePost, getAllPost, getPostWithId,uploadImage } from '../controller/adoption.controller'
import { upload } from '../middlewares/multer.middleware'
import log from '../utils/logger'


const router = express.Router()

router.route('/createPost').post(authenticate, validatePost, createPost)
router.route('/getAllPosts').get(authenticate,getAllPost)
router.route('/getPostWithId/:id').get(authenticate,getPostWithId)
router.route('/deletePost/:id').delete(authenticate,deletePost)

router.route('/uploadImage').post(authenticate,upload.single('image'),uploadImage)
router.route('/deleteImage/:publicId').delete(authenticate,async (req: Request, res: Response): Promise<any> => {
    try {
        let {publicId } = req.params;
        publicId="pawpal/"+publicId
        log.info(publicId)
        const result = await cloudinary.uploader.destroy(publicId);

        if (result.result === 'ok') {
            res.status(200).json({ message: 'Image deleted successfully' });
        } else {
            res.status(400).json({ message: 'Failed to delete image' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})



export default router
