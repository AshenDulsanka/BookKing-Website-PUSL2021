import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const server = express()
server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(cors())

server.post('/userSignUp', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

server.listen(process.env.PORT || 8081)
