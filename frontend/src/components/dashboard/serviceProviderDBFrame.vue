<template>
  <section class="service-dashboard">
    <div class="wrapper">
      <div class="profile-picture">
        <img
          loading="lazy"
          alt="profile picture"
          src="../../../public/assets/images/User.png"
        />
      </div>
      <div class="your-services">
        <form class="personal-info" action="#" method="post">
          <div class="input-box">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="#" />
          </div>
          <div class="input-box">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" placeholder="#" />
          </div>
          <div class="input-box">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="#" />
          </div>
          <div class="input-box">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="#" />
          </div>
          <div class="input-box">
            <label for="profile">Profile</label>
            <input type="text" id="profile" name="profile" placeholder="#" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "serviceProviderDBFrame",
  setup() {
    // basic services fetch function
    // userServices = fetch('api/[userid]/services/')
    let sampleServices = ["car rental", "car wash", "detailing"];

    function deleteService() {
      let options = "";
      for (let i = 0; i < sampleServices.length; i++) {
        options += `${i + 1}. ${sampleServices[i]}\n`;
      }

      let person = prompt(`Choose What to Delete\n${options}`);

      if (person !== null && person >= 1 && person <= sampleServices.length) {
        window.alert(`Hello ${sampleServices[person - 1]} was deleted!`);
      }
    }

    const formVisible = ref(false);

    function addService() {
      formVisible.value = true;
    }

    function cancelForm() {
      formVisible.value = false;
    }

    function submitForm() {
      //post/api/[userid]/service/
      //   let options = "";
      //   for (let i = 0; i < sampleServices.length; i++) {
      //     options += `${i + 1}. ${sampleServices[i]}\n`;
      //   }

      //   let person = prompt(`Choose What to Delete\n${options}`);

      //   if (person !== null && person >= 1 && person <= sampleServices.length) {
      //     window.alert(`Hello ${sampleServices[person - 1]} was deleted!`);
      //   }
      formVisible.value = false;
    }
    return {
      sampleServices,
      deleteService,
      addService,
      cancelForm,
      submitForm,
      formVisible,
    };
  },
});
</script>

<style scoped>

.service-dashboard {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-tajawal);
}

.wrapper {
  width: 1674px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 100px;
  max-width: 100%;
}

.your-services {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 38px;
  min-width: 848px;
  max-width: 100%;
}

.input-box {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1350px) {
  
}
@media screen and (max-width: 925px) {
  
}
@media screen and (max-width: 450px) {
  
}
</style>
