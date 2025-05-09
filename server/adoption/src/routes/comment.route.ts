import express, { Request, Response } from 'express'
import { authenticate, authorize } from '../middlewares/authentication/user.authentication'
import log from '../utils/logger'
import { deleteComment, loadComments, saveComment } from '../controller/comment.controller'

const router = express.Router()

router.route('/saveComment').post(authenticate,saveComment)
router.route('/loadComments/:id').get(authenticate,loadComments)
router.route('/deleteComment/:id').delete(authenticate,deleteComment)