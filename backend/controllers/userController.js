import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import random from 'randomstring'
import { sendMail } from '../helpers/sendMail.js'
import { conn } from '../config/dbCon.js'

const db = conn
const randomToken = random.generate()

const register = (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  db.query(
    `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(req.body.email)})`,
    (err, result) => {
      if (err) {
        return res.status(500).send({
          msg: 'Database error'
        })
      }
      if (result && result.length) {
        return res.status(409).send({
          msg: 'This user is already in use!'
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(400).send({
              msg: err
            })
          } else {
            db.query(
              `INSERT INTO users (name, email, password, phoneNumber, address, token) VALUES ('${req.body.name}', ${db.escape(
                req.body.email
              )}, ${db.escape(hash)}, '${req.body.phoneNo}', '${req.body.address}', '${randomToken}');`,
              (err, result) => {
                if (err) {
                  return res.status(400).send({
                    msg: err
                  })
                }
                const mailSubject = 'Mail verification'
                // eslint-disable-next-line no-multi-str
                const content = '<p>Hi ' + req.body.name + ', \
                Please verify your email by clicking on the <a href="http://localhost:8081/mailVerification?token=' + randomToken + '">link.</a>'
                sendMail(req.body.email, mailSubject, content)
                return res.status(200).send({
                  msg: 'The user has been registered successfully!'
                })
              }
            )
          }
        })
      }
    }
  )
}

export { register }
