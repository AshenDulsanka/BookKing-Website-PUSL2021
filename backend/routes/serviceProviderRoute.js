import express from 'express'
import { serviceProviderSignUpValidation, logInValidation, forgetValidation, updateProfileValidation } from '../helpers/validation.js'
import { register, login, getUser, forgetPassword, updateProfile } from '../controllers/serviceProviderController.js'
import { isAuthorized } from '../middleware/auth.js'

const serviceProviderRouter = express.Router()

serviceProviderRouter.post('/spregister', serviceProviderSignUpValidation, register)
serviceProviderRouter.post('/splogin', logInValidation, login)

serviceProviderRouter.get('/getServiceProvider', isAuthorized, getUser)

serviceProviderRouter.post('/forgetPassword', forgetValidation, forgetPassword)

serviceProviderRouter.post('/updateProfile', updateProfileValidation, isAuthorized, updateProfile)

export { serviceProviderRouter }
