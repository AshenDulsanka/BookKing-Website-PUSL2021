<template>
  <section :class="$style.sigiriatourFrame">
    <div :class="$style.line">
      <div :class="$style.sigiriyaTourFrame" />
      <div :class="$style.bookNowButtonParent">
        <button :class="$style.bookNowButton">
          <div :class="$style.bookNowButtonChild" />
          <b :class="$style.bookNow">Book NOW</b>
        </button>
        <div :class="$style.locationFrame">
          <div :class="$style.pricePerPersonFrame">
            <b :class="$style.location">Location</b>
            <b :class="$style.location1">Location</b>
          </div>
          <div :class="$style.seegiriyaLocation">
            <div :class="$style.seegiriyaSrilanka">Seegiriya SriLanka</div>
            <div :class="$style.seegiriyaSrilanka1">Seegiriya SriLanka</div>
          </div>
        </div>
        <div :class="$style.locationFrame1">
          <div :class="$style.pricePerPersonParent">
            <b :class="$style.pricePerPerson">Price per person</b>
            <b :class="$style.pricePerPerson1">Price per person</b>
          </div>
          <div :class="$style.rs150000Parent">
            <div :class="$style.rs150000">Rs.150 000</div>
            <div :class="$style.rs1500001">Rs.150 000</div>
          </div>
        </div>
        <div :class="$style.sigiriyaTour">
          <h1 :class="$style.sigiriyaTour1">Sigiriya tour</h1>
          <h1 :class="$style.sigiriyaTour2">Sigiriya tour</h1>
        </div>
        <div :class="$style.embarkOnJourneyFrame">
          <div :class="$style.embarkOnAContainer">
            <p :class="$style.embarkOnA">
              "Embark on a captivating journey to Sigiriya, a UNESCO World
              Heritage site in Sri Lanka. Discover the ancient rock fortress
              rising majestically above lush landscapes, adorned with intricate
              frescoes and the iconic Lion's Paw entrance. Immerse yourself in
              the rich history as you explore the archaeological wonders, from
              the royal gardens to the summit with breathtaking panoramic views.
              A Sigiriya tour promises a blend of cultural marvels and natural
              beauty, offering an unforgettable experience for history
              enthusiasts and nature lovers alike."
            </p>
          </div>
          <div :class="$style.embarkOnAContainer1">
            <p :class="$style.embarkOnA1">
              "Embark on a captivating journey to Sigiriya, a UNESCO World
              Heritage site in Sri Lanka. Discover the ancient rock fortress
              rising majestically above lush landscapes, adorned with intricate
              frescoes and the iconic Lion's Paw entrance. Immerse yourself in
              the rich history as you explore the archaeological wonders, from
              the royal gardens to the summit with breathtaking panoramic views.
              A Sigiriya tour promises a blend of cultural marvels and natural
              beauty, offering an unforgettable experience for history
              enthusiasts and nature lovers alike."
            </p>
          </div>
        </div>
        <div :class="$style.singleProductPage">
          <div :class="$style.vipAccessToContainer">
            <ul :class="$style.vipAccessToSigiriyaFortres">
              <li :class="$style.vipAccessTo">
                VIP Access to Sigiriya Fortress
              </li>
              <li :class="$style.scenicHelicopterRide">
                Scenic Helicopter Ride Upgrade
              </li>
              <li :class="$style.culturalInsightsWith">
                Cultural Insights with Knowledgeable Guides
              </li>
              <li :class="$style.gourmetPicnicAt">
                Gourmet Picnic at Royal Gardens
              </li>
              <li :class="$style.exclusiveSunsetTours">
                Exclusive Sunset Tours
              </li>
              <li>Luxury Accommodation Packages</li>
            </ul>
          </div>
          <div :class="$style.vipAccessToContainer1">
            <ul :class="$style.vipAccessToSigiriyaFortres1">
              <li :class="$style.vipAccessTo1">
                VIP Access to Sigiriya Fortress
              </li>
              <li :class="$style.scenicHelicopterRide1">
                Scenic Helicopter Ride Upgrade
              </li>
              <li :class="$style.culturalInsightsWith1">
                Cultural Insights with Knowledgeable Guides
              </li>
              <li :class="$style.gourmetPicnicAt1">
                Gourmet Picnic at Royal Gardens
              </li>
              <li :class="$style.exclusiveSunsetTours1">
                Exclusive Sunset Tours
              </li>
              <li>Luxury Accommodation Packages</li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="$style.singleProductPageFrame">
        <div :class="$style.productPageFrame">
          <h1 :class="$style.singleProductPage1">Single product Page</h1>
          <h1 :class="$style.singleProductPage2">Single product Page</h1>
        </div>
        <img
          :class="$style.contactFooterIcon"
          loading="lazy"
          alt=""
          src="../Sigiriya.png"
        />
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SigiriatourFrame",
  });
