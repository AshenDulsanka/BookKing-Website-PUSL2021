<template>
  <div class="service-provider-dashboard">
    <newheader />
    <main>
      <h1 class="header-tag">Service provider dashboard</h1>
      <serviceProviderDBFrame />
    </main>
    <newfooter />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import newheader from "../../components/public/newheader.vue";
import newfooter from "../../components/public/newfooter.vue";
import serviceProviderDBFrame from "../../components/dashboard/serviceProviderDBFrame.vue";

export default defineComponent({
  name: "ServiceProviderDashboard",
  components: { newheader, serviceProviderDBFrame, newfooter },
});
</script>
<style scoped>

@media screen and (max-width: 1825px) {
 
}
@media screen and (max-width: 1350px) {
  
}
@media screen and (max-width: 925px) {
  
}
@media screen and (max-width: 450px) {
  
}
</style>
