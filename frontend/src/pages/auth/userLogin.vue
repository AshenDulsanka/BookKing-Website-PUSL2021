<template>
  <div class="service-provider-login1">
    <newheader />
    <section class="header-frame-wrapper">
      <div class="header-frame">
        <userLoginContent />
          <div class="login-image">
            <img class="loginimg-icon" loading="lazy" alt="" src="../../../public/assets/images/login.png"/>
            <div class="already-have-account-message">
              <a href="/signup">You don't have an account?</a>
            </div>
            <div class="already-have-account-message">
              <a href="/splogin">Service Provider Login</a>
            </div>
          </div>
      </div>
    </section>
    
  </div>
  <newfooter />
</template>

<script>
import { defineComponent } from 'vue'

import userLoginContent from '../../components/auth/userLoginContent.vue'
import newfooter from '../../components/public/newfooter.vue'
import newheader from '../../components/public/newheader.vue'

export default defineComponent({
  name: 'userLogin',
  components: {newheader, userLoginContent, newfooter}
})
</script>
<style scoped>
  a {
    text-decoration: underline;
    color: black;
  }

  .loginimg-icon {
    height: 205px;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .already-have-account-message {
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: center; /* Centering links horizontally */
    gap: 10px; /* Adjust gap between links */
  }

  .login-image {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centering image and links */
    gap: 27px; /* Adjust gap between elements */
  }

  .header-frame-wrapper {
    margin: auto;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    max-width: 100%;
  }

  .header-frame {
    padding: 100px 30px;
    margin: auto;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; /* Center content vertically */
    flex-wrap: wrap; /* Allowing content to wrap */
    gap: 30px; /* Adjust gap between elements */
  }

  .service-provider-login1 {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center; /* Center content horizontally */
    justify-content: center; /* Center content vertically */
    background-color: var(--color-white);
  }
  
  @media screen and (max-width: 1200px) {
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
      margin-top: 50px;
    }
    .loginimg-icon{
      display: none;
    }
    .already-have-account-message {
    display: block;
    float: left; /* Add this line to align the class to the left */
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
</style>
