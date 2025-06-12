import express from 'express'
import multer from "multer"
import { authenticate,authorize } from '../middlewares/authentication/user.authentication';
const Router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ 
    storage ,
    limits: { fileSize: 15 * 1024 * 1024 },
});
import {
    createBlog,
    updateBlog,
    getBlogs,
    deleteBlog,
    uploadImages,
    getBlogsOfTypes,
    toggleFeature,
    getFeaturedBlogs
} from '../controller/blogs.controller'

Router.route('/')
    .get(authenticate,getBlogs)
    .post(authenticate,createBlog)
    .delete(authenticate,deleteBlog)
    .patch(authenticate,updateBlog);

Router.route('/image').post(upload.array('images'), uploadImages).delete();
Router.route('/type').get(authenticate,getBlogsOfTypes);
Router.route('/feature').patch(authenticate,toggleFeature).get(authenticate,getFeaturedBlogs)

export default Router