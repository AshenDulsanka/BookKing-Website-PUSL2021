import { validationResult } from 'express-validator'

const register = (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
}

export { register }
