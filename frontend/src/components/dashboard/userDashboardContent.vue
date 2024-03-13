<template>
  <section :class="$style.emailTextInput">
    <div :class="$style.editTextInput">
      <h1 :class="$style.userDashboard">User dashboard</h1>
      <div :class="$style.yourBookingsFrame">
        <div :class="$style.noBookingsAvailableText">
          <div :class="$style.lineSeparator">
            <img
              :class="$style.hotelsTextIcon"
              loading="lazy"
              alt=""
              src="../../../public/assets/logo.png"
            />
            <div :class="$style.footerFrame">
              <div :class="$style.hotelsTextLabel">
                <b :class="$style.rumethMansara">
                  <span>
                    <ul :class="$style.rumethMansara1">
                      <li>{{name}}</li>
                    </ul>
                  </span>
                </b>
                <b :class="$style.piliyandalaRdKottawaContainer">
                  <span>
                    <ul :class="$style.piliyandalaRdKottawa">
                      <li>{{address}}</li>
                    </ul>
                  </span>
                </b>
                <b :class="$style.loginTextLabelContainer">
                  <span :class="$style.loginTextLabelContainer1">
                    <ul :class="$style.ul">
                      <li>{{phoneNo}}</li>
                    </ul>
                  </span>
                </b>
                <div :class="$style.homeServicesReviewContactU">
                  <b :class="$style.rumethgayoragmailcom">
                    <span :class="$style.rumethgayoragmailcomTxt">
                      <ul :class="$style.rumethgayoragmailcom1">
                        <li>{{email}}</li>
                      </ul>
                    </span>
                  </b>
                  <div :class="$style.homeFrame">
                    <button :class="$style.servicesFrame">
                      <div :class="$style.servicesFrameChild" />
                      <b :class="$style.edit">Edit</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.contactUsFrame">
          <img :class="$style.aboutUsFrame" loading="lazy" alt="" />
          <div :class="$style.line">
            <div :class="$style.bookingFrame">
              <b :class="$style.yourBookings">
                <span :class="$style.yourBookingsTxtContainer">
                  <ul :class="$style.yourBookings1">
                    <li>Your bookings</li>
                  </ul>
                </span>
              </b>
              <div :class="$style.noBookingsText">
                <div :class="$style.noBookingsAvailable">
                  No bookings available
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
    name: "userDashboardContent",
    props: {
      name: { type: String },
      address: { type: String },
      phoneNo: { type: String },
      email: { type: String },
    },
  });
</script>
<style module>
  .userDashboard {
    margin: 0;
    width: 306px;
    height: 42px;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
  }
  .hotelsTextIcon {
    height: 284px;
    width: 270px;
    position: relative;
    border-radius: 50%;
    object-fit: cover;
  }
  .rumethMansara1 {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .rumethMansara {
    align-self: stretch;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
  }
  .piliyandalaRdKottawa {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .piliyandalaRdKottawaContainer {
    align-self: stretch;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
  }
  .ul {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .loginTextLabelContainer1 {
    line-break: anywhere;
  }
  .loginTextLabelContainer {
    align-self: stretch;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
  }
  .rumethgayoragmailcom1 {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .rumethgayoragmailcomTxt {
    line-break: anywhere;
  }
  .rumethgayoragmailcom {
    align-self: stretch;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .servicesFrameChild {
    height: 38px;
    width: 71px;
    position: relative;
    border-radius: var(--br-9xs);
    background-color: var(--color-yellow-100);
    display: none;
  }
  .edit {
    position: relative;
    font-size: var(--font-size-base);
    text-decoration: underline;
    line-height: 15px;
    font-family: var(--font-tajawal);
    color: var(--color-black);
    text-align: left;
    z-index: 1;
  }
  .servicesFrame {
    cursor: pointer;
    border: none;
    padding: var(--padding-xs) var(--padding-2xl) var(--padding-2xs);
    background-color: var(--color-yellow-100);
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-decoration: none;
  }
  .servicesFrame:hover {
    background-color: var(--color-yellow-200);
  }
  .homeFrame {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-10xs) 0px var(--padding-9xs-5);
  }
  .homeServicesReviewContactU {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 27px 0px;
  }
  .hotelsTextLabel {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 42px 0px;
  }
  .footerFrame {
    width: 339px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xl) 0px 0px;
    box-sizing: border-box;
    min-width: 339px;
    max-width: 100%;
  }
  .lineSeparator {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .noBookingsAvailableText {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-22xl) 0px 0px;
    box-sizing: border-box;
    min-width: 462px;
    max-width: 100%;
  }
  .aboutUsFrame {
    height: 458px;
    width: 2.9px;
    position: relative;
    object-fit: contain;
  }
  .yourBookings1 {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    padding-left: var(--padding-2xl);
  }
  .yourBookingsTxtContainer {
    width: 100%;
  }
  .yourBookings {
    width: 339px;
    height: 26px;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    max-width: 100%;
  }
  .noBookingsAvailable {
    height: 26px;
    flex: 1;
    position: relative;
    line-height: 120.31%;
    display: flex;
    align-items: flex-end;
    max-width: 100%;
  }
  .noBookingsText {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-base);
    box-sizing: border-box;
    max-width: 100%;
  }
  .bookingFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 19px 0px;
    max-width: 100%;
  }
  .line {
    width: 355px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-mini) 0px 0px;
    box-sizing: border-box;
    max-width: calc(100% - 23px);
  }
  .contactUsFrame {
    width: 477px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    min-width: 477px;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .yourBookingsFrame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 160px;
    max-width: 100%;
    font-size: var(--font-size-base);
  }
  .editTextInput {
    width: 1348px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 65px 0px;
    max-width: 100%;
  }
  .emailTextInput {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl) var(--padding-11xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-tajawal);
  }

  @media screen and (max-width: 1350px) {
    .contactUsFrame {
      flex: 1;
    }

    .yourBookingsFrame {
      flex-wrap: wrap;
      gap: 0px 80px;
    }
  }
  @media screen and (max-width: 925px) {
    .userDashboard {
      font-size: var(--font-size-13xl);
    }

    .hotelsTextIcon {
      flex: 1;
    }

    .footerFrame {
      flex: 1;
    }

    .lineSeparator {
      flex-wrap: wrap;
    }

    .noBookingsAvailableText {
      min-width: 100%;
    }

    .contactUsFrame {
      min-width: 100%;
    }

    .yourBookingsFrame {
      gap: 0px 40px;
    }

    .editTextInput {
      gap: 32px 0px;
    }
  }
  @media screen and (max-width: 450px) {
    .userDashboard {
      font-size: var(--font-size-5xl);
    }

    .hotelsTextLabel {
      gap: 21px 0px;
    }

    .footerFrame {
      min-width: 100%;
    }

    .noBookingsAvailableText {
      padding-top: var(--padding-8xl);
      box-sizing: border-box;
    }

    .yourBookingsFrame {
      gap: 0px 20px;
    }

    .editTextInput {
      gap: 16px 0px;
    }
  }
</style>
