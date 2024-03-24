<template>
    <div class="service-provider-dashboard">
      <newheader />
      <main>
        <h1 class="header-tag">Edit Service</h1>
        <hr class="line">
        <serviceUpdateFrame />
      </main>
      
    </div>
    <newfooter />
  </template>
  <script>
  import { defineComponent } from "vue";
  import newheader from "../../components/public/newheader.vue";
  import newfooter from "../../components/public/newfooter.vue";
  import serviceUpdateFrame from "../../components/dashboard/serviceUpdateFrame.vue";
  
  export default defineComponent({
    name: "serviceUpdate",
    components: { newheader, serviceUpdateFrame, newfooter },
  });
  </script>
  <style scoped>
  main{
    height: 100%;
    min-height: 100vh;
  }
  .service-provider-dashboard{
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   min-height: 100vh;
  }
  .header-tag{
    font-weight: 700;
    text-transform: capitalize;
    padding: 0 5%;
    margin: 1% 0;
  }
  
  .line{
    border-top: 3px solid black;
    width: 99.5%;
    margin: auto;
  
  }
  
  @media screen and (max-width: 1825px) {
   
  }
  @media screen and (max-width: 1350px) {
    
  }
  @media screen and (max-width: 925px) {
    
  }
  @media screen and (max-width: 450px) {
    
  }
  </style>
  