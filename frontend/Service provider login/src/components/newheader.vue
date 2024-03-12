<template>
  <title>Service Provider Login</title>
  <Header>
        <nav>
            <img src="../logo.png" alt="" class="img">
                <div class="header">
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Vehicles</a></li>  
                    <li><a href="#">Hotels</a></li>                                          
                    <li><a href="#">Tours</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                    
                    <li><a  class="login" href="#">Login</a></li>
                    </ul>
                </div>
        </nav>
  </Header>
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
        color: black;
    }
    Header {
    background-color: #000000;
    padding: 20px;
    text-align: right;

    top:0px;
    bottom: 0;
    width: 100%;
    height: 50px;
    }

    Header nav ul {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding-right: 20px;

    }

    Header nav li {
    display: inline-block;
    margin-right: 15px;
    font-weight: bold
    }

    Header nav a {
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
