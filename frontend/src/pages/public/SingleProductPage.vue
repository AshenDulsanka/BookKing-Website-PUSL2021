<template>
  <div :class="$style.singleProductPage">
    <main :class="$style.headerFrame">
      <newheader/>
      <singleProductFrame 
        v-if="service"
        :Name="service.Name"
        :LongDescription="service.LongDescription"
        :Location="service.Location"
        :Price="service.Price"
        :Image="`../../../public/uploads/${service.Image}`"
        :SID="service.SID"
      />
      
    </main>
  </div>
  <newfooter />
</template>

<script>
  import { defineComponent } from "vue";
  import newheader from "../../components/public/newheader.vue";
  import singleProductFrame from "../../components/public/singleProductFrame.vue";
  import newfooter from "../../components/public/newfooter.vue";
  import axios from "axios";

  export default defineComponent({
    name: "SingleProductPage",
    components: { newheader, singleProductFrame, newfooter },
    props: ["id"],
    data() {
      return {
        service: null,
      };
    },
    mounted() {
      this.fetchService();
    },
    methods: {
      async fetchService() {
        try {
          const response = await axios.post(
            "http://localhost:8081/api/singleService",
            {
              SID: this.id,
            }
          );
          this.service = response.data.data[0];
        } catch (error) {
          console.error(error);
        }
      },
    },
  });
</script>

<style module>
  .headerFrame {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 77px 0px;
    max-width: 100%;
  }
  .bookNow {
    width: 75px;
    position: relative;
    line-height: 120.31%;
    display: none;
  }
  .singleProductPage {
    width: 100%;
    height: 1024px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1409px 0px;
    letter-spacing: normal;
    text-align: center;
    font-size: var(--font-size-sm);
    color: var(--color-black);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 1825px) {
    .singleProductPage {
      height: auto;
    }
  }
  @media screen and (max-width: 1350px) {
    .headerFrame {
      gap: 38px 0px;
    }

    .singleProductPage {
      gap: 704px 0px;
    }
  }
  @media screen and (max-width: 925px) {
    .headerFrame {
      gap: 19px 0px;
    }

    .singleProductPage {
      gap: 352px 0px;
    }
  }
</style>../components/singleProductFrame.vue
