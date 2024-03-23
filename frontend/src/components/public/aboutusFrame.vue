<template>
  <section :class="$style.welcomeText">
    <h1 :class="$style.aboutUs">About us</h1>
    <br>
    <div :class="$style.collaborationImage">
      <div :class="$style.journeyText">
        <div :class="$style.image1Parent">
          <img
            :class="$style.image1Icon"
            loading="lazy"
            alt=""
            src="../../../public/assets/images/scenery1.png"
          />
          <div :class="$style.welcomeToYourContainer">
            <p :class="$style.welcomeToYour">
              Welcome to BookKing, where we redefine the way you
              experience travel. Established with a commitment to elevate your
              journey, we take pride in being your go-to platform for
              discovering and booking accommodations that align with your unique
              preferences. At the heart of our mission is a passion for curating
              exceptional stays that transcend mere lodging, transforming your
              travel moments into unforgettable memories.
            </p>
            <p :class="$style.ourUserCentricPlatform">
              Our user-centric platform is designed to streamline the booking
              process, offering you a hassle-free and intuitive experience.
              Navigating through our extensive selection of accommodations,
              you'll find a diverse array of options, from cozy boutique hotels
              to luxurious resorts and charming vacation rentals. We believe in
              catering to the varied tastes and needs of our discerning
              travelers, ensuring there's something for every
              wanderlust-inspired soul.
            </p>
          </div>
        </div>
        <div :class="$style.journeyTextInner">
          <div :class="$style.footerFramesParent">
            <div :class="$style.footerFrames">
              <div :class="$style.collaboratingWithAContainer">
                <p :class="$style.collaboratingWithA">
                  Collaborating with a network of trusted partners, we
                  prioritize quality, reliability, and authenticity. Whether
                  you're seeking a peaceful retreat nestled in nature, a vibrant
                  urban escape, or an off-the-beaten-path adventure, our
                  handpicked collection of accommodations reflects our
                  commitment to providing you with the best possible stay.
                </p>
                <p :class="$style.atYourBooking">
                  At BookKing, we understand that every journey is
                  a unique story waiting to unfold. Our dedication to customer
                  satisfaction extends beyond the booking process, as we
                  continuously strive to enhance your overall travel experience.
                  We believe that travel is not just about reaching a
                  destination but immersing yourself in the culture, connecting
                  with locals, and creating meaningful memories along the way.
                </p>
              </div>
              <img
                :class="$style.image2Icon"
                loading="lazy"
                alt=""
                src="../../../public/assets/images/scenery2.png"
              />
            </div>
            <div :class="$style.embarkOnAJourneyOfDiscoveWrapper">
              <div :class="$style.embarkOnA">
                Embark on a journey of discovery with BookKing,
                and let us be your trusted companion in crafting remarkable
                travel experiences. Your adventure begins here, as we invite you
                to explore, dream, and book with confidence. Thank you for
                choosing us to be part of your travel story.
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
    name: "aboutusFrame",
  });
</script>
<style module>
  p{
    font-size: 16px;
    font-weight: 500;
    text-align: justify;
  }
  .aboutUs {
    margin: 0;
    width: 412px;
    height: 83.1px;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
  }
  .image1Icon {
    height: 416px;
    width: 640px;
    position: relative;
    object-fit: cover;
    max-width: 100%;
  }
  .welcomeToYour {
    margin: 0;
  }
  .ourUserCentricPlatform {
    margin: 0;
  }
  .welcomeToYourContainer {
    height: 368px;
    flex: 1;
    position: relative;
    letter-spacing: 0.04em;
    line-height: 30px;
    display: inline-block;
    min-width: 457px;
    max-width: 100%;
  }
  .image1Parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 64px;
    max-width: 100%;
  }
  .collaboratingWithA {
    margin: 0;
    text-align: right;
  }
  .atYourBooking {
    margin: 0;
    font-size: 16px;
  }
  .collaboratingWithAContainer {
    height: 368px;
    width: 606px;
    position: relative;
    letter-spacing: 0.04em;
    line-height: 30px;
    display: inline-block;
    flex-shrink: 0;
    min-width: 606px;
    max-width: 100%;
  }
  .image2Icon {
    height: 454px;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    object-fit: cover;
    min-width: 443px;
  }
  .footerFrames {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 60px;
    max-width: 100%;
  }
  .embarkOnA {
    height: 138px;
    width: 808px;
    position: relative;
    letter-spacing: 0.04em;
    line-height: 30px;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    font-size: 16px;
    font-weight: 500;
  }
  .embarkOnAJourneyOfDiscoveWrapper {
    width: 1242px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
  }
  .footerFramesParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 67px 0px;
    max-width: 100%;
  }
  .journeyTextInner {
    width: 1391px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-3xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: right;
  }
  .journeyText {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 94px 0px;
    max-width: 100%;
  }
  .collaborationImage {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-6xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-sm);
  }
  .welcomeText {
    width: 1414px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3.9px 0px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-45xl);
    color: var(--color-black);
    font-family: var(--font-tajawal);
  }

  @media screen and (max-width: 1350px) {
    .image1Icon {
      flex: 1;
    }

    .image1Parent {
      flex-wrap: wrap;
    }

    .collaboratingWithAContainer {
      flex: 1;
    }

    .footerFrames {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 925px) {
    .aboutUs {
      font-size: var(--font-size-32xl);
    }

    .welcomeToYourContainer {
      min-width: 100%;
    }

    .image1Parent {
      gap: 0px 32px;
    }

    .collaboratingWithAContainer {
      min-width: 100%;
    }

    .image2Icon {
      min-width: 100%;
    }

    .footerFrames {
      gap: 0px 30px;
    }

    .footerFramesParent {
      gap: 33px 0px;
    }

    .journeyText {
      gap: 47px 0px;
    }
  }
  @media screen and (max-width: 450px) {
    .aboutUs {
      font-size: var(--font-size-19xl);
    }

    .image1Parent {
      gap: 0px 16px;
    }

    .footerFramesParent {
      gap: 17px 0px;
    }

    .journeyText {
      gap: 23px 0px;
    }
  }
</style>
