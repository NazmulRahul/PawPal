import express, { Request, Response } from 'express'
import { validateLogin, validateUser } from '../middlewares/validators/user.validator'
import { createTransporter, createUser, loginUser, logoutUser, resetPassword, uploadProfilePicture } from '../controller/user.controller'
import { authenticate, authorize } from '../middlewares/authentication/user.authentication'
import multer from "multer"
const storage = multer.memoryStorage();
const upload = multer({ storage });


const router = express.Router()

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Creates a new user
 *     description: This endpoint creates a new user in the system.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *               email:
 *                  type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */

router.route('/create').post(validateUser, createUser)
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in 
 *     description: This endpoint log users into the system.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Log in successful
 *       400:
 *         description: Invalid input/ Password mismatched
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
router.route('/login').post(validateLogin, loginUser)
router.route('/logout').post(logoutUser)

/**
 * @swagger
 * /createTransporter:
 *   post:
 *     summary: Create Transporter  
 *     description: This endpoint converts a regular user email to a transporter. Only admin users can access this.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                  type: string
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: Transporter Successfully created 
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
router.route('/createTransporter').post(authenticate, authorize, createTransporter)
router.route('/resetPassword/:userId').put(authenticate, resetPassword)
router.route('/profilePicture/:userId').post(upload.array('image'), authenticate, uploadProfilePicture).delete()

export default router
