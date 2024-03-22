import express from 'express'
import path from 'path'
import multer from 'multer'
import { fileURLToPath } from 'url'
import { serviceProviderSignUpValidation, logInValidation, forgetValidation, updateProfileValidation, addServiceValidation } from '../helpers/validation.js'
import { register, login, getServiceProvider, forgetPassword, updateProfile, deleteServiceProvider, addService, updateService, deleteService } from '../controllers/serviceProviderController.js'
import { isAuthorized } from '../middleware/auth.js'

const serviceProviderRouter = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../assets/uploads'))
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname
    cb(null, name)
  }
})

const fileFilter = (req, file, cb) => {
  (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    ? cb(null, true)
    : cb(null, false)
}

const upload = multer({
  storage,
  fileFilter
})

serviceProviderRouter.post('/spregister', serviceProviderSignUpValidation, register)
serviceProviderRouter.post('/splogin', logInValidation, login)

serviceProviderRouter.get('/getServiceProvider', isAuthorized, getServiceProvider)

serviceProviderRouter.post('/spforgetPassword', forgetValidation, forgetPassword)

serviceProviderRouter.post('/spupdateProfile', updateProfileValidation, isAuthorized, updateProfile)

serviceProviderRouter.delete('/deleteServiceProvider', isAuthorized, deleteServiceProvider)

serviceProviderRouter.post('/addService', upload.single('image'), addServiceValidation, isAuthorized, addService)
serviceProviderRouter.post('/updateService', isAuthorized, updateService)
serviceProviderRouter.delete('/deleteService', isAuthorized, deleteService)

export { serviceProviderRouter }
