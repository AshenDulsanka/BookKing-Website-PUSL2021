import express from 'express'
import { verifyMail, resetPasswordLoad, resetPassword } from '../controllers/userController.js'
import { SPverifyMail, SPresetPasswordLoad, SPresetPassword } from '../controllers/serviceProviderController.js'
const webRoute = express()

webRoute.set('view engine', 'ejs')
webRoute.set('views', '../frontend/src/views')
webRoute.use(express.static('public'))

webRoute.get('/mailVerification', verifyMail)
webRoute.get('/SPmailverification', SPverifyMail)
webRoute.get('/resetPassword', resetPasswordLoad)
webRoute.get('/SPresetPasswordLoad', SPresetPasswordLoad)
webRoute.post('/resetPassword', resetPassword, SPresetPassword)

export { webRoute }
