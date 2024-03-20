import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { conn } from './config/dbCon.js'

import { userRouter } from './routes/userRoute.js'
import { userRoute } from './routes/webRoute.js'

const server = express()

server.use(express.json())
server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
dotenv.config()

console.log(conn.connect)

server.use('/api', userRouter)
server.use('/', userRoute)

// error handling
server.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.message = err.message || 'Internal Server Error'
  res.status(err.statusCode).json({
    message: err.message
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
