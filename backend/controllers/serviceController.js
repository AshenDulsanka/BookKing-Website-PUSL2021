import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import { conn } from '../config/dbCon.js'

const { JWTSECRET } = process.env

const db = conn

const addService = (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const token = req.headers.authorization.split(' ')[1]
    const decode = jwt.verify(token, JWTSECRET)

    const sql = 'INSERT INTO service (Name, LongDescription, ShortDescription, Price, Location, category, Image, SPID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    const data = [req.body.name, req.body.longDescription, req.body.shortDescription, req.body.price, req.body.location, req.body.category, req.file.filename, decode.SPID]

    db.query(sql, data, (error, result) => {
      if (error) {
        return res.status(400).json({ msg: error.message })
      }

      const SID = result.SID
      return res.status(200).json({ msg: 'Service added successfully', SID })
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

const updateService = (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const token = req.headers.authorization.split(' ')[1]
    const decode = jwt.verify(token, JWTSECRET)

    const sql = 'UPDATE service SET Name = ?, LongDescription = ?, ShortDescription = ?, Price = ?, Location = ?, category = ?, Image = ? WHERE SID = ? AND SPID = ?'
    const data = [req.body.name, req.body.longDescription, req.body.shortDescription, req.body.price, req.body.location, req.body.category, req.body.image || req.file?.filename || null, req.body.SID, decode.SPID]

    db.query(
      `UPDATE service SET updatedAt = now() WHERE SID = '${req.body.SID}}'`
    )

    db.query(sql, data, (error, result) => {
      if (error) {
        return res.status(400).json({ msg: error.message })
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ msg: 'Service not found' })
      }

      return res.status(200).json({ msg: 'Service updated successfully' })
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

const deleteService = (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decode = jwt.verify(token, JWTSECRET)

    const sql = 'DELETE FROM service WHERE SID = ? AND SPID = ?'
    const data = [req.body.SID, decode.SPID]

    db.query(sql, data, (error, result) => {
      if (error) {
        return res.status(400).json({ msg: error.message })
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ msg: 'Service not found' })
      }

      return res.status(200).json({ msg: 'Service deleted successfully' })
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

const getHotels = (req, res) => {
  try {
    db.query('SELECT * FROM service WHERE category = "Hotel"', (error, result) => {
      if (error) {
        return res.status(400).json({ msg: error.message })
      }

      if (result.length === 0) {
        return res.status(404).json({ msg: 'No hotels found' })
      }

      return res.status(200).json({ success: true, data: result, message: 'Hotels fetched successfully' })
    })
  } catch (error) {
    return res.status(400).json({ msg: error.message })
  }
}

export { addService, updateService, deleteService, getHotels }
