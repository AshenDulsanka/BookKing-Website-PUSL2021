<template>
  <div :class="$style.eventsFrame">
    <div :class="$style.toursFrame">
      <div :class="$style.toursFrameChild" />
      <div :class="$style.loginFrame">
        <img
          :class="$style.reviewFrameIcon"
          alt=""
          src="../Kingsbury.png"
        />
      </div>
      <div :class="$style.contactUsFrame" />
      <div :class="$style.aboutUsFrame">
        <div :class="$style.royalHotelParent">
          <div :class="$style.royalHotel">
            <div :class="$style.rWrapper">
              <b :class="$style.r">Raffles</b>
            </div>
            <div :class="$style.belowIsAn">
              Below is an example of a good car description for a higher-mileage
              car that isn't in perfect condition but is in excellent mechanical
              shape: Selling to get a family car — just had first child. 33 MPG
              and runs great. All scheduled maintenance, including regular oil
              changes.Below is an example of a good car description for a
              higher-mileage car that isn't in perfect condition but is in
              excellent mechanical shape: Selling to get a family car — just had
              first child. 33 MPG and runs great. All scheduled maintenance,
              including regular oil changes.
            </div>
          </div>
          <button :class="$style.rectangleParent">
            <div :class="$style.frameChild" />
            <b :class="$style.bookNow">Book NOW</b>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "EventsFrame",
  });
</script>
<style module>
  .toursFrameChild {
    height: 347px;
    width: 1736px;
    position: relative;
    background-color: var(--color-white);
    display: none;
    max-width: 100%;
  }
  .reviewFrameIcon {
    width: 160px;
    height: 160px;
    position: relative;
    object-fit: cover;
    z-index: 1;
  }
  .loginFrame {
    width: 221px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-28xl) 0px 0px;
    box-sizing: border-box;
  }
  .contactUsFrame {
    height: 287px;
    width: 1px;
    position: relative;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 1;
  }
  .r {
    height: 47px;
    flex: 1;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    z-index: 1;
  }
  .rWrapper {
    width: 296px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs);
    box-sizing: border-box;
  }
  .belowIsAn {
    align-self: stretch;
    position: relative;
    line-height: 120.31%;
    font-weight: 300;
    z-index: 2;
  }
  .royalHotel {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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
  .rectangleParent:hover {
    background-color: var(--color-yellow-200);
  }
  .royalHotelParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 65px 0px;
    max-width: 100%;
  }
  .aboutUsFrame {
    width: 1117px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-13xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
  }
  .toursFrame {
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
  .eventsFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-11xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1825px) {
    .contactUsFrame {
      width: 100%;
      height: 1px;
    }

    .toursFrame {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1350px) {
    .royalHotelParent {
      gap: 32px 0px;
    }

    .toursFrame {
      padding-left: var(--padding-33xl);
      padding-right: var(--padding-33xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .royalHotelParent {
      gap: 16px 0px;
    }

    .toursFrame {
      gap: 0px 28px;
      padding-left: var(--padding-7xl);
      padding-right: var(--padding-7xl);
      box-sizing: border-box;
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
