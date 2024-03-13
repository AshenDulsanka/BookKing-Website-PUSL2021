<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminLoginContent',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      // In a real app, you'd send an authentication request to your backend
      console.log('Username:', this.username)
      console.log('Password:', this.password)
    }
  }
}
</script>

<style>
.login-container {
  width: 300px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
}
.form-group {
  margin-bottom: 15px;
}
</style>
