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

const getUsers = (req, res) => {
  try {
    db.query('SELECT * FROM users', (error, result) => {
      if (error) {
        return res.status(400).json({ msg: error.message })
      }

      if (result.length === 0) {
        return res.status(404).json({ msg: 'No users found' })
      }

      return res.status(200).json({ success: true, data: result, message: 'Users fetched successfully' })
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

const getServiceProviders = (req, res) => {
  try {
    db.query('SELECT * FROM serviceprovider', (error, result) => {
      if (error) {
        return res.status(400).json({ msg: error.message })
      }

      if (result.length === 0) {
        return res.status(404).json({ msg: 'No service providers found' })
      }

      return res.status(200).json({ success: true, data: result, message: 'Service providers fetched successfully' })
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

const getServices = (req, res) => {
  try {
    db.query('SELECT * FROM service', (error, result) => {
      if (error) {
        return res.status(400).json({ msg: error.message })
      }

      if (result.length === 0) {
        return res.status(404).json({ msg: 'No services found' })
      }

      return res.status(200).json({ success: true, data: result, message: 'Services fetched successfully' })
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

export { login, getUsers, getServiceProviders, getServices }
