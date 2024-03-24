<template>
  <div :class="$style.aboutUs">
    <newheader />
    <main :class="$style.welcomeTextWrapper">
      <aboutusFrame />
    </main>
    <br>
    <br>
    
  </div>
  <newfooter />
</template>

<script>
  import { defineComponent } from "vue";
  import newheader from "../../components/public/newheader.vue";
  import aboutusFrame from "../../components/public/aboutusFrame.vue";
  import newfooter from "../../components/public/newfooter.vue";

  export default defineComponent({
    name: "AboutUs",
    components: { newheader, aboutusFrame, newfooter },
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
