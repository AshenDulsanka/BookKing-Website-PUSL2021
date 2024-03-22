import { body } from 'express-validator'

export const userSignUpValidation = [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  body('password', 'Password is required and it should be at least 6 characters, symbols or numbers').isLength({ min: 6 }),
  body('confirmPassword', 'Password do not match').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match')
    }
    return true
  }),
  body('phoneNo', 'Phone number is required').not().isEmpty(),
  body('address', 'Address is required').not().isEmpty()
]

export const serviceProviderSignUpValidation = [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  body('password', 'Password is required and it should be at least 6 characters, symbols or numbers').isLength({ min: 6 }),
  body('confirmPassword', 'Password do not match').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match')
    }
    return true
  }),
  body('phoneNo', 'Phone number is required').not().isEmpty(),
  body('address', 'Address is required').not().isEmpty(),
  body('serviceDesc', 'Description is required').not().isEmpty()
]

export const logInValidation = [
  body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  body('password', 'Password minimum length is 6 characters').isLength({ min: 6 })
]

export const forgetValidation = [
  body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true })
]

export const updateProfileValidation = [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true })
]
