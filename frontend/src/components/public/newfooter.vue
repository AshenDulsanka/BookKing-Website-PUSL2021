<template>
  <footer>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/vehicles">Vehicles</a></li>
        <li><a href="/hotels">Hotels</a></li>
        <li><a href="/tours">Tours</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="/contactus">Contact us</a></li>
        <li><a href="/aboutus">About us</a></li>
        <li>
          <a v-if="!isLoggedIn" class="login" href="/login">Login</a>
          <a v-else href="#" @click.prevent="redirectToDashboard">Profile</a>
        </li>
        <li v-if="isLoggedIn"><a href="#" @click.prevent="logout">Logout</a></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import { jwtDecode } from 'jwt-decode';

export default {
  name: 'ResponsiveFooter',
  data() {
    return {
      userRole: null,
    };
  },
  computed: {
    isLoggedIn() {
      const token = localStorage.getItem('token');
      return !!token;
    },
  },
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      this.userRole = decodedToken.role;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.userRole = null;
      this.$router.push('/login');
    },
    redirectToDashboard() {
      if (this.userRole === 'user') {
        this.$router.push('/userdashboard');
      } else if (this.userRole === 'serviceProvider') {
        this.$router.push('/spdashboard');
      } else if (this.userRole === 'admin') {
        this.$router.push('/admindashboard');
      }
    },
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 70px;
  bottom: 0;
}

nav {
  background-color: rgb(0, 0, 0);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  height: 70px;
  padding-top: 10px;
}

nav ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
}

nav li {
  height: 50px;
}

nav a {
  height: 100%;
  padding: 0 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
}

nav a:hover {
  color: black;
  font-weight: 700;
}

.hideOnMobile:hover {
  background-color: yellow;
}

.login {
  font-weight: bold;
}

@media (max-width: 1200px) {
  nav ul {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 0;
  }

  nav li {
    width: auto;
    text-align: center;
  }

  .nav {
    background-color: transparent;
  }
}

@media (max-width: 480px) {
  nav li {
    width: 100%;
  }
}
</style>