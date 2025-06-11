import express from 'express'
import multer from "multer"
import { authenticate,authorize } from '../middlewares/authentication/user.authentication';
const Router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ 
    storage ,
    limits: { fileSize: 10 * 1024 * 1024 },
});
import {
    createBlog,
    updateBlog,
    getBlogs,
    deleteBlog,
    uploadImages,
    getBlogsOfTypes,
} from '../controller/blogs.controller'

Router.route('/')
    .get(authenticate,getBlogs)
    .post(authenticate,createBlog)
    .delete(authenticate,deleteBlog)
    .patch(authenticate,updateBlog);

Router.route('/image').post(upload.array('images'), uploadImages).delete();
Router.route('/type').get(getBlogsOfTypes);

export default Router