</script>
<style module>
  .sigiriyaTourFrame {
    position: absolute;
    top: 78px;
    left: 492px;
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 1px;
    height: 467px;
    z-index: 2;
  }
  .bookNowButtonChild {
    height: 36px;
    width: 449px;
    position: relative;
    border-radius: var(--br-sm);
    background-color: var(--color-yellow-100);
    display: none;
    max-width: 100%;
  }
  .bookNow {
    width: 75px;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 120.31%;
    display: flex;
    font-family: var(--font-poppins);
    color: var(--color-black);
    text-align: center;
    align-items: flex-end;
    justify-content: center;
    z-index: 2;
  }
  .bookNowButton {
    cursor: pointer;
    border: none;
    padding: var(--padding-3xs) var(--padding-xl) var(--padding-4xs)
      var(--padding-31xl);
    background-color: var(--color-yellow-100);
    position: absolute;
    top: 427px;
    left: 0px;
    border-radius: var(--br-sm);
    width: 449px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    max-width: 100%;
    z-index: 1;
  }
  .bookNowButton:hover {
    background-color: var(--color-yellow-200);
  }
  .location {
    position: relative;
    line-height: 202%;
    white-space: nowrap;
  }
  .location1 {
    position: relative;
    line-height: 202%;
    display: inline-block;
    white-space: nowrap;
    z-index: 3;
    margin-left: -60.1px;
  }
  .pricePerPersonFrame {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .seegiriyaSrilanka {
    position: relative;
    line-height: 202%;
  }
  .seegiriyaSrilanka1 {
    position: relative;
    line-height: 202%;
    z-index: 1;
    margin-left: -127px;
  }
  .seegiriyaLocation {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: -9px;
  }
  .locationFrame {
    position: absolute;
    top: 527px;
    left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .pricePerPerson {
    position: relative;
    line-height: 202%;
    z-index: 1;
  }
  .pricePerPerson1 {
    position: relative;
    line-height: 202%;
    display: inline-block;
    z-index: 3;
    margin-left: -117px;
  }
  .pricePerPersonParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .rs150000 {
    position: relative;
    line-height: 202%;
  }
  .rs1500001 {
    position: relative;
    line-height: 202%;
    z-index: 2;
    margin-left: -72px;
  }
  .rs150000Parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: -9px;
  }
  .locationFrame1 {
    position: absolute;
    top: 480px;
    left: 9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .sigiriyaTour1 {
    margin: 0;
    height: 49px;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 120.31%;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
  }
  .sigiriyaTour2 {
    margin: 0;
    height: 49px;
    flex: 1;
    position: relative;
    font-size: inherit;
    line-height: 120.31%;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    z-index: 2;
    margin-left: -240px;
  }
  .sigiriyaTour {
    position: absolute;
    top: 0px;
    left: 4px;
    width: 240px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-size-17xl);
  }
  .embarkOnA {
    margin: 0;
  }
  .embarkOnAContainer {
    align-self: stretch;
    height: 192px;
    position: relative;
    line-height: 202%;
    display: inline-block;
    flex-shrink: 0;
  }
  .embarkOnA1 {
    margin: 0;
  }
  .embarkOnAContainer1 {
    align-self: stretch;
    height: 192px;
    position: relative;
    line-height: 202%;
    display: inline-block;
    flex-shrink: 0;
    z-index: 1;
    margin-top: -192px;
  }
  .embarkOnJourneyFrame {
    position: absolute;
    top: 66px;
    left: 9px;
    width: 746px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .vipAccessTo {
    margin-bottom: 0px;
  }
  .scenicHelicopterRide {
    margin-bottom: 0px;
  }
  .culturalInsightsWith {
    margin-bottom: 0px;
  }
  .gourmetPicnicAt {
    margin-bottom: 0px;
  }
  .exclusiveSunsetTours {
    margin-bottom: 0px;
  }
  .vipAccessToSigiriyaFortres {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-lgi);
  }
  .vipAccessToContainer {
    align-self: stretch;
    position: relative;
    line-height: 202%;
    font-weight: 500;
  }
  .vipAccessTo1 {
    margin-bottom: 0px;
  }
  .scenicHelicopterRide1 {
    margin-bottom: 0px;
  }
  .culturalInsightsWith1 {
    margin-bottom: 0px;
  }
  .gourmetPicnicAt1 {
    margin-bottom: 0px;
  }
  .exclusiveSunsetTours1 {
    margin-bottom: 0px;
  }
  .vipAccessToSigiriyaFortres1 {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-lgi);
  }
  .vipAccessToContainer1 {
    align-self: stretch;
    position: relative;
    line-height: 202%;
    font-weight: 500;
    z-index: 2;
    margin-top: -171px;
  }
  .singleProductPage {
    position: absolute;
    top: 239px;
    left: 4px;
    width: 451px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .bookNowButtonParent {
    position: absolute;
    top: 46px;
    left: 508px;
    width: 755px;
    height: 574px;
    max-width: 100%;
  }
  .singleProductPage1 {
    margin: 0;
    height: 83px;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
    z-index: 1;
  }
  .singleProductPage2 {
    margin: 0;
    height: 83px;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
    z-index: 3;
    margin-left: -705px;
  }
  .productPageFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .contactFooterIcon {
    width: 457px;
    height: 340px;
    position: relative;
    object-fit: cover;
    max-width: 100%;
  }
  .singleProductPageFrame {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 705px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 39px 0px;
    max-width: 100%;
    font-size: var(--font-size-21xl);
    font-family: var(--font-tajawal);
  }
  .line {
    height: 620px;
    width: 1263px;
    position: relative;
    max-width: 100%;
  }
  .sigiriatourFrame {
    width: 1895px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 925px) {
    .sigiriyaTour1 {
      font-size: var(--font-size-10xl);
      line-height: 35px;
    }

    .sigiriyaTour2 {
      font-size: var(--font-size-10xl);
      line-height: 35px;
    }

    .singleProductPage1 {
      font-size: var(--font-size-13xl);
    }

    .singleProductPage2 {
      font-size: var(--font-size-13xl);
    }
  }
  @media screen and (max-width: 450px) {
    .sigiriyaTour1 {
      font-size: var(--font-size-3xl);
      line-height: 26px;
    }

    .sigiriyaTour2 {
      font-size: var(--font-size-3xl);
      line-height: 26px;
    }

    .singleProductPage1 {
      font-size: var(--font-size-5xl);
    }

    .singleProductPage2 {
      font-size: var(--font-size-5xl);
    }
  }
</style>
