<template>
  <div class="login-container">
    <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="password" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" @click="login">Login</button>
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
    async login() {
      try {
        const response = await fetch('http://localhost:8081/api/admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        const responseData = await response.json();
        
        if (response.ok) {
          localStorage.setItem('token', responseData.token);
          this.$router.push('/adminDashboard');
        } else {
          this.error = alert('Invalid username or password');
        }
      } catch (error) {
        console.error('Error occurred:', error);
        this.error = 'An error occurred. Please try again later.';
      }
    },
  },
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
