<template>
  <footer>
    <nav>
      <ul>
        <li class="hideOnMobile"><a href="/">Home</a></li>
        <li class="hideOnMobile"><a href="/vehicles">Vehicles</a></li>
        <li class="hideOnMobile"><a href="/hotels">Hotels</a></li>
        <li class="hideOnMobile"><a href="/tours">Tours</a></li>
        <li class="hideOnMobile"><a href="/reviews">Reviews</a></li>
        <li class="hideOnMobile"><a href="/contactus">Contact us</a></li>
        <li class="hideOnMobile"><a href="/aboutus">About us</a></li>
        <li class="hideOnMobile"><a class="login" href="/login">Login</a></li>
      </ul>
    </nav>
  </footer>
</template>

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
  font-family: "Poppins", sans-serif;
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
    display:block;
    padding:0px;
    margin-top: 100px;
  }
  nav li {
    width: 100%;
    text-align: center;
    
  }
  .nav {
  background-color:transparent;
  }
}

@media (max-width: 480px) {
  nav li {
    width: 100%;
  }
}
</style>