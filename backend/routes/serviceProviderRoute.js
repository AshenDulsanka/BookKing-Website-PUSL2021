import express from 'express'
import { serviceProviderSignUpValidation, logInValidation, forgetValidation, updateProfileValidation } from '../helpers/validation.js'
import { register, login, getUser, forgetPassword, updateProfile } from '../controllers/serviceProviderController.js'
import { isAuthorized } from '../middleware/auth.js'

const serviceProviderRouter = express.Router()

serviceProviderRouter.post('/register', serviceProviderSignUpValidation, register)
serviceProviderRouter.post('/login', logInValidation, login)

serviceProviderRouter.get('/getUser', isAuthorized, getUser)

serviceProviderRouter.post('/forgetPassword', forgetValidation, forgetPassword)

serviceProviderRouter.post('/updateProfile', updateProfileValidation, isAuthorized, updateProfile)

export { serviceProviderRouter }
