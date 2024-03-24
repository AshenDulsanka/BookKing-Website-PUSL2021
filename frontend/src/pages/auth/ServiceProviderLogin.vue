<template>
  <div class="service-provider-login1">
    <newheader />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <section class="header-frame-wrapper">
      <div class="header-frame">
        <ServiceProviderLoginContent />
        <div class="password-input-frame">

          <div class="login-image">
            <img class="loginimg-icon" loading="lazy" alt="" src="../../../public/assets/images/login.png"/>
            <div class="already-have-account-message">
              <a href="/spsignup">You don't have a Service account?</a>
            </div>
            <div class="already-have-account-message">
              <a href="/login">Already have an user account?</a>
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

import ServiceProviderLoginContent from '../../components/auth/ServiceProviderLoginContent.vue'
import newheader from '../../components/public/newheader.vue'
import newfooter from '../../components/public/newfooter.vue'

export default defineComponent({
  name: 'ServiceProviderLogin',
  components: { newheader, ServiceProviderLoginContent, newfooter }
})
</script>

<style scoped>
  a{
    text-decoration: underline;
    color: black;
  }

  .loginimg-icon {
    align-self: auto;
    height: 205px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    margin-top: -100px;
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
    padding: 0px 44px;
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
    height:16px;
    width: 404px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 60px 0px 0px;
    box-sizing: border-box;
    min-width: 404px;
    max-width: 100%;
    z-index: 1;
    margin-left: -75px;
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
    padding: 0px 0px 229.5px;
    box-sizing: border-box;
    gap: 104.5px 0px;
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
