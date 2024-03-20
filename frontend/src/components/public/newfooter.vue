<template>
    <footer>
        <nav>
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
        </nav>
    </footer>

</template>

<style scoped>
    a:hover {
    background-color: yellow;
    color: black;
    font-weight: bold;
    }
    .login{
        color: yellow;
        transition: background-color 2s ease-out 50ms
    }
    .login:hover{
        background-color:yellow;
        color: black        ;
    }
    footer {
    background-color: #000000;
    padding: 20px;
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 5.5rem;
    }

    footer nav ul {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    }

    footer nav li {
    display: inline-block;
    margin-right: 20px;
    }

    footer nav a {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: rgb(255, 255, 255);
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 14px;
    }
</style>
