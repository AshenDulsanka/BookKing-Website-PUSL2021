import express from 'express'
import path from 'path'
import multer from 'multer'
import { fileURLToPath } from 'url'
import { isAuthorized } from '../middleware/auth.js'
import { addServiceValidation } from '../helpers/validation.js'
import { addService, updateService, deleteService, getHotels, getTours, getVehicles, getServices, getSingleService, getAllServices, getSpService } from '../controllers/serviceController.js'

const serviceRouter = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../frontend/public/uploads'))
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

const uploadMultipleFiles = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
  { name: 'image5', maxCount: 1 }
])

serviceRouter.post('/addService', uploadMultipleFiles, addServiceValidation, isAuthorized, addService)
serviceRouter.post('/updateService', isAuthorized, updateService)
serviceRouter.delete('/deleteService', isAuthorized, deleteService)
serviceRouter.get('/Hotels', getHotels)
serviceRouter.get('/Tours', getTours)
serviceRouter.get('/Vehicles', getVehicles)
serviceRouter.get('/services', isAuthorized, getServices)
serviceRouter.post('/singleService', getSingleService)
serviceRouter.get('/allServices', getAllServices)
serviceRouter.get('/service/:SID', isAuthorized, getSpService)

export { serviceRouter }
