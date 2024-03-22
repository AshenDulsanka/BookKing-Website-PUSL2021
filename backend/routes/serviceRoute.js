import express from 'express'
import path from 'path'
import multer from 'multer'
import { fileURLToPath } from 'url'
import { isAuthorized } from '../middleware/auth.js'
import { addServiceValidation } from '../helpers/validation.js'
import { addService, updateService, deleteService, getHotels } from '../controllers/serviceController.js'

const serviceRouter = express.Router()

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

serviceRouter.post('/addService', upload.single('image'), addServiceValidation, isAuthorized, addService)
serviceRouter.post('/updateService', isAuthorized, updateService)
serviceRouter.delete('/deleteService', isAuthorized, deleteService)
serviceRouter.get('/Hotels', getHotels)

export { serviceRouter }
