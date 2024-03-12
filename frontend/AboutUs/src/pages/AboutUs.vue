<template>
  <div :class="$style.aboutUs">
    <newheader />
    <main :class="$style.welcomeTextWrapper"><WelcomeText /></main>
    <br>
    <br>
    <newfooter />
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import newheader from "@/components/newheader.vue";
  import WelcomeText from "../components/WelcomeText.vue";
  import newfooter from "@/components/newfooter.vue";

  export default defineComponent({
    name: "AboutUs",
    components: { newheader, WelcomeText, newfooter },
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
