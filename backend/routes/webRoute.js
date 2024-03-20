import express from 'express'
import { verifyMail, resetPassword } from '../controllers/userController.js'
const userRoute = express()

userRoute.set('view engine', 'ejs')
userRoute.set('views', './views')
userRoute.use(express.static('public'))

userRoute.get('/mailVerification', verifyMail)
userRoute.get('/resetPassword', resetPassword)

export { userRoute }
