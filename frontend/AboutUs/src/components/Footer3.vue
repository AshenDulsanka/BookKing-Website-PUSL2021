<template>
  <footer :class="$style.footer">
    <div :class="$style.footerChild" />
    <div :class="$style.mainFrames">
      <button :class="$style.home">Home</button>
    </div>
    <div :class="$style.mainFrames1">
      <button :class="$style.services">Services</button>
    </div>
    <div :class="$style.mainFrames2">
      <button :class="$style.review">Review</button>
    </div>
    <div :class="$style.mainFrames3">
      <button :class="$style.contactUs">Contact us</button>
    </div>
    <div :class="$style.mainFrames4">
      <button :class="$style.aboutUs">About us</button>
    </div>
    <div :class="$style.hotelsText">
      <button :class="$style.hotels">Hotels</button>
    </div>
    <div :class="$style.mainFrames5">
      <button :class="$style.vehicle">Vehicle</button>
    </div>
    <div :class="$style.mainFrames6">
      <button :class="$style.events">Events</button>
    </div>
    <div :class="$style.mainFrames7">
      <button :class="$style.tours">Tours</button>
    </div>
    <button :class="$style.loginText">
      <div :class="$style.loginTextChild" />
      <div :class="$style.login">Login</div>
    </button>
  </footer>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Footer3",
  });
</script>
<style module>
  .footerChild {
    height: 125px;
    width: 1920px;
    position: relative;
    background-color: var(--color-black);
    display: none;
    max-width: 100%;
  }
  .home {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .mainFrames {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .services {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .mainFrames1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .review {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .mainFrames2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .contactUs {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .mainFrames3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .aboutUs {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .mainFrames4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .hotels {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-xs);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .hotelsText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .vehicle {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-xs);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .mainFrames5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
  }
  .events {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-xs);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .mainFrames6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
  }
  .tours {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-xs);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: left;
    display: inline-block;
    z-index: 1;
  }
  .mainFrames7 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-6xs) 0px 0px;
  }
  .loginTextChild {
    height: 30.1px;
    width: 65px;
    position: relative;
    border-radius: var(--br-9xs);
    background-color: var(--color-yellow-100);
    display: none;
  }
  .login {
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-black);
    text-align: left;
    z-index: 2;
  }
  .loginText {
    cursor: pointer;
    border: none;
    padding: var(--padding-7xs) var(--padding-sm) 3.100000000000364px
      var(--padding-smi);
    background-color: var(--color-yellow-100);
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
  }
  .loginText:hover {
    background-color: var(--color-yellow-200);
  }
  .footer {
    align-self: stretch;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-29xl) var(--padding-540xl) 46.89999999999963px
      var(--padding-539xl);
    box-sizing: border-box;
    max-width: 100%;
    gap: var(--gap-xl);
  }

  @media screen and (max-width: 1825px) {
    .footer {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media screen and (max-width: 1350px) {
    .footer {
      padding-left: var(--padding-260xl);
      padding-right: var(--padding-260xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .footer {
      padding-left: var(--padding-120xl);
      padding-right: var(--padding-120xl);
      box-sizing: border-box;
    }
  }
</style>
