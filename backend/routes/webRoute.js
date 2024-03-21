import express from 'express'
import { verifyMail, resetPasswordLoad, resetPassword } from '../controllers/userController.js'
const wenRoute = express()

wenRoute.set('view engine', 'ejs')
wenRoute.set('views', '../frontend/src/views')
wenRoute.use(express.static('public'))

wenRoute.get('/mailVerification', verifyMail)
wenRoute.get('/resetPassword', resetPasswordLoad)
wenRoute.post('/resetPassword', resetPassword)

export { wenRoute }
