<template>
  <div :class="$style.frameWrapper" :style="frameDivStyle">
    <div :class="$style.rectangleParent">
      <div :class="$style.frameChild" />
      <div :class="$style.rectangleWrapper">
        <a :href="`/product/${serviceID}`">
          <img :class="$style.frameItem" alt="" :src="image" />
        </a>
      </div>
      <div :class="$style.frameInner" />
      <div :class="$style.frameContainer" :style="frameDiv1Style">
        <div :class="$style.frameParent">
          <div :class="$style.hotelNameParent" :style="frameDiv2Style">
            <b :class="$style.hotelName">{{serviceName}}</b>
            <br>
            <div :class="$style.belowIsAn">{{belowIsAn}}</div> 
            <br>
            <b :class="$style.hotelName">Price: {{price}} per day</b>
          </div>
          <button :class="$style.rectangleGroup">
            <div :class="$style.rectangleDiv" />
            <a :href="`/product/${serviceID}`"><b :class="$style.bookNow">Book Now</b></a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "serviceFrame",
    props: {
      serviceName: { type: String },
      price: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propPadding1: { type: [Object, Array, String, Number, Boolean] },
      propGap: { type: String },
      belowIsAn: { type: String },
      image: { type: String },
      serviceID: { type: String },
    },
    computed: {
      frameDivStyle() {
        return {
          padding: this.propPadding,
        };
      },
      frameDiv1Style() {
        return {
          padding: this.propPadding1,
        };
      },
      frameDiv2Style() {
        return {
          gap: this.propGap,
        };
      },
    },
  });
</script>

<style module>
  .frameChild {
    height: 347px;
    width: 1736px;
    position: relative;
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .frameItem {
    width: 160px;
    height: 160px;
    position: relative;
    object-fit: cover;
    z-index: 1;
  }
  .rectangleWrapper {
    width: 221px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-28xl) 0px 0px;
    box-sizing: border-box;
  }
  .frameInner {
    height: 287px;
    width: 1px;
    position: relative;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 1;
  }
  .hotelName {
    position: relative;
    line-height: 120.31%;
    z-index: 1;
  }
  .belowIsAn {
    align-self: stretch;
    position: relative;
    line-height: 120.31%;
    font-weight: 300;
    z-index: 1;
  }
  .hotelNameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px 0px;
  }
  .rectangleDiv {
    height: 36px;
    width: 449px;
    position: relative;
    border-radius: var(--br-sm);
    background-color: var(--color-yellow-100);
    display: none;
    max-width: 100%;
  }
  .bookNow {
    flex: 1;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 120.31%;
    font-family: var(--font-poppins);
    color: var(--color-black);
    text-align: center;
    z-index: 1;
  }
  .rectangleGroup {
    cursor: pointer;
    border: none;
    padding: var(--padding-3xs) var(--padding-180xl) var(--padding-4xs)
      var(--padding-156xl);
    background-color: var(--color-yellow-100);
    width: 449px;
    border-radius: var(--br-sm);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    max-width: 100%;
    z-index: 1;
  }
  .rectangleGroup:hover {
    background-color: var(--color-yellow-200);
  }
  .frameParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 65px 0px;
    max-width: 100%;
  }
  .frameContainer {
    width: 1117px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-35xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
  }
  .rectangleParent {
    flex: 1;
    background-color: var(--color-white);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xl) var(--padding-86xl) var(--padding-12xl);
    box-sizing: border-box;
    gap: 0px 57px;
    max-width: 100%;
  }
  .frameWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs) 0px var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1825px) {
    .frameInner {
      width: 100%;
      height: 1px;
    }

    .rectangleParent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1350px) {
    .frameParent {
      gap: 32px 0px;
    }

    .rectangleParent {
      padding-left: var(--padding-33xl);
      padding-right: var(--padding-33xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .frameParent {
      gap: 16px 0px;
    }

    .rectangleParent {
      gap: 0px 28px;
      padding-left: var(--padding-7xl);
      padding-right: var(--padding-7xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .rectangleGroup {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
