<template>
  <div :class="$style.addPage">
    <NewHeader /><AddPageButton /><PricingFrame />
    <newfooter />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import NewHeader from "../../components/public/newheader.vue";
  import AddPageButton from "../../components/dashboard/AddPageButton.vue";
  import PricingFrame from "../../components/dashboard/PricingFrame.vue";
  import newfooter from "../../components/public/newfooter.vue";

  export default defineComponent({
    name: "AddPage",
    components: { NewHeader, AddPageButton, PricingFrame, newfooter  },
  });
</script>
<style module>
  .addPage {
    width: 100%;
    height: 1715px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 167px 0px;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1350px) {
    .addPage {
      height: auto;
      gap: 83px 0px;
    }
  }
  @media screen and (max-width: 925px) {
    .addPage {
      gap: 42px 0px;
    }
  }
</style>
