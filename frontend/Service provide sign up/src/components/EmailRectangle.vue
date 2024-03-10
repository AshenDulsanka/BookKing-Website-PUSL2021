<template>
  <div class="email-rectangle1">
    <div class="service-provider-login-wrapper">
      <h1 class="service-provider-login3">Serice Provider Sign up</h1>
    </div>
    <div class="password-rectangle1">
      <div class="email-parent">
        <br>
        <div class="email1">Name</div>
        <input class="rectangle-rectangle" type="text" />
        <div class="email1">Email</div>
        <input class="frame-item" type="text" />
        <div class="email1">Password</div>
        <input class="frame-item" type="text" />
        <div class="email1">Password Confirm</div>
        <input class="frame-item" type="text" />
        <div class="email1">Phone Numebr</div>
        <input class="frame-item" type="text" />
        <div class="email1">Address</div>
        <input class="frame-item" type="text" />
        <div class="email1">Wat we do</div>
        <textarea class="frame-item1" name="wat we do" rows="4" cols="50">
          
        </textarea>
      </div>
    </div>
    <a href="#">
        <button class="ok">
            <div class="ok">OK</div>
        </button>
    </a>
    <div class="forgot-password-link">
      <a href="#">Forgot Password</a>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "EmailRectangle",
  });
</script>
<style scoped>
  .frame-item1{
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 200px;
    position: relative;
    min-width: 250px;
  }
  .ok{
    font-family: "poppins", sans-serif;
    background-color: yellow;
    color: black;
    padding: 6px 20px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
  }

  a{
    color: black;
  }
  .service-provider-login3 {
    margin: 0;
    height: 15px;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
  }
  .service-provider-login-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-5xs);
    box-sizing: border-box;
    max-width: 100%;
    margin-top: -140px;
  }
  .email1 {
    font-weight: 600;
    font-family: var(--font-poppins);
    font-size: var(--font-size-sm);
    background-color: transparent;
    height: 20px;
    position: relative;
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    padding: 0;
  }
  .rectangle-rectangle {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 35px;
    position: relative;
    min-width: 250px;
  }
  .email-parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px 0px;
    max-width: 100%;
  }
  .password-rectangle1 {
    width: 764px;
    display: inline-block;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px ;
    box-sizing: border-box;
    max-width: 100%;
  }
 
  .frame-item {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 35px;
    position: relative;
    min-width: 250px;
  }
  .password-parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px 0px;
    max-width: 100%;
  }
  .password-rectangle2 {
    width: 764px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-10xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .forgot-password1 {
    text-decoration: none;
    color: rgb(99, 1, 1);
    position: relative;
    
  }
  .forgot-password-link {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-10xs);
    font-size: var(--font-size-sm);
    font-family: var(--font-poppins);
  }
  .email-rectangle1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 21px 0px;
    max-width: 100%;
    flex-shrink: 0;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-tajawal);
  }

  @media screen and (max-width: 925px) {
    .service-provider-login3 {
      font-size: var(--font-size-13xl);
    }

    .email-rectangle1 {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .service-provider-login3 {
      font-size: var(--font-size-5xl);
    }
  }
</style>
