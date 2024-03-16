import Api from '@/services/Api'

export default {
  userSignUp (userCredentials) {
    return Api().post('userSignUp', userCredentials)
  }
}

// authenticationServices.userSignUp({
//     email: 'ashendul@gmail.com',
//     passwpord: '123456'
// })
