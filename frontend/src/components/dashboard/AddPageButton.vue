<template>
  <section :class="$style.addPageButton">
    <div :class="$style.headerTextContainer">
      <div :class="$style.searchSymbolFrame">
        <h1 :class="$style.addPage">Add Page</h1>
        <div :class="$style.longDescription">
          <div :class="$style.shortDescription" />
        </div>
      </div>
      <div :class="$style.priceFrame">
        <div :class="$style.locationFrame">
          <div :class="$style.vehiclesServicesFrame">
            <div :class="$style.hotelsFrame">
              <div :class="$style.hotelsFrameChild" />
              <img
                :class="$style.searchInterfaceSymbol2Icon"
                loading="lazy"
                alt=""
                src="../../../public/assets/images/addpage.png"
              />
            </div>
          </div>
          <div :class="$style.toursFrame">
            <div :class="$style.entertainmentFrame">
              <div :class="$style.eventsFrame">
                <div :class="$style.cateringFrame">
                  <input
                    :class="$style.serviceName"
                    placeholder="Service Name"
                    type="text"
                  />
                  <input :class="$style.homeServicesFrame" type="text" />
                </div>
                <div :class="$style.longDescription1">Long Description</div>
                <input :class="$style.vehicleHotelsFrame" type="text" />
              </div>
              <div :class="$style.loginTextInput">
                <div :class="$style.shortDescription1">Short Description</div>
                <div :class="$style.reviewRating">
                  <input :class="$style.contactFormFrame" type="text" />
                </div>
              </div>
              <div :class="$style.aboutUsInfoFrame">
                <div :class="$style.price">Price</div>
                <input :class="$style.footerLinksFrame" type="text" />
              </div>
            </div>
            <div :class="$style.homeServicesFrame1">
              <div :class="$style.subHeaderFrame">
                <b :class="$style.location">Location</b>
              </div>
              <input :class="$style.freelancerDetailsFrame" type="text" />
            </div>
            <div :class="$style.toursVenuesFrame">
              <div :class="$style.eventsActivitiesFrame">
                <div :class="$style.cateringMenuFrame">
                  <div :class="$style.ellipseParent">
                    <input :class="$style.frameChild" type="radio" />
                    <div :class="$style.vehicleWrapper">
                      <div :class="$style.vehicle">Vehicle</div>
                    </div>
                  </div>
                  <div :class="$style.ellipseGroup">
                    <input :class="$style.frameItem" type="radio" />
                    <div :class="$style.hotelsWrapper">
                      <div :class="$style.hotels">Hotels</div>
                    </div>
                  </div>
                  <div :class="$style.reviewSummaryFrame">
                    <input :class="$style.contactUsFormFrame" type="radio" />
                    <div :class="$style.aboutUsHistoryFrame">
                      <div :class="$style.freelancer">Freelancer</div>
                    </div>
                  </div>
                </div>
                <div :class="$style.footerFrame">
                  <div :class="$style.headerFrames">
                    <div :class="$style.subHeaderFrames">
                      <input :class="$style.servicesFrames" type="radio" />
                      <div :class="$style.vehicleHotelsFrames">
                        <div :class="$style.tours">Tours</div>
                      </div>
                    </div>
                    <div :class="$style.footerFrames">
                      <input
                        :class="$style.homeReviewAboutUsFrames"
                        type="radio"
                      />
                      <div :class="$style.contactUsFrame">
                        <div :class="$style.entertainment">Entertainment</div>
                      </div>
                    </div>
                  </div>
                  <div :class="$style.headerFrames1">
                    <div :class="$style.ellipseContainer">
                      <input :class="$style.frameInner" type="radio" />
                      <div :class="$style.venueWrapper">
                        <div :class="$style.venue">Venue</div>
                      </div>
                    </div>
                    <div :class="$style.frameDiv">
                      <input :class="$style.ellipseInput" type="radio" />
                      <div :class="$style.activitiesWrapper">
                        <div :class="$style.activities">Activities</div>
                      </div>
                    </div>
                  </div>
                  <div :class="$style.headerFrames2">
                    <div :class="$style.ellipseParent1">
                      <input :class="$style.frameChild1" type="radio" />
                      <div :class="$style.eventsWrapper">
                        <div :class="$style.events">Events</div>
                      </div>
                    </div>
                    <div :class="$style.ellipseParent2">
                      <input :class="$style.frameChild2" type="radio" />
                      <div :class="$style.cateringWrapper">
                        <div :class="$style.catering">Catering</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AddPageButton",
  });
