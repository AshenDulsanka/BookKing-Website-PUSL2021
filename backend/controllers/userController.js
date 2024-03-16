import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import { conn } from '../config/dbCon.js'

const db = conn

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
              `INSERT INTO users (name, email, password, phoneNumber, address) VALUES ('${req.body.name}', ${db.escape(
                req.body.email
              )}, ${db.escape(hash)}, '${req.body.phoneNo}', '${req.body.address}');`,
              (err, result) => {
                if (err) {
                  return res.status(400).send({
                    msg: err
                  })
                }
                return res.status(500).send({
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
