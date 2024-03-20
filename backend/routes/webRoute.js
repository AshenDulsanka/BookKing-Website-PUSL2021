import express from 'express'
import { verifyMail, resetPasswordLoad, resetPassword } from '../controllers/userController.js'
const userRoute = express()

userRoute.set('view engine', 'ejs')
userRoute.set('views', '../frontend/src/views')
userRoute.use(express.static('public'))

userRoute.get('/mailVerification', verifyMail)
userRoute.get('/resetPassword', resetPasswordLoad)
userRoute.post('/resetPassword', resetPassword)

export { userRoute }
