import express,{Request,Response} from 'express'
import { validateUser } from '../middlewares/validators/user.validator'
import { createUser,loginUser,logoutUser } from '../controller/user.controller'



const router=express.Router()

router.route('/create').post(validateUser,createUser)

router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)

export default router
