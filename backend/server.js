import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { conn } from './config/dbCon.js'

const server = express()
server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(cors())
dotenv.config()

server.post('/userSignUp', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

console.log(conn.connect)

// error handling
server.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.message = err.message || 'Internal Server Error'
  res.status(err.statusCode).json({
    message: err.message
  })
})

server.listen(process.env.PORT || 8081)
