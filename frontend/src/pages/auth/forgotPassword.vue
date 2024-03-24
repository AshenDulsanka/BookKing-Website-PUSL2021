<template>
  <div class="container">
    <div class="form-wrapper">
      <h2>Forgot your password?</h2>
      <p class="description">
        No worries! Enter your email address, and we'll send you instructions to reset your password.
      </p>
      <form @submit.prevent="sendResetEmail">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" id="email" v-model="email" required placeholder="Enter your email" />
        </div>
        <button type="submit" class="btn-primary">Send reset email</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'forgotPasswordContent',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    async sendResetEmail() {
      try {
        const response = await fetch('http://localhost:8081/api/forgetPassword', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
          }),
        });

        const responseData = await response.json();
        
        if (response.ok) {
          alert('Password reset email sent successfully');
          this.$router.push('/');
        } else {
          this.error = alert('Invalid email address');
        }
      } catch (error) {
        console.error('Error occurred:', error);
        this.error = 'An error occurred. Please try again later.';
      }
    },
  },
})
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
}

.container {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%;
  max-width: 400px;
  margin: 14% auto;
}

.form-wrapper {
  max-width: 300px;
  margin: 0 auto;
}

h2 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.description {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  color: #666;
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
}

input[type="email"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.btn-primary {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

footer {
  margin-top: 50px;
  text-align: center;
  color: #999;
  font-size: 12px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #f9f9f9;
  padding: 10px 0;
  border-top: 1px solid #ddd;
}
</style>