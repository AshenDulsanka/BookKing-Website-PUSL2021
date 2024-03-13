<template>
  <section :class="$style.pricingFrame">
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "PricingFrame",
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
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .loginTextFrame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .services {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .loginTextFrame1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .review {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .loginTextFrame2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .contactUs {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .loginTextFrame3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .aboutUs {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .loginTextFrame4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .hotels {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .hotelsFrame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
    font-size: var(--font-size-xs);
  }
  .vehicle {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .loginTextFrame5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
    font-size: var(--font-size-xs);
  }
  .events {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .loginTextFrame6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) 0px 0px;
    font-size: var(--font-size-xs);
  }
  .tours {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .loginTextFrame7 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs) var(--padding-6xs) 0px 0px;
    font-size: var(--font-size-xs);
  }
  .footerFrameChild {
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
  .footerFrame {
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
  .footerFrame:hover {
    background-color: var(--color-yellow-200);
  }
  .footer {
    flex: 1;
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
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
  .pricingFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-529xl);
    box-sizing: border-box;
    max-width: 100%;
  }

  @media screen and (max-width: 1825px) {
    .footer {
      flex-wrap: wrap;
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

    .pricingFrame {
      padding-bottom: var(--padding-337xl);
      box-sizing: border-box;
    }
  }
</style>
