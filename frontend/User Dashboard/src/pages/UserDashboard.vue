<template>
  <div :class="$style.userDashboard">
    <newheader />
      <main :class="$style.rumethMansaraPiliyandalaRd">
      <EmailTextInput />
      
    </main>
    
  </div>

  <newfooter />

</template>
<script>
  import { defineComponent } from "vue";
  
  import EmailTextInput from "../components/EmailTextInput.vue";
  
  import newfooter from "@/components/newfooter.vue";
  import newheader from "@/components/newheader.vue";

  export default defineComponent({
    name: "UserDashboard",
    components: { newheader ,EmailTextInput,  newfooter },
  });
</script>
<style module>
  .rumethMansaraPiliyandalaRd {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 1390px;
    box-sizing: border-box;
    gap: 19px 0px;
    max-width: 100%;
    flex-shrink: 0;
  }
  .userDashboard {
    width: 100%;
    height: 1024px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 161px 0px;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1350px) {
    .rumethMansaraPiliyandalaRd {
      padding-bottom: 903px;
      box-sizing: border-box;
    }

    .userDashboard {
      height: auto;
      gap: 80px 0px;
    }
  }
  @media screen and (max-width: 925px) {
    .rumethMansaraPiliyandalaRd {
      padding-bottom: 587px;
      box-sizing: border-box;
    }

    .userDashboard {
      gap: 40px 0px;
    }
  }
  @media screen and (max-width: 450px) {
    .rumethMansaraPiliyandalaRd {
      padding-bottom: 382px;
      box-sizing: border-box;
    }
  }
</style>
