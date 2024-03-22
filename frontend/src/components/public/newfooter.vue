<template>
    <footer>
      <nav>      
        <ul>
          <li class="hideOnMobile"><a href="/">Home</a></li>
          <li class="hideOnMobile"><a href="#">Vehicles</a></li>
          <li class="hideOnMobile"><a href="/hotels">Hotels</a></li>
          <li class="hideOnMobile"><a href="#">Tours</a></li>
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
  }
  .img {
    height: auto;
    width: 100%;
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
  .menu-button {
    background-color: white;
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

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
    list-style: none;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    bottom: 0;
  }
  .sidebar.show {
    display: flex;
  }
  .sidebar li {
    width: 100%;
  }
  .sidebar li:hover {
    background-color: yellow;
  }
  .sidebar li:first-child:hover {
    background-color: yellow;
  }
  .sidebar a {
    width: 100%;
    color: black;
    font-weight: 500;
  }
  .menu-button {
    display: none;
  }
  
 
  </style>
