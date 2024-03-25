<template>
  <div class="email-rectangle1">
    <div class="service-provider-login-wrapper">
      <h1 class="service-provider-login3">Admin Dashboard</h1>
    </div>
    <div class="dashboardicons">
      <a href="/">
        <img src="../../../public/assets/images/add.png" alt="Image description" class="img">
      </a>
      <a href="#">
        <img src="../../../public/assets/images/Delete.png" alt="Image description" class="img">
      </a>
    </div>

  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'adminDashboardContent'
})
</script>
<style scoped>

  .dashboardicons{
    margin-top: 100px;
  }

  .img{
    display:inline;
    list-style: none;
    margin: 0;
    margin-right: 150px;

  }

  .service-provider-login3 {
    margin: 0;
    height: 15px;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
  }
  .service-provider-login-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-5xs);
    box-sizing: border-box;
    max-width: 100%;
    margin-top: -140px;
  }
  .email-rectangle1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 21px 0px;
    max-width: 100%;
    flex-shrink: 0;
    text-align: left;
    font-size: var(--font-size-21xl);
    color: var(--color-black);
    font-family: var(--font-tajawal);
  }

  @media screen and (max-width: 925px) {
    .service-provider-login3 {
      font-size: var(--font-size-13xl);
    }

    .email-rectangle1 {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .service-provider-login3 {
      font-size: var(--font-size-5xl);
    }
  }
</style>
