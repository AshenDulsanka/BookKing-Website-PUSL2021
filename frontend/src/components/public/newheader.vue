<template>
  <header>
                <a href="/">
                    <img src="../../../public/assets/logo.png" alt="" class="img">
                </a>
        <nav>
                
                <div class="header">
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Vehicles</a></li>  
                    <li><a href="/hotels">Hotels</a></li>                                          
                    <li><a href="#">Tours</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                    <li><a href="/contactus">Contact us</a></li>
                    <li><a href="/aboutus">About us</a></li>
                    
                    <li><a  class="login" href="/login">Login</a></li>
                    </ul>
                </div>
        </nav>
  </header>

</template>

<style scoped>

    .img{
        float: left;
        height: 125px;
        width: 146px;
        position: relative;
        object-fit: cover;
        margin-top:-35px;
    }

    a:hover {
        background-color: yellow;
        color: black;
        font-weight: bold;
    }
    .login{
        color: yellow;
        font-weight: bolder;
    }
    .login:hover{
        background-color:yellow;
        color: black        ;
    }
    header {
    background-color: #000000;
    padding: 20px;
    text-align: right;
    width: 100%;
    height: 100px;
    
    }

    header nav ul {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding-right: 20px;

    }

    header nav li {
    display: inline-block;
    margin-right: 15px;
    font-weight: bold
    }

    header nav a {
    align-self: stretch;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style:normal;
    color:white;
    text-decoration: none;
    display: block;
    padding: 15px 20px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    }

</style>
