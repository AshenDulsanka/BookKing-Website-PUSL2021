<template>
    <div class="sign-up">
      <div class="div-2">
        <Header />
        <Footer />
        <div class="overlap-6">
          <div class="rectangle" />
          <div class="text-wrapper-35">Name</div>
        </div>
        <div class="rectangle-2" />
        <div class="text-wrapper-36">Password</div>
        <div class="text-wrapper-37">Email</div>
        <div class="text-wrapper-38">Password confirm</div>
        <div class="text-wrapper-39">Phone number</div>
        <div class="text-wrapper-40">Address</div>
        <div class="rectangle-3" />
        <div class="rectangle-4" />
        <div class="rectangle-5" />
        <div class="rectangle-6" />
        <OverlapWrapper />
        <UndrawSignUp />
        <img class="line-3" alt="Line" src="line-5.svg" />
      </div>
    </div>
  </template>
  
  <script>
  import { Header } from "./Header";
  import { Footer } from "./Footer";
  import { OverlapWrapper } from "./OverlapWrapper";
  import { UndrawSignUp } from "./UndrawSignUp";
  
  export default {
    name: "SignUp",
    components: {
      Header,
      Footer,
      OverlapWrapper,
      UndrawSignUp,
    },
  };
  </script>
  
  <style>
  .sign-up {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
  
  .sign-up .div-2 {
    background-color: #ffffff;
    height: 2167px;
    overflow: hidden;
    position: relative;
    width: 1920px;
  }
  
  .sign-up .overlap-6 {
    height: 111px;
    left: 247px;
    position: absolute;
    top: 545px;
    width: 831px;
  }
  
  .sign-up .rectangle {
    background-color: #f9ff00;
    height: 64px;
    left: 0;
    position: absolute;
    top: 47px;
    width: 831px;
  }
  
  .sign-up .text-wrapper-35 {
    color: #000000;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
  }
  
  .sign-up .rectangle-2 {
    background-color: #f9ff00;
    height: 64px;
    left: 247px;
    position: absolute;
    top: 862px;
    width: 831px;
  }
  
  .sign-up .text-wrapper-36 {
    color: #000000;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 247px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 807px;
  }
  
  .sign-up .text-wrapper-37 {
    color: #000000;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 247px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 681px;
  }
  
  .sign-up .text-wrapper-38 {
    color: #000000;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 247px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 949px;
  }
  
  .sign-up .text-wrapper-39 {
    color: #000000;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 247px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1082px;
  }
  
  .sign-up .text-wrapper-40 {
    color: #000000;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 32px;
    font-weight: 600;
    left: 247px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 1234px;
  }
  
  .sign-up .rectangle-3 {
    background-color: #f9ff00;
    height: 64px;
    left: 247px;
    position: absolute;
    top: 730px;
    width: 831px;
  }
  
  .sign-up .rectangle-4 {
    background-color: #f9ff00;
    height: 64px;
    left: 247px;
    position: absolute;
    top: 1003px;
    width: 831px;
  }
  
  .sign-up .rectangle-5 {
    background-color: #f9ff00;
    height: 64px;
    left: 247px;
    position: absolute;
    top: 1139px;
    width: 831px;
  }
  
  .sign-up .rectangle-6 {
    background-color: #f9ff00;
    height: 64px;
    left: 247px;
    position: absolute;
    top: 1283px;
    width: 831px;
  }
  
  .sign-up .line-3 {
    height: 745px;
    left: 1140px;
    object-fit: cover;
    position: absolute;
    top: 600px;
    width: 1px;
  }
  </style>
  