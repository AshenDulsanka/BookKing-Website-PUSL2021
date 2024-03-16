import express from 'express'
import { userSignUpValidation } from '../helpers/validation.js'
import { register } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', userSignUpValidation, register)

export { userRouter }
