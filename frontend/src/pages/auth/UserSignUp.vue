<template>
  <div class="service-provider-login1">
    <newheader />
    <br>
    <section class="header-frame-wrapper">
      
      <div class="header-frame">
        <userSignUpContent />
        <div class="password-input-frame">

          <div class="login-image">
            <img class="loginimg-icon" loading="lazy" alt="" src="../../../public/assets/images/signup.png"/>
            <div class="already-have-account-message">
              <a href="/login">Already have an account?</a>
            </div>
            <div class="already-have-account-message">
              <a href="/spsignup">Are you a Service Provider?</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br>
  </div>
 
  <newfooter />
</template>
<script>
import { defineComponent } from 'vue'

import userSignUpContent from '../../components/auth/userSignUpContent.vue'
import newfooter from '../../components/public/newfooter.vue'
import newheader from '../../components/public/newheader.vue'

export default defineComponent({
  name: 'UserSignUp',
  components: {newheader, userSignUpContent, newfooter}
})
</script>
<style scoped>
  a{
    text-decoration: underline;
    color: black;
  }

  .loginimg-icon {
    height: 100%;
    width: 100%;
    position: relative;
    max-width: 100%;
    padding-top: 15% ;
  }
  .you-dont-have {
    margin: 0;
  }
  .you-dont-have-container {
    position: relative;
    text-decoration: underline;
  }
  .password-rectangle {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 1px;
  }
  .already-have-an {
    position: relative;
    text-decoration: underline;
  }
  .email-rectangle {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 11px 0px;
  }
  .already-have-account-message {
    color: black;
    text-decoration: none;
    height: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 84px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .login-image {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 27px 0px;
    max-width: 100%;
  }
  .password-input-frame {
    height:100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 10% 5%;
    min-width: 404px;
    max-width: 100%;
    z-index: 1;
  }
  .header-frame {
    width: 1199px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    row-gap: 20px;
  }
  .header-frame-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-poppins);
    margin-top: 100px;
  }
  .service-provider-login1 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    gap: 50px 0px;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1350px) {
    .password-input-frame {
      flex: 1;
      margin-left: 0;
    }

    .header-frame {
      flex-wrap: wrap;
    }

    .service-provider-login1 {
      gap: 52px 0px;
    }
    .login-image{
      display: flex;
      align-self: auto;
    }
    .loginimg-icon {
      display: none;
    }
    .already-have-account-message{
      margin-left: 0% !important;
    }
    

    
  }
  
  @media screen and (max-width: 925px) {
    .password-input-frame {
      min-width: 100%;
    }

    .service-provider-login1 {
      gap: 26px 0px;
    }
  }
  @media screen and (max-width: 450px) {
    .already-have-account-message {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>../../components/auth/userSignUpContent.vue../../components/userSignUpContent.vue../../components/auth/userSignUpContent.vue
