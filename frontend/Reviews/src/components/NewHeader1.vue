<template>
  <header :class="$style.newHeader">
    <div :class="$style.newHeaderChild" />
    <img
      :class="$style.bookKingRemovebgPreview3Icon"
      loading="lazy"
      alt=""
      src="../logo.png"
    />
    <div :class="$style.serviceFrames">
      <div :class="$style.serviceFrames1">
        <div :class="$style.serviceFrames2">
          <button :class="$style.home">Home</button>
        </div>
        <div :class="$style.contactUsToFrame">
          <button :class="$style.services">Services</button>
        </div>
        <div :class="$style.reviewFrames">
          <button :class="$style.review">Review</button>
        </div>
        <div :class="$style.reviewFrames1">
          <button :class="$style.contactUs">Contact us</button>
        </div>
        <div :class="$style.loginFrame">
          <button :class="$style.aboutUs">About us</button>
        </div>
        <button :class="$style.hotelsFrame">
          <div :class="$style.hotelsFrameChild" />
          <button :class="$style.login">Login</button>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "NewHeader11",
  });
</script>
<style module>
  .newHeaderChild {
    align-self: stretch;
    width: 1920px;
    position: relative;
    background-color: var(--color-black);
    display: none;
    max-width: 100%;
  }
  .bookKingRemovebgPreview3Icon {
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
  .serviceFrames2 {
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
  .contactUsToFrame {
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
  .reviewFrames {
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
  .reviewFrames1 {
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
  .loginFrame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
  }
  .hotelsFrameChild {
    height: 30.1px;
    width: 65px;
    position: relative;
    border-radius: var(--br-9xs);
    background-color: var(--color-yellow-100);
    display: none;
  }
  .login {
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    z-index: 2;
  }
  .hotelsFrame {
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
  .hotelsFrame:hover {
    background-color: var(--color-yellow-200);
  }
  .serviceFrames1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 17px;
  }
  .serviceFrames {
    height: 77px;
    width: 505px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .newHeader {
    margin-top: -6px;
    align-self: stretch;
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

  @media screen and (max-width: 1350px) {
    .newHeader {
      padding-right: var(--padding-2xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .serviceFrames1 {
      display: none;
    }

    .serviceFrames {
      width: 0px;
    }
  }
</style>
