<template>

<header>
    <nav>
      <ul class="sidebar">
        <li ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
        <li><a href="/">Home</a></li>
        <li><a href="#">Vehicles</a></li>  
        <li><a href="/hotels">Hotels</a></li>                                          
        <li><a href="#">Tours</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="/contactus">Contact us</a></li>
        <li><a href="/aboutus">About us</a></li>                    
        <li><a class="login" href="/login">Login</a></li>  
      </ul>
      <ul>
        <li><a href="/"><img src="./assets/logo.png" ></a></li>
        <li class="hideOnMobile"><a href="/">Home</a></li>
        <li class="hideOnMobile"><a href="#">Vehicles</a></li>  
        <li class="hideOnMobile"><a href="/hotels">Hotels</a></li>                                          
        <li class="hideOnMobile"><a href="#">Tours</a></li>
        <li class="hideOnMobile"><a href="/reviews">Reviews</a></li>
        <li class="hideOnMobile"><a href="/contactus">Contact us</a></li>
        <li class="hideOnMobile"><a href="/aboutus">About us</a></li>                    
        <li class="hideOnMobile"><a class="login" href="/login">Login</a></li>
        <li class="menu-button" ><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
      </ul>
    </nav>
</header>

</template>


<style scoped>

header{
    width: 100%;
    height: 70px;
}
.img{
  height:auto ;
  width: 100%;
}
nav{
  background-color: rgb(0, 0, 0);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  height: 70px;
  padding-top: 10px;
}
nav ul{
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family:"Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
    
}
nav li{
  height: 50px;
  

}
.menu-button{
  background-color: white;
}
nav a{
  height: 100%;
  padding: 0 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
}
nav a:hover{
  color: black;
  font-weight: 700;
}
.hideOnMobile:hover{
  background-color: yellow;
  
}
nav li:first-child{
  margin-right: auto;
}
nav li:first-child:hover{
  background-color: black;
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
.sidebar li{
  width: 100%;
}
.sidebar li:hover{
  background-color: yellow;
}
.sidebar li:first-child:hover{
  background-color: yellow;
}
.sidebar a{
  width: 100%;
  color: black;
}
.menu-button{
  display: none;
}

@media(max-width: 1200px){
  .hideOnMobile{
    display: none;
  }
  .menu-button{
    display: block;
  }
}
@media(max-width: 400px){
  .sidebar{
    width: 100%;
  }
}




</style>