</script>
<style module>
  .addPage {
    margin: 0;
    height: 83px;
    width: 293px;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
  }
  .shortDescription {
    align-self: stretch;
    height: 2px;
    position: relative;
    border-top: 2px solid var(--color-black);
    box-sizing: border-box;
  }
  .longDescription {
    height: 41px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-22xl) 0px 0px;
    box-sizing: border-box;
    min-width: 799px;
    max-width: 100%;
  }
  .searchSymbolFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 9px;
    max-width: 100%;
  }
  .hotelsFrameChild {
    height: 593px;
    width: 645px;
    position: relative;
    background-color: var(--color-gainsboro);
    display: none;
    max-width: 100%;
  }
  .searchInterfaceSymbol2Icon {
    height: 300px;
    width: 300px;
    position: relative;
    object-fit: contain;
    z-index: 1;
  }
  .hotelsFrame {
    align-self: stretch;
    background-color: var(--color-gainsboro);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-124xl) var(--padding-xl) var(--padding-131xl)
      var(--padding-2xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .vehiclesServicesFrame {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-2xs);
    box-sizing: border-box;
    min-width: 419px;
    max-width: 100%;
  }
  .serviceName {
    width: 113px;
    border: none;
    outline: none;
    font-weight: 600;
    font-family: var(--font-poppins);
    font-size: var(--font-size-base);
    background-color: transparent;
    height: 24px;
    position: relative;
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    padding: 0;
  }
  .homeServicesFrame {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 36px;
    position: relative;
    min-width: 250px;
  }
  .cateringFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px 0px;
  }
  .longDescription1 {
    position: relative;
    font-weight: 600;
  }
  .vehicleHotelsFrame {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 79px;
    position: relative;
    min-width: 250px;
  }
  .eventsFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.5px 0px;
  }
  .shortDescription1 {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .contactFormFrame {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    height: 79px;
    flex: 1;
    position: relative;
    min-width: 250px;
    max-width: 100%;
  }
  .reviewRating {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .loginTextInput {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-mini);
    box-sizing: border-box;
    max-width: 100%;
  }
  .price {
    position: relative;
    font-weight: 600;
    z-index: 1;
  }
  .footerLinksFrame {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 36px;
    position: relative;
    min-width: 250px;
  }
  .aboutUsInfoFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .entertainmentFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px 0px;
    max-width: 100%;
    font-size: var(--font-size-base);
  }
  .location {
    position: relative;
    line-height: 202%;
    z-index: 1;
  }
  .subHeaderFrame {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs);
  }
  .freelancerDetailsFrame {
    border: none;
    outline: none;
    background-color: var(--color-yellow-100);
    align-self: stretch;
    height: 36px;
    position: relative;
    min-width: 250px;
  }
  .homeServicesFrame1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-2xs);
  }
  .frameChild {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .vehicle {
    position: relative;
    line-height: 202%;
  }
  .vehicleWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .ellipseParent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .frameItem {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .hotels {
    position: relative;
    line-height: 202%;
  }
  .hotelsWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .ellipseGroup {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xs) 0px 0px;
    gap: 0px 13px;
  }
  .contactUsFormFrame {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .freelancer {
    position: relative;
    line-height: 202%;
  }
  .aboutUsHistoryFrame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .reviewSummaryFrame {
    width: 117px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .cateringMenuFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .servicesFrames {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .tours {
    position: relative;
    line-height: 202%;
  }
  .vehicleHotelsFrames {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .subHeaderFrames {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .homeReviewAboutUsFrames {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .entertainment {
    position: relative;
    line-height: 202%;
  }
  .contactUsFrame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .footerFrames {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .headerFrames {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px 0px;
  }
  .frameInner {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .venue {
    position: relative;
    line-height: 202%;
  }
  .venueWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .ellipseContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .ellipseInput {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .activities {
    position: relative;
    line-height: 202%;
  }
  .activitiesWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .frameDiv {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .headerFrames1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-18xl) 0px 0px;
    gap: 15px 0px;
  }
  .frameChild1 {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .events {
    position: relative;
    line-height: 202%;
  }
  .eventsWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .ellipseParent1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .frameChild2 {
    cursor: pointer;
    margin: 0;
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-gainsboro);
  }
  .catering {
    position: relative;
    line-height: 202%;
  }
  .cateringWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .ellipseParent2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 13px;
  }
  .headerFrames2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px 0px;
  }
  .footerFrame {
    width: 507px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .eventsActivitiesFrame {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 14px 0px;
    max-width: 100%;
  }
  .toursVenuesFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini);
    box-sizing: border-box;
    max-width: 100%;
  }
  .toursFrame {
    width: 556px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 28px 0px;
    min-width: 556px;
    max-width: 100%;
  }
  .locationFrame {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 0px 76px;
    max-width: 100%;
  }
  .priceFrame {
    width: 1319px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xl);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-sm);
    font-family: var(--font-poppins);
  }
  .headerTextContainer {
    width: 1552px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: 105px 0px;
    max-width: 100%;
  }
  .addPageButton {
    width: 1640px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-306xl) var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-45xl);
    color: var(--color-black);
    font-family: var(--font-tajawal);
  }

  @media screen and (max-width: 1350px) {
    .toursFrame {
      flex: 1;
    }

    .locationFrame {
      flex-wrap: wrap;
    }

    .addPageButton {
      padding-bottom: var(--padding-192xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .addPage {
      font-size: var(--font-size-32xl);
    }

    .longDescription {
      min-width: 100%;
    }

    .hotelsFrame {
      padding-top: var(--padding-74xl);
      padding-bottom: var(--padding-78xl);
      box-sizing: border-box;
    }

    .vehiclesServicesFrame {
      min-width: 100%;
    }

    .footerFrame {
      flex-wrap: wrap;
    }

    .toursFrame {
      min-width: 100%;
    }

    .locationFrame {
      gap: 0px 38px;
    }

    .headerTextContainer {
      gap: 52px 0px;
    }

    .addPageButton {
      padding-bottom: var(--padding-118xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .addPage {
      font-size: var(--font-size-19xl);
    }

    .cateringMenuFrame {
      flex-wrap: wrap;
    }

    .locationFrame {
      gap: 0px 19px;
    }

    .headerTextContainer {
      gap: 26px 0px;
    }
  }
</style>
