import express from 'express'
const Router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
import {
    createBlog,
    updateBlog,
    getBlogs,
    deleteBlog,
    uploadImages,
    getBlogsOfTypes,
} from '../controller/blogs.controller'

Router.route('/')
    .get(getBlogs)
    .post(createBlog)
    .delete(deleteBlog)
    .patch(updateBlog);

Router.route('/image').post(upload.array('images'), uploadImages).delete();
Router.route('/type').get(getBlogsOfTypes);

export default Router