<template>
    <div class="service" @click="redirectToServiceDetails(serviceId)">
      <h3>{{ serviceName }}</h3>
      <button class="delete-btn" title="Remove This Service" @click="deleteService">
      </button>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ServiceCard',
    props: {
      serviceName: {
        type: String,
        required: true,
      },
      serviceId: {
        type: String,
        required: true,
      },
      redirectToServiceDetails: {
        type: Function,
        required: true,
      },
    },
    methods: {
      deleteService(event) {
        event.stopPropagation();
        console.log(`Deleting service: ${this.serviceName}`);
      },
    },
  });
  </script>

<style scoped>
button:hover{
 cursor: pointer;
}

.service-dashboard {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-tajawal);
}

.updateservice{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
}

.wrapper {
  width: 100%;
  margin-top: 3rem;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 100%;
  height: 100%;
  margin-bottom: 2rem;
}

.profile-picture-setup {
  width: 20%;
  min-width: 300px;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;  
}

.profile-picture {
  border-radius: 10%;
  overflow: hidden;
  position: relative;
}

.profile-picture > img {
  width: 100%;
  display: block;
}

.profile-picture-setup > button {
  width: 50%;
  font-family: "poppins", sans-serif;
  background-color: yellow;
  font-weight: bold;
  color: black;
  height: 2rem;
  border-radius: 7px;
}

.profile-picture-setup > button:last-of-type{
  background: rgb(233, 114, 36);
  margin-bottom: 3rem;
}

.settings {
  width: 60%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  overflow-y: scroll;
  padding: 0 2rem;
}

.settings::-webkit-scrollbar {
  width: 20px;
}

.settings::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
.settings::-webkit-scrollbar-thumb {
  background: yellow; 
  border-radius: 10px;
  border: 1px solid black;
  height: 20px;
}

.settings::-webkit-scrollbar-thumb:hover {
  background: rgb(170, 170, 39);
}
.personal-settings{
  display: flex;
  flex-direction: column;
}

.personal-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: baseline;
  row-gap: 1rem;
}


.input-box {
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 280px;
}

.input-box  input,textarea{
  background-color: rgb(252, 252, 176);
  border-radius: 7px;
  border-width: 2px;
  margin: 0;
  padding: 1%;
  color: #000;
  word-wrap: break-word;
  height: 30px;
  font-size: 17px;
  width: 100%;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
}

.input-box:last-of-type {
  width: 100%
}

.input-box:last-of-type textarea{
  height: 5rem;
}

.info-update-btn {
  font-family: "poppins", sans-serif;
  background-color: yellow;
  color: black;
  padding: 6px 20px;
  border-radius: 7px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
}

.service-settings{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.services{
  margin-top: 1rem;
  display: flex;
  align-content: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  height: 100%;
  width: 100%;
}

.service{
  width: 30%;
  height: 30%;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: yellow;
  border: 2px solid black;
  position: relative;
  min-width: 300px;
  min-height: 140px;
}
.service > h3{
  font-weight: 700;
  font-family: "Poppins", sans-serif;
}

.service.add-new{
  background: transparent;
  border: 1px dashed black;
}
.service.add-new > img{
  height: 90%;
}

.delete-btn {
  position: absolute;
  top:0;
  right: 0;
  background: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.delete-btn > img{
  width: 12px;
}


@media screen and (max-width: 1200px) {
  .input-box {
    width: 100%;
  }
}

@media screen and (max-width: 750px) {
  .personal-settings{
    justify-content: center;
    align-items: center;
  }

  .personal-info {
    width: 95%;
  }

  .settings {
    padding: 0;
    margin-bottom: 3rem;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }
  .services{
    justify-content: space-evenly;
  }
  .service-settings{
    justify-content: center;
    align-items: center;
  }
  
}

@media screen and (max-width: 450px) {}
</style>
