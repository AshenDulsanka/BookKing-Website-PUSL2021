<template>
  <header class="header1">
    <img class="logopng-icon" loading="lazy" alt="" src="../logo.png" />
    <div class="home-frame">
      <div class="co-frame">
        <div class="home-wrapper">
          <div class="home3"><a href="#">Home</a></div>
        </div>
        <div class="services-wrapper">
          <div class="services2"><a href="#">Services</a></div>
        </div>
        <div class="review-wrapper">
          <div class="review6"><a href="#">Review</a></div>
        </div>
        <div class="contact-us-container">
          <div class="contact-us2"><a href="#">Contact us</a></div>
        </div>
        <div class="review-frame">
          <div class="about-us5"><a href="#"><a href="#">About Us</a></a></div>
        </div>
        <button class="about-us-frame">
          <div class="about-us-frame-child" />
          <div class="login2">Login</div>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header1'
})
</script>

<style scoped>
  a{
    text-decoration: none;
    font-family: "poppin", sans-serif;
    color: white
  }
  .logopng-icon {
    height: 125px;
    width: 146px;
    position: relative;
    object-fit: cover;
  }
  .home3 {
    position: relative;
    font-weight: 600;
    white-space: nowrap;
  }
  .home-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-mini) 0px 0px;
  }
  .services2 {
    position: relative;
    font-weight: 600;
  }
  .services-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-smi) 0px 0px;
  }
  .review6 {
    position: relative;
    font-weight: 600;
  }
  .review-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-smi) 0px 0px;
  }
  .contact-us2 {
    position: relative;
    font-weight: 600;
    white-space: nowrap;
  }
  .contact-us-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-smi) 0px 0px;
  }
  .about-us5 {
    position: relative;
    font-weight: 600;
    white-space: nowrap;
  }
  .review-frame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
  }
  .about-us-frame-child {
    height: 30.1px;
    width: 65px;
    position: relative;
    border-radius: var(--br-9xs);
    background-color: var(--color-yellow-100);
    display: none;
  }
  .login2 {
    position: relative;
    font-size: var(--font-size-sm);
    font-weight: 600;
    font-family: var(--font-poppins);
    color: var(--color-black);
    text-align: left;
  }
  .about-us-frame {
    cursor: pointer;
    border: none;
    padding: var(--padding-7xs) var(--padding-sm) 6.100000000000364px
      var(--padding-smi);
    background-color: var(--color-yellow-100);
    border-radius: var(--br-9xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .about-us-frame:hover {
    background-color: var(--color-yellow-200);
  }
  .co-frame {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px 17px;
  }
  .home-frame {
    height: 77px;
    width: 505px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
  }
  .header1 {
    align-self: stretch;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px var(--padding-23xl) 0px 0px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 99;
    max-width: 100%;
    gap: var(--gap-xl);
    text-align: left;
    font-size: 14px;
    color:white;
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1350px) {
    .header1 {
      padding-right: var(--padding-2xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 925px) {
    .co-frame {
      display: none;
    }

    .home-frame {
      width: 0px;
    }
  }
</style>
