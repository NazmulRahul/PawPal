import express,{Request,Response} from 'express'
import { validateUser } from '../middlewares/validators/user.validator'
import { createUser } from '../controller/user.controller'



const router=express.Router()

router.route('/create').post(validateUser,createUser)

export default router