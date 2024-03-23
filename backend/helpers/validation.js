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

export const addServiceValidation = [
  body('name', 'Service name is required').not().isEmpty(),
  body('longDescription', 'Long description is required').not().isEmpty(),
  body('shortDescription', 'Short description is required').not().isEmpty(),
  body('price', 'Price is required').not().isEmpty().isNumeric(),
  body('location', 'Location is required').not().isEmpty(),
  body('category', 'Category is required').not().isEmpty(),
  body('image').custom((value, { req }) => {
    if (req.files?.image?.[0].mimetype === 'image/jpeg' || req.files?.image?.[0].mimetype === 'image/png') {
      return true
    } else {
      return false
    }
  }).withMessage('Please upload an image with PNG or JPEG format for the primary image'),
  body('image2').optional().custom((value, { req }) => {
    if (req.files?.image2?.[0]) {
      if (req.files.image2[0].mimetype === 'image/jpeg' || req.files.image2[0].mimetype === 'image/png') {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }).withMessage('Please upload an image with PNG or JPEG format for optional image 2'),
  body('image3').optional().custom((value, { req }) => {
    if (req.files?.image3?.[0]) {
      if (req.files.image3[0].mimetype === 'image/jpeg' || req.files.image3[0].mimetype === 'image/png') {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }).withMessage('Please upload an image with PNG or JPEG format for optional image 3'),
  body('image4').optional().custom((value, { req }) => {
    if (req.files?.image4?.[0]) {
      if (req.files.image4[0].mimetype === 'image/jpeg' || req.files.image4[0].mimetype === 'image/png') {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }).withMessage('Please upload an image with PNG or JPEG format for optional image 4'),
  body('image5').optional().custom((value, { req }) => {
    if (req.files?.image5?.[0]) {
      if (req.files.image5[0].mimetype === 'image/jpeg' || req.files.image5[0].mimetype === 'image/png') {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }).withMessage('Please upload an image with PNG or JPEG format for optional image 5')
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
