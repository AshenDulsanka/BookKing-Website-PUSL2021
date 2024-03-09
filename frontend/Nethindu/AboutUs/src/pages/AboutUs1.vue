<template>
  <div :class="$style.aboutUs">
    <SubHeader />
    <main :class="$style.welcomeTextWrapper"><WelcomeText /></main>
    <Footer3 />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import SubHeader from "../components/SubHeader.vue";
  import WelcomeText from "../components/WelcomeText.vue";
  import Footer3 from "../components/Footer3.vue";

  export default defineComponent({
    name: "AboutUs1",
    components: { SubHeader, WelcomeText, Footer3 },
  });
</script>
<style module>
  .welcomeTextWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .aboutUs {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 51px 0px;
    letter-spacing: normal;
  }

  @media screen and (max-width: 925px) {
    .aboutUs {
      gap: 25px 0px;
    }
  }
</style>
