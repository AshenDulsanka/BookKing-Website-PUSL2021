import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const server = express()
server.use(morgan('combined'))
server.use(bodyParser.json())
server.use(cors())

server.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

server.listen(process.env.PORT || 8081)
