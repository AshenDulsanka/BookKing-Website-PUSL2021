import Api from '@/services/Api'

export default {
  userSignUp (userCredentials) {
    return Api().post('userSignUp', userCredentials)
  }
}
