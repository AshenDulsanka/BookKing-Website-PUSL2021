import express from 'express'
import { login, getUsers, getServiceProviders, getServices } from '../controllers/adminController.js'

const adminRouter = express.Router()

adminRouter.post('/admin', login)
adminRouter.get('/users', getUsers)
adminRouter.get('/serviceProviders', getServiceProviders)
adminRouter.get('/adservices', getServices)

export { adminRouter }
