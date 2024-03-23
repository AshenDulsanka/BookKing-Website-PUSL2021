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
        a.button {
          display: inline-block;
          margin: 0 auto; 
          background-color: grey;
          color: white; 
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          text-align: center; 
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

  db.query(
    `
      SELECT * FROM users WHERE email = ${db.escape(req.body.email)};
    `,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          msg: err
        })
      }

      if (!result.length) {
        return res.status(401).send({
          msg: 'Email or password is incorrect!'
        })
      }

      // debugging to see if the password is being retrieved from the database
      // console.log('Password from Database:', result[0].password)

      bcrypt.compare(
        req.body.password,
        result[0].password,
        (bErr, bResult) => {
          if (bErr) {
            return res.status(400).send({
              msg: bErr
            })
          }

          if (bResult) {
            // console.log('JWT Key is, ' + JWTSECRET)
            const token = jwt.sign({ UID: result[0].UID }, JWTSECRET, { expiresIn: '1h' })
            db.query(
              `UPDATE users SET lastLogin = now() WHERE UID = '${result[0].UID}'`
            )
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            })
          }

          return res.status(401).send({
            msg: 'Email or password is incorrect!'
          })
        }
      )
    }
  )
}

const getUser = (req, res) => {
  const authToken = req.headers.authorization.split(' ')[1]
  const decode = jwt.verify(authToken, JWTSECRET)

  db.query('SELECT * FROM users WHERE UID = ?', decode.UID, function (error, result, fields) {
    if (error) {
      throw error
    }

    return res.status(200).send({ success: true, data: result[0], message: 'Fetch Successfully' })
  })
}

const forgetPassword = (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const email = req.body.email

  db.query('SELECT * FROM users WHERE email = ? limit 1', email, function (error, result, fields) {
    if (error) {
      return res.status(400).json({ message: error })
    }

    if (result.length > 0) {
      const mailSubject = 'Forget Password'
      const randomstring = random.generate()
      const content = `
      <div style="font-family: Arial, sans-serif; color: #333; background-color: #f5f5f5; padding: 20px;">
        <h2 style="color: #007bff; text-align: center;">Forgot Your Password?</h2>
        <p>Hi ${result[0].name},</p>
        <p>We received a request to reset the password associated with your account.</p>
        <p style="margin-bottom: 20px;">If you didn't make this request, you can safely ignore this email.</p>
        <div style="text-align: center;">
          <a href="http://localhost:8081/resetPassword?token=${randomstring}" style="display: inline-block; background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Reset Password</a>
        </div>
        <p style="margin-top: 20px;">Alternatively, you can copy and paste the following link into your browser:</p>
        <p style="text-align: center; margin-bottom: 20px;"><a href="http://localhost:8081/resetPassword?token=${randomstring}" style="color: #007bff; text-decoration: none;">http://localhost:8081/resetPassword?token=${randomstring}</a></p>
        <p>If you did request a password reset, click the button above to reset your password. This link will expire in 24 hours.</p>
        <p>If you encounter any issues, please don't hesitate to contact us at bookkinglk@gmail.com.</p>
        <p>Best Regards,<br/>Team BookKing</p>
      </div>
    `

      sendMail(email, mailSubject, content)

      db.query(
        `DELETE FROM passwordresets WHERE email = ${db.escape(result[0].email)}`
      )

      db.query(
        `INSERT INTO passwordresets (email, token) VALUES (${db.escape(result[0].email)}, '${randomstring}')`
      )

      return res.status(200).send({
        message: 'Reset link has been sent to your email!'
      })
    }

    return res.status(401).send({
      message: "Email doesn't exists"
    })
  })
}

const resetPasswordLoad = (req, res) => {
  try {
    const token = req.query.token
    // eslint-disable-next-line eqeqeq
    if (token == undefined) {
      res.render('404')
    }

    db.query('SELECT * FROM passwordresets WHERE token = ? limit 1', token, function (error, result, fields) {
      if (error) {
        console.log(error.message)
      }

      if (result !== undefined && result.length > 0) {
        db.query('SELECT * FROM users WHERE email = ? limit 1', result[0].email, function (error, result, fields) {
          if (error) {
            console.log(error.message)
          }

          res.render('resetPassword', { user: result[0] })
        })
      } else {
        res.render('404')
      }
    })
  } catch (error) {
    console.log(error.message)
  }
}

const resetPassword = (req, res) => {
  // eslint-disable-next-line eqeqeq
  if (req.body.password != req.body.confirmPassword) {
    res.render('resetPassword', { errorMessage: 'Password do not match', user: { UID: req.body.userID, emaill: req.body.email } })
  }

  bcrypt.hash(req.body.confirmPassword, 10, (err, hash) => {
    if (err) {
      console.log(err)
    }

    db.query(
      `DELETE FROM passwordresets WHERE email = '${req.body.email}'`
    )

    db.query(
      `UPDATE users SET password = '${hash}' WHERE UID = '${req.body.userID}'`
    )

    db.query(
      `UPDATE users SET updatedAt = now() WHERE UID = '${req.body.userID}}'`
    )

    res.render('resetSuccess')
  })
}

const updateProfile = (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const token = req.headers.authorization.split(' ')[1]
    const decode = jwt.verify(token, JWTSECRET)

    let sql = '' // Declare the sql variable using let
    let data // Declare the data variable using let

    sql = 'UPDATE users SET name = ?, email = ?, phoneNumber = ?, address = ? WHERE UID = ?'
    // eslint-disable-next-line prefer-const
    data = [req.body.name, req.body.email, req.body.phoneNo, req.body.address, decode.UID]

    db.query(
      `UPDATE users SET updatedAt = now() WHERE UID = '${decode.UID}}'`
    )

    db.query(sql, data, function (error, result, fields) {
      if (error) {
        res.status(400).send({
          msg: error
        })
      }

      res.status(200).send({
        msg: 'Profile updated successfully'
      })
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

const deleteUser = (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decode = jwt.verify(token, JWTSECRET)

    db.query('DELETE FROM users WHERE UID = ?', decode.UID, (error, result) => {
      if (error) {
        return res.status(400).json({ msg: error.message })
      }

      if (result.affectedRows > 0) {
        return res.status(200).json({ msg: 'User profile deleted successfully' })
      } else {
        return res.status(404).json({ msg: 'User not found' })
      }
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

export { register, verifyMail, login, getUser, forgetPassword, resetPasswordLoad, resetPassword, updateProfile, deleteUser }
