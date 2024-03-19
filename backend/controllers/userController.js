import { validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import random from 'randomstring'
import jwt from 'jsonwebtoken'
import { sendMail } from '../helpers/sendMail.js'
import { conn } from '../config/dbCon.js'

const { JWTSECRET } = process.env

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
                const mailSubject = 'BookKing Account Verification'
                // eslint-disable-next-line no-multi-str
                const content = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
          text-align: center;
        }
        p {
          margin-bottom: 20px;
        }
        a {
          color: white;
          text-decoration: none;
        }
        .button {
          display: inline-block;
          background-color: grey;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hi ${req.body.name},</h1>
        <p>Thank you for registering with our service! To complete your registration and access all features, please verify your email address by clicking on the button.</p>
        <p><a class="button" href="http://localhost:8081/mailVerification?token=${randomToken}">Verify Email</a></p>
        <p>If you did not register for this account, please ignore this email.</p>
        <p>Thank you,<br>BookKing</p>
      </div>
    </body>
  </html>
`
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

const verifyMail = (req, res) => {
  const token = req.query.token

  db.query('SELECT * FROM users WHERE token=? limit 1', token, function (error, result, fields) {
    if (error) {
      console.log(error.message)
    }

    if (result.length > 0) {
      db.query(`
        UPDATE users SET token = null, isVerified = 1 WHERE UID = '${result[0].UID}'
      `)
      return res.render('mailVerification', { message: 'Mail Verified Successfully! You can now login!' })
    } else {
      return res.render('404')
    }
  })
}

const login = (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
}

export { register, verifyMail, login }
