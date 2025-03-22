import express, { Request, Response } from 'express'
import { validateLogin, validateUser } from '../middlewares/validators/user.validator'
import { createTransporter, createUser, loginUser, logoutUser } from '../controller/user.controller'
import { authenticate, authorize } from '../middlewares/authentication/user.authentication'



const router = express.Router()

router.route('/create').post(validateUser, createUser)
router.route('/login').post(validateLogin, loginUser)
router.route('/logout').post(logoutUser)
router.route('/createTransporter').post(authenticate, authorize, createTransporter)

export default router
