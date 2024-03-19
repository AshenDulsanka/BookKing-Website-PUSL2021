import express from 'express'
import { userSignUpValidation, logInValidation } from '../helpers/validation.js'
import { register, login } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', userSignUpValidation, register)
userRouter.post('/login', logInValidation, login)

export { userRouter }
