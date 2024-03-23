import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import { conn } from '../config/dbCon.js'

const { JWTSECRET } = process.env

const db = conn

const login = (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  db.query(
    `
      SELECT * FROM admin WHERE Username = ${db.escape(req.body.username)};
    `,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          msg: err
        })
      }

      if (!result.length) {
        return res.status(401).send({
          msg: 'Username or password is incorrect!'
        })
      }

      if (req.body.password !== result[0].Password) {
        return res.status(401).send({ msg: 'Username or password is incorrect!' })
      }

      // Password matches
      const token = jwt.sign({ AID: result[0].AID }, JWTSECRET, { expiresIn: '1h' })

      // Update last login time
      db.query(
        `UPDATE admin SET lastLogin = now() WHERE AID = '${result[0].AID}'`
      )

      return res.status(200).send({
        msg: 'Logged in!',
        token,
        admin: result[0]
      })
    }
  )
}

export { login }
