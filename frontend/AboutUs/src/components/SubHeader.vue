<template>
  <div :class="$style.subHeader">
    <header :class="$style.header">
      <div :class="$style.headerChild" />
      <img
        :class="$style.logoIcon"
        loading="lazy"
        alt=""
        src="../logo.png"
      />
      <div :class="$style.homeFrame">
        <div :class="$style.servicesFrame">
          <div :class="$style.reviewFrame">
            <button :class="$style.home">Home</button>
          </div>
          <div :class="$style.reviewFrame1">
            <button :class="$style.services">Services</button>
          </div>
          <div :class="$style.reviewFrame2">
            <button :class="$style.review">Review</button>
          </div>
          <div :class="$style.reviewFrame3">
            <button :class="$style.contactUs">Contact us</button>
          </div>
          <div :class="$style.reviewFrame4">
            <button :class="$style.aboutUs">About us</button>
          </div>
          <button :class="$style.loginFrame">
            <div :class="$style.loginFrameChild" />
            <div :class="$style.login">Login</div>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SubHeader",
  });
</script>
<style module>
  .headerChild {
    align-self: stretch;
    width: 1920px;
    position: relative;
    background-color: var(--color-black);
    display: none;
    max-width: 100%;
  }
  .logoIcon {
    height: 125px;
    width: 146px;
    position: relative;
    object-fit: cover;
    z-index: 1;
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
    white-space: nowrap;
    z-index: 1;
  }
  .reviewFrame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-mini) 0px 0px;
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
  .reviewFrame1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-smi) 0px 0px;
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
  .reviewFrame2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-smi) 0px 0px;
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
    white-space: nowrap;
    z-index: 1;
  }
  .reviewFrame3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-smi) 0px 0px;
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
    white-space: nowrap;
    z-index: 1;
  }
  .reviewFrame4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
  }
  .loginFrameChild {
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
  .loginFrame {
    cursor: pointer;
    border: none;
    padding: var(--padding-7xs) var(--padding-sm) 6.100000000000364px
      var(--padding-smi);
    background-color: var(--color-yellow-100);
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
  }
  .loginFrame:hover {
    background-color: var(--color-yellow-200);
  }
  .servicesFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 17px;
  }
  .homeFrame {
    height: 77px;
    width: 505px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .header {
    flex: 1;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px var(--padding-23xl) 0px 0px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 99;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .subHeader {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-33xl);
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 1350px) {
    .header {
      padding-right: var(--padding-2xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .servicesFrame {
      display: none;
    }

    .homeFrame {
      width: 0px;
    }
  }
</style>
