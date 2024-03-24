<template>
  <div :class="$style.hotels">
    <div :class="$style.hotelsChild" />
    <newHeader />
    <main :class="$style.hotelsInner">
      <section :class="$style.frameParent">
        <div :class="$style.frameWrapper">
          <div :class="$style.frameGroup">
            <h1 :class="$style.hotels2">Vehicles</h1>
          </div>
        </div>
          
        <!-- new vehicle frame starts here -->
        <serviceFrame
          v-for="vehicle in vehicles"
          :key="vehicle.SID"
          :serviceName="vehicle.Name"
          :price="vehicle.Price"
          :propPadding="'0px 0px 0px var(--padding-5xs)'"
          :propPadding1="'var(--padding-35xl) 0px 0px'"
          :propGap="'8px 0px'"
          :belowIsAn="vehicle.ShortDescription"
          :image="`../../../public/uploads/${vehicle.Image}`"
        />
        <div :class="$style.lineWrapper1">
          <div :class="$style.frameChild1" />
        </div>
        <!-- new vehicle frame ends here -->
      </section>
    </main>    
  </div>
  <newfooter />
</template>
  
  <script>
    import { defineComponent, onMounted } from "vue";
  
    import newHeader from "../../components/public/newheader.vue";
    import serviceFrame from "../../components/public/serviceFrame.vue";
    import newfooter from "../../components/public/newfooter.vue";
    import getVehicles from "../../services/vehicleApi.js"
  
    export default defineComponent({
      name: "Vehicles",
      components: { newHeader, serviceFrame, newfooter },
  
      setup() {
        const { vehicles, error, getAllVehicles } = getVehicles()
  
        onMounted(getAllVehicles)
  
        return { vehicles, error }
      }
    });
  </script>
  
  <style module>
    .hotelsChild {
      width: 1736px;
      height: 347px;
      position: relative;
      background-color: var(--color-white);
      display: none;
      max-width: 100%;
    }
    .hotels1 {
      width: 441px;
      position: relative;
      display: inline-block;
      flex-shrink: 0;
      max-width: 100%;
    }
    .hotelsWrapper {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
      max-width: 100%;
    }
    .hotels2 {
      margin: 0;
      width: 412px;
      height: 45.49px;
      position: relative;
      font-size: var(--font-size-21xl);
      font-weight: 700;
      font-family: inherit;
      color: var(--color-black);
      display: inline-block;
      flex-shrink: 0;
      max-width: 100%;
      z-index: 1;
    }
    .frameGroup {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 28.36px 0px;
      max-width: 100%;
    }
    .frameWrapper {
      width: 628px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-40xl) 75.85499999999956px;
      box-sizing: border-box;
      max-width: 100%;
      color: var(--color-white);
      font-family: var(--font-tajawal);
    }
    .frameChild {
      height: 1px;
      flex: 1;
      position: relative;
      border-top: 1px solid var(--color-black);
      box-sizing: border-box;
      max-width: 100%;
    }
    .lineWrapper {
      width: 1670px;
      height: 15px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 0px var(--padding-mini);
      box-sizing: border-box;
      max-width: 100%;
    }
    .frameItem {
      height: 1px;
      flex: 1;
      position: relative;
      border-top: 1px solid var(--color-black);
      box-sizing: border-box;
      max-width: 100%;
    }
    .lineContainer {
      width: 1670px;
      height: 15px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 0px var(--padding-mini);
      box-sizing: border-box;
      max-width: 100%;
    }
    .palaceHotelChild {
      height: 347px;
      width: 1736px;
      position: relative;
      background-color: var(--color-white);
      display: none;
      max-width: 100%;
    }
    .frameInner {
      width: 160px;
      height: 160px;
      position: relative;
      object-fit: cover;
      z-index: 1;
    }
    .palaceHotelInner {
      width: 223px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-28xl) 0px 0px;
      box-sizing: border-box;
    }
    .majesticHotel {
      height: 287px;
      width: 1px;
      position: relative;
      border-right: 1px solid var(--color-black);
      box-sizing: border-box;
      z-index: 1;
    }
    .r {
      width: 292px;
      height: 47px;
      position: relative;
      line-height: 120.31%;
      display: flex;
      align-items: flex-end;
      flex-shrink: 0;
      z-index: 1;
    }
    .belowIsAn {
      flex: 1;
      position: relative;
      line-height: 120.31%;
      font-weight: 300;
      display: inline-block;
      max-width: 100%;
      z-index: 2;
    }
    .belowIsAnExampleOfAGoodWrapper {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 0px 0px var(--padding-11xs);
      box-sizing: border-box;
      max-width: 100%;
    }
    .budgetHostels {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      max-width: 100%;
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
    .groupFrame {
      width: 453px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-11xs);
      box-sizing: border-box;
      max-width: 100%;
    }
    .budgetHostelsParent {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 65px 0px;
      max-width: 100%;
    }
    .frameDiv {
      width: 1119px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-13xl) 0px 0px;
      box-sizing: border-box;
      max-width: 100%;
      flex-shrink: 0;
    }
    .palaceHotel {
      flex: 1;
      background-color: var(--color-white);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-10xl) var(--padding-86xl) var(--padding-12xl);
      box-sizing: border-box;
      gap: 0px 55px;
      max-width: 100%;
    }
    .palaceHotelWrapper {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-9xs);
      box-sizing: border-box;
      max-width: 100%;
    }
    .lineDiv {
      height: 1px;
      flex: 1;
      position: relative;
      border-top: 1px solid var(--color-black);
      box-sizing: border-box;
      max-width: 100%;
    }
    .lineFrame {
      width: 1674px;
      height: 15px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-12xs) var(--padding-mini) var(--padding-11xs);
      box-sizing: border-box;
      max-width: 100%;
    }
    .frameChild1 {
      height: 1px;
      flex: 1;
      position: relative;
      border-top: 1px solid var(--color-black);
      box-sizing: border-box;
      max-width: 100%;
    }
    .lineWrapper1 {
      width: 1678px;
      height: 15px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-10xs) var(--padding-mini) var(--padding-9xs);
      box-sizing: border-box;
      max-width: 100%;
    }
    .frameChild2 {
      height: 1px;
      flex: 1;
      position: relative;
      border-top: 1px solid var(--color-black);
      box-sizing: border-box;
      max-width: 100%;
    }
    .lineWrapper2 {
      width: 1682px;
      height: 15px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-8xs) var(--padding-mini) var(--padding-7xs);
      box-sizing: border-box;
      max-width: 100%;
    }
    .frameChild3 {
      height: 1px;
      flex: 1;
      position: relative;
      border-top: 1px solid var(--color-black);
      box-sizing: border-box;
      max-width: 100%;
      z-index: 1;
    }
    .lineWrapper3 {
      width: 1682px;
      height: 0px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-8xs) 0px var(--padding-7xs);
      box-sizing: border-box;
      max-width: 100%;
    }
    .footerLinksIcon {
      width: 160px;
      height: 160px;
      position: relative;
      object-fit: cover;
      z-index: 1;
    }
    .socialMediaIcons {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: var(--padding-28xl) 0px 0px;
    }
    .logoContainerChild {
      align-self: stretch;
      width: 1px;
      position: relative;
      border-right: 1px solid var(--color-black);
      box-sizing: border-box;
      z-index: 1;
    }
    .logoContainer {
      height: 287px;
      width: 278px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: var(--gap-xl);
    }
    .laMamounia {
      position: relative;
      line-height: 120.31%;
      z-index: 2;
    }
    .belowIsAn1 {
      align-self: stretch;
      position: relative;
      line-height: 120.31%;
      font-weight: 300;
      z-index: 1;
      margin-top: -3px;
    }
    .ritzFrame {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .frameChild4 {
      height: 36px;
      width: 449px;
      position: relative;
      border-radius: var(--br-sm);
      background-color: var(--color-yellow-100);
      display: none;
      max-width: 100%;
    }
    .iWantThis {
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
      padding: var(--padding-3xs) var(--padding-181xl) var(--padding-4xs)
        var(--padding-156xl);
      background-color: var(--color-yellow-100);
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
    .hotelDescription {
      align-self: stretch;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 65px 0px;
      max-width: 100%;
    }
    .hotelDescriptionWrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px 0px var(--padding-19xl);
      box-sizing: border-box;
      min-width: 726px;
      max-width: 100%;
    }
    .footerLine {
      width: 1452px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 0px 57px;
      max-width: 100%;
    }
    .footerCTA {
      width: 1700px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      padding: 0px var(--padding-xl) var(--padding-12xl);
      box-sizing: border-box;
      max-width: 100%;
    }
    .frameChild5 {
      height: 1px;
      flex: 1;
      position: relative;
      border-top: 1px solid var(--color-black);
      box-sizing: border-box;
      max-width: 100%;
    }
    .lineWrapper4 {
      width: 1704px;
      height: 0px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px var(--padding-base) 0px var(--padding-mid);
      box-sizing: border-box;
      max-width: 100%;
    }
    .frameParent {
      width: 1744px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 21px 0px;
      max-width: 100%;
      text-align: left;
      font-size: var(--font-size-sm);
      color: var(--color-black);
      font-family: var(--font-poppins);
    }
    .hotelsInner {
      align-self: stretch;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      padding: 0px var(--padding-xl) var(--padding-23xl);
      box-sizing: border-box;
      max-width: 100%;
      flex-shrink: 0;
    }
    .hotelsItem {
      width: 1202px;
      height: 347px;
      position: relative;
      background-color: var(--color-white);
      display: none;
      max-width: 100%;
    }
    .hotels {
      width: 100%;
      position: relative;
      background-color: var(--color-white);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 52px 0px;
      letter-spacing: normal;
    }
  
    @media screen and (max-width: 1825px) {
      .majesticHotel {
        width: 100%;
        height: 1px;
      }
  
      .palaceHotel {
        flex-wrap: wrap;
      }
    }
    @media screen and (max-width: 1350px) {
      .budgetHostelsParent {
        gap: 32px 0px;
      }
  
      .palaceHotel {
        padding-left: var(--padding-33xl);
        padding-right: var(--padding-33xl);
        box-sizing: border-box;
      }
  
      .hotelDescription {
        gap: 32px 0px;
      }
  
      .hotelsInner {
        padding-bottom: var(--padding-xl);
        box-sizing: border-box;
      }
    }
    @media screen and (max-width: 925px) {
      .hotels2 {
        font-size: var(--font-size-13xl);
      }
  
      .frameWrapper {
        padding-left: var(--padding-10xl);
        padding-right: var(--padding-10xl);
        box-sizing: border-box;
      }
  
      .budgetHostelsParent {
        gap: 16px 0px;
      }
  
      .palaceHotel {
        gap: 0px 27px;
        padding-left: var(--padding-7xl);
        padding-right: var(--padding-7xl);
        box-sizing: border-box;
      }
  
      .hotelDescription {
        gap: 16px 0px;
      }
  
      .hotelDescriptionWrapper {
        min-width: 100%;
      }
  
      .footerLine {
        gap: 0px 28px;
      }
  
      .hotels {
        gap: 26px 0px;
      }
    }
    @media screen and (max-width: 450px) {
      .hotels2 {
        font-size: var(--font-size-5xl);
      }
  
      .rectangleParent {
        padding-left: var(--padding-xl);
        padding-right: var(--padding-xl);
        box-sizing: border-box;
      }
  
      .rectangleGroup {
        padding-left: var(--padding-xl);
        padding-right: var(--padding-xl);
        box-sizing: border-box;
      }
    }
  </style>@/components/NewHeader.vue../components/serviceFrame.vue
  