import express from 'express'
import { login } from '../controllers/adminController.js'

const adminRouter = express.Router()

adminRouter.post('/admin', login)

export { adminRouter }
