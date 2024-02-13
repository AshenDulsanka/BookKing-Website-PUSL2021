<template>
    <div class="login">
      <div class="div-2">
        <Header />
        <Footer />
        <div class="rectangle" />
        <div class="text-wrapper-35">Email</div>
        <div class="text-wrapper-36">Forgot Password</div>
        <p class="p">You dont have an account?</p>
        <div class="text-wrapper-37">Password</div>
        <div class="rectangle-2" />
        <OverlapWrapper />
        <img class="undraw-login-re" alt="Undraw login re" src="undraw-login-re-4vu2-1.svg" />
        <img class="line-3" alt="Line" src="line-6.svg" />
      </div>
    </div>
  </template>
  
  <script>
  import { Header } from "./Header";
  import { Footer } from "./Footer";
  import { OverlapWrapper } from "./OverlapWrapper";
  
  export default {
    name: "Login",
    components: {
      Header,
      Footer,
      OverlapWrapper,
    },
  };
  </script>
  
  <style>
  .login {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .login .div-2 {
    background-color: #ffffff;
    height: 2167px;
    overflow: hidden;
    position: relative;
    width: 1920px;
  }
  
  .login .rectangle {
    background-color: #f9ff00;
    height: 64px;
    left: 230px;
    position: absolute;
    top: 806px;
    width: 831px;
  }
  
  .login .text-wrapper-35 {
    color: #000000;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 230px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 740px;
  }
  
  .login .text-wrapper-36 {
    color: #000000;
    font-family: "Poppins-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 230px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-decoration: underline;
    top: 1112px;
  }
  
  .login .p {
    color: #000000;
    font-family: "Poppins-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 230px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-decoration: underline;
    top: 1177px;
  }
  
  .login .text-wrapper-37 {
    color: #000000;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 230px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 923px;
  }
  
  .login .rectangle-2 {
    background-color: #f9ff00;
    height: 64px;
    left: 230px;
    position: absolute;
    top: 989px;
    width: 831px;
  }
  
  .login .undraw-login-re {
    height: 314px;
    left: 1198px;
    position: absolute;
    top: 776px;
    width: 620px;
  }
  
  .login .line-3 {
    height: 745px;
    left: 1156px;
    object-fit: cover;
    position: absolute;
    top: 570px;
    width: 1px;
  }
  </style>
  