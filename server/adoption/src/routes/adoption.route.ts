import express, { Request, Response } from 'express'

import { authenticate, authorize } from '../middlewares/authentication/user.authentication'
import { validatePost } from '../middlewares/validators/post.validator'
import { createPost } from '../controller/adoption.controller'

const router = express.Router()

router.route('/createpost').post(validatePost,authenticate,createPost)

export default router
