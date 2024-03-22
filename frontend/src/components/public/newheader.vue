<template>

  <Header>
                <a href="/">
                    <img src="../../../public/assets/logo.png" alt="" class="img">
                </a>
        <nav>                
                <ul class="pc">
                    <li class="menu-button" onclick=showSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Vehicles</a></li>  
                    <li><a href="/hotels">Hotels</a></li>                                          
                    <li><a href="#">Tours</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                    <li><a href="/contactus">Contact us</a></li>
                    <li><a href="/aboutus">About us</a></li>                    
                    <li><a class="login" href="/login">Login</a></li>                        
                </ul>
                <ul class="sidebar">
                    <li onclick=hideSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
                    <li class="hideOnMobile"><a href="/">Home</a></li>
                    <li class="hideOnMobile"><a href="#">Vehicles</a></li>  
                    <li class="hideOnMobile"><a href="/hotels">Hotels</a></li>                                          
                    <li class="hideOnMobile"><a href="#">Tours</a></li>
                    <li class="hideOnMobile"><a href="/reviews">Reviews</a></li>
                    <li class="hideOnMobile"><a href="/contactus">Contact us</a></li>
                    <li class="hideOnMobile"><a href="/aboutus">About us</a></li>                    
                    <li class="hideOnMobile"><a  class="login" href="/login">Login</a></li>
                </ul>               
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
        color: black        ;
    }
    Header {
    background-color: #000000;
    padding: 20px;
    text-align: right;
    top:0px;
    bottom: 0;
    width: 100%;
    height: 100px;
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
    font-weight: 500;
    font-size: 1.4em
    }

    Header nav a {
    align-self: stretch;
    font-family: "Poppins", sans-serif;  
    font-style:normal;
    color:white;
    text-decoration: none;
    display: block;
    padding: 15px 20px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    }
    .sidebar{
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
    }
    .menu-button{
        display: none;

    }
    .sidebar li{
    width: 100%;
    }
    .sidebar a{
    width: 100%;
    }
    @media(max-width: 800px){
    .hideOnMobile{
        display: none;
    }
    .menu-button{
        display: flex;
    }
    .pc{
        display: none;
    }
    }
    @media(max-width: 400px){
    .sidebar{
        width: 100%;
     }
    }
</style>
