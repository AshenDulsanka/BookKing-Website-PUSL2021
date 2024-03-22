import express from 'express'
import { serviceProviderSignUpValidation, logInValidation, forgetValidation, updateProfileValidation } from '../helpers/validation.js'
import { register, login, getServiceProvider, forgetPassword, updateProfile, deleteServiceProvider } from '../controllers/serviceProviderController.js'
import { isAuthorized } from '../middleware/auth.js'

const serviceProviderRouter = express.Router()

serviceProviderRouter.post('/spregister', serviceProviderSignUpValidation, register)
serviceProviderRouter.post('/splogin', logInValidation, login)

serviceProviderRouter.get('/getServiceProvider', isAuthorized, getServiceProvider)

serviceProviderRouter.post('/spforgetPassword', forgetValidation, forgetPassword)

serviceProviderRouter.post('/spupdateProfile', updateProfileValidation, isAuthorized, updateProfile)

serviceProviderRouter.delete('/deleteServiceProvider', isAuthorized, deleteServiceProvider)

export { serviceProviderRouter }
