import express from 'express'
import { userSignUpValidation, logInValidation, forgetValidation, updateProfileValidation } from '../helpers/validation.js'
import { register, login, getUser, forgetPassword, updateProfile, deleteUser } from '../controllers/userController.js'
import { isAuthorized } from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post('/register', userSignUpValidation, register)
userRouter.post('/login', logInValidation, login)

userRouter.get('/getUser', isAuthorized, getUser)

userRouter.post('/forgetPassword', forgetValidation, forgetPassword)

userRouter.post('/updateProfile', updateProfileValidation, isAuthorized, updateProfile)

userRouter.delete('/deleteUser', isAuthorized, deleteUser)

export { userRouter }
