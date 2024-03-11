<template>
  <div :class="$style.mainContent">
    <div :class="$style.hotelName">
      <div :class="$style.subTitle">
        <div :class="$style.ritzHotel">
          <img
            :class="$style.bookingCTA"
            loading="lazy"
            alt=""
            src="../Bristol.png"
          />
        </div>
        <div :class="$style.bristolHotel" />
      </div>
      <div :class="$style.headerLine">
        <div :class="$style.carouselFrame">
          <div :class="$style.hotelDetails">
            <b :class="$style.bristol">Bristol</b>
            <div :class="$style.description">
              <div :class="$style.belowIsAn">
                Below is an example of a good car description for a
                higher-mileage car that isn't in perfect condition but is in
                excellent mechanical shape: Selling to get a family car — just
                had first child. 33 MPG and runs great. All scheduled
                maintenance, including regular oil changes.Below is an example
                of a good car description for a higher-mileage car that isn't in
                perfect condition but is in excellent mechanical shape: Selling
                to get a family car — just had first child. 33 MPG and runs
                great. All scheduled maintenance, including regular oil changes.
              </div>
            </div>
          </div>
          <div :class="$style.hotelsListing">
            <button :class="$style.rectangleParent">
              <div :class="$style.frameChild" />
              <b :class="$style.bookNow">Book NOW</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MainContent",
  });
</script>
<style module>
  .bookingCTA {
    width: 160px;
    height: 160px;
    position: relative;
    object-fit: cover;
  }
  .ritzHotel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-28xl) 0px 0px;
  }
  .bristolHotel {
    align-self: stretch;
    width: 1px;
    position: relative;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 1;
  }
  .subTitle {
    height: 287px;
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .bristol {
    width: 292px;
    height: 47px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    z-index: 2;
  }
  .belowIsAn {
    flex: 1;
    position: relative;
    line-height: 120.31%;
    font-weight: 300;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .description {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-10xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .hotelDetails {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .frameChild {
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
  .rectangleParent {
    cursor: pointer;
    border: none;
    padding: var(--padding-3xs) var(--padding-180xl) var(--padding-4xs)
      var(--padding-156xl);
    background-color: var(--color-yellow-100);
    flex: 1;
    border-radius: var(--br-sm);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    max-width: 100%;
    z-index: 1;
  }
  .rectangleParent:hover {
    background-color: var(--color-yellow-200);
  }
  .hotelsListing {
    width: 455px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-10xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .carouselFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 65px 0px;
    max-width: 100%;
  }
  .headerLine {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-13xl) 0px 0px;
    box-sizing: border-box;
    min-width: 728px;
    max-width: 100%;
  }
  .hotelName {
    width: 1452px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 54px;
    max-width: 100%;
  }
  .mainContent {
    width: 1666px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) var(--padding-12xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1350px) {
    .carouselFrame {
      gap: 32px 0px;
    }
  }
  @media screen and (max-width: 925px) {
    .carouselFrame {
      gap: 16px 0px;
    }

    .headerLine {
      min-width: 100%;
    }

    .hotelName {
      gap: 0px 27px;
    }
  }
  @media screen and (max-width: 450px) {
    .rectangleParent {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
