<template>
  <div class="service-provider-dashboard">
    <NewHeader />
    <main class="paragraph">
      <section class="login-frame">
        <div class="service-provider-dashboard1">
          <h1 class="service-provider-dashboard2">
            Service provider dashboard
          </h1>
          <div class="name">
            <div class="ellipse" />
          </div>
        </div>
      </section>
      <serviceProviderDBFrame />
    </main>
    <NewFooter />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import NewHeader from "../components/NewHeader.vue";
  import NewFooter from "../components/newfooter.vue";
  import serviceProviderDBFrame from "../components/serviceProviderDBFrame.vue";

  export default defineComponent({
    name: "ServiceProviderDashboard",
    components: { NewHeader, serviceProviderDBFrame, NewFooter },
  });
</script>
<style scoped>
  .service-provider-dashboard2 {
    margin: 0;
    height: 83px;
    width: 811px;
    position: relative;
    font-size: inherit;
    font-weight: 700;
    font-family: inherit;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
  }
  .ellipse {
    align-self: stretch;
    height: 2px;
    position: relative;
    border-top: 2px solid var(--color-black);
    box-sizing: border-box;
  }
  .name {
    height: 34px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-15xl) 0px 0px;
    box-sizing: border-box;
    min-width: 625px;
    max-width: 100%;
    margin-left: -14px;
  }
  .service-provider-dashboard1 {
    width: 1778px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    row-gap: 20px;
    max-width: 100%;
  }
  .login-frame {
    width: 1866px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-7xl) var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-45xl);
    color: var(--color-black);
    font-family: var(--font-tajawal);
  }
  .paragraph {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 538px;
    box-sizing: border-box;
    gap: 116px 0px;
    max-width: 100%;
    flex-shrink: 0;
  }
  .service-provider-dashboard {
    width: 100%;
    height: 1718px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 177px 0px;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1825px) {
    .service-provider-dashboard {
      height: auto;
    }
  }
  @media screen and (max-width: 1350px) {
    .name {
      margin-left: 0;
    }

    .paragraph {
      gap: 58px 0px;
      padding-bottom: 350px;
      box-sizing: border-box;
    }

    .service-provider-dashboard {
      gap: 88px 0px;
    }
  }
  @media screen and (max-width: 925px) {
    .service-provider-dashboard2 {
      font-size: var(--font-size-32xl);
    }

    .name {
      min-width: 100%;
    }

    .paragraph {
      gap: 29px 0px;
      padding-bottom: 227px;
      box-sizing: border-box;
    }

    .service-provider-dashboard {
      gap: 44px 0px;
    }
  }
  @media screen and (max-width: 450px) {
    .service-provider-dashboard2 {
      font-size: var(--font-size-19xl);
    }

    .paragraph {
      padding-bottom: 148px;
      box-sizing: border-box;
    }
  }
</style>
../components/serviceProviderDBFrame.vue