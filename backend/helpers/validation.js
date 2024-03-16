import expressValidator from 'express-validator'

exports.userSignUpValidation = [
  expressValidator('name', 'Name is required').not().isEmpty(),
  expressValidator('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  expressValidator('password', 'Password is required').isLength({ min: 6 }),
  expressValidator('confirmPassword', 'Password do not match').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match')
    }
    return true
  }),
  expressValidator('phoneNo', 'Phone number is required').not().isEmpty(),
  expressValidator('address', 'Address is required').not().isEmpty()
]

exports.spSignUpValidation = [
  expressValidator('name', 'Name is required').not().isEmpty(),
  expressValidator('email', 'Please enter a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
  expressValidator('password', 'Password is required').isLength({ min: 6 }),
  expressValidator('confirmPassword', 'Password do not match').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match')
    }
    return true
  }),
  expressValidator('phoneNo', 'Phone number is required').not().isEmpty(),
  expressValidator('address', 'Address is required').not().isEmpty(),
  expressValidator('whatwedo', 'Description is required').not().isEmpty()
]
