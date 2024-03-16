import { body } from 'express-validator'

export const userSignUpValidation = [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  body('password', 'Password is required').isLength({ min: 6 }),
  body('confirmPassword', 'Password do not match').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match')
    }
    return true
  }),
  body('phoneNo', 'Phone number is required').not().isEmpty(),
  body('address', 'Address is required').not().isEmpty()
]

export const spSignUpValidation = [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  body('password', 'Password is required').isLength({ min: 6 }),
  body('confirmPassword', 'Password do not match').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match')
    }
    return true
  }),
  body('phoneNo', 'Phone number is required').not().isEmpty(),
  body('address', 'Address is required').not().isEmpty(),
  body('whatwedo', 'Description is required').not().isEmpty()
]
