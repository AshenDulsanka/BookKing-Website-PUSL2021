import express from 'express'
import { verifyMail, resetPasswordLoad, resetPassword } from '../controllers/userController.js'
const webRoute = express()

webRoute.set('view engine', 'ejs')
webRoute.set('views', '../frontend/src/views')
webRoute.use(express.static('public'))

webRoute.get('/mailVerification', verifyMail)
webRoute.get('/resetPassword', resetPasswordLoad)
webRoute.post('/resetPassword', resetPassword)

export { webRoute }
