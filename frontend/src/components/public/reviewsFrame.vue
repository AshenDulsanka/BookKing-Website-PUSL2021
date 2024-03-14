<template>
  <div :class="$style.frameParent">
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <img :class="$style.starRatingGroup" alt="" :src="image"/>
      <div :class="$style.greatValueForMoneyTheRooWrapper">
        <div :class="$style.greatValueFor">
          {{reviewText}}
        </div>
      </div>
    </div>
    <div :class="$style.rectangleGroup">
      <div :class="$style.frameItem" />
      <img :class="$style.reviewSectionIcon"alt="" :src="image"/>
      <div :class="$style.greatValueForMoneyTheRooContainer">
        <div :class="$style.greatValueFor1">
          {{reviewText}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "reviewsFrame",
    props: {
      reviewText: { type: String },
      image: { type: String },
    },
  });
</script>

<style module>
  .frameChild {
    height: 257px;
    width: 771px;
    position: relative;
    background-color: var(--color-khaki);
    display: none;
    max-width: 100%;
  }
  .starRatingGroup {
    height: 106px;
    width: 106px;
    position: relative;
    border-radius: 50%;
    object-fit: cover;
    z-index: 1;
  }
  .greatValueFor {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.09em;
    z-index: 1;
  }
  .greatValueForMoneyTheRooWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) 0px 0px;
    box-sizing: border-box;
    min-width: 322px;
    max-width: 100%;
  }
  .rectangleParent {
    flex: 1;
    background-color: var(--color-khaki);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-56xl) var(--padding-38xl) var(--padding-57xl);
    box-sizing: border-box;
    gap: 0px 55px;
    min-width: 501px;
    max-width: 100%;
  }
  .frameItem {
    height: 257px;
    width: 771px;
    position: relative;
    background-color: var(--color-khaki);
    display: none;
    max-width: 100%;
  }
  .reviewSectionIcon {
    height: 106px;
    width: 106px;
    position: relative;
    border-radius: 50%;
    object-fit: cover;
    z-index: 1;
  }
  .greatValueFor1 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.09em;
    z-index: 1;
  }
  .greatValueForMoneyTheRooContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xs) 0px 0px;
    box-sizing: border-box;
    min-width: 322px;
    max-width: 100%;
  }
  .rectangleGroup {
    flex: 1;
    background-color: var(--color-khaki);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-56xl) var(--padding-38xl) var(--padding-57xl);
    box-sizing: border-box;
    gap: 0px 55px;
    min-width: 501px;
    max-width: 100%;
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 55px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 925px) {
    .rectangleParent {
      flex-wrap: wrap;
      padding-left: var(--padding-9xl);
      padding-right: var(--padding-9xl);
      box-sizing: border-box;
      min-width: 100%;
    }

    .rectangleGroup {
      flex-wrap: wrap;
      padding-left: var(--padding-9xl);
      padding-right: var(--padding-9xl);
      box-sizing: border-box;
      min-width: 100%;
    }

    .frameParent {
      gap: 0px 27px;
    }
  }
  @media screen and (max-width: 450px) {
    .rectangleParent {
      gap: 0px 27px;
    }

    .rectangleGroup {
      gap: 0px 27px;
    }
  }
</style>